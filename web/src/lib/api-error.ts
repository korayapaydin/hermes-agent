/**
 * User-facing error shape for the dashboard REST layer.
 *
 * `fetchJSON` used to throw `new Error("<status>: <raw body>")`, and ~40 toast
 * call sites interpolated the Error object (`Error: ${e}`), so users saw
 * `Error: Error: 404: {"detail":"Server 'foo' not found"}`. This module turns
 * that into a plain sentence (`Server 'foo' not found`) while keeping the
 * status and raw body on the error object for diagnostics.
 *
 * A status- or transport-derived sentence is generated copy, so `errorMessage`
 * renders it from the active locale's catalog; a server `detail` passes through
 * untouched, because it is the operator's only precise diagnostic.
 */

import type { Translations } from "@/i18n/types";
import { en } from "@/i18n/en";
import { pageCopy } from "@/lib/page-copy";

/** Which copy an ApiError carries: the server's own detail, or a generated sentence. */
type CopySource = "detail" | "status" | "unreachable";

/** The dashboard's own backend could not be reached at all (fetch rejected). */
export const API_UNREACHABLE_MESSAGE = en.error.apiUnreachable;

/** Statuses with a catalog sentence; anything else falls back to `error.unexpected`. */
const STATUSES = [400, 401, 403, 404, 409, 413, 422, 429, 500, 502, 503, 504] as const;

function hasStatusCopy(status: number): status is (typeof STATUSES)[number] {
  return (STATUSES as readonly number[]).includes(status);
}

/** English sentence for a status, kept on the error so `.message` stays readable in logs. */
function statusMessage(status: number): string {
  if (!hasStatusCopy(status)) return en.error.unexpected(status);
  return en.error.status[status];
}

/** Pull a human sentence out of a FastAPI-style error body, or null. */
export function extractDetail(body: string): string | null {
  const text = body.trim();
  if (!text) return null;
  if (text.startsWith("{") || text.startsWith("[")) {
    try {
      const parsed: unknown = JSON.parse(text);
      if (parsed && typeof parsed === "object") {
        const record = parsed as Record<string, unknown>;
        for (const key of ["detail", "message", "error"]) {
          const value = record[key];
          if (typeof value === "string" && value.trim()) return value.trim();
          // FastAPI validation errors: detail is a list of {msg, loc}.
          if (Array.isArray(value)) {
            const msgs = value
              .map((item) => (item && typeof item === "object" ? (item as { msg?: unknown }).msg : null))
              .filter((m): m is string => typeof m === "string");
            if (msgs.length) return msgs.join("; ");
          } else if (value && typeof value === "object") {
            // Structured detail ({error: "<code>", message: "<sentence>"}): the code is for
            // programs, the sentence is what the operator needs to act on.
            const message = (value as { message?: unknown }).message;
            if (typeof message === "string" && message.trim()) return message.trim();
          }
        }
      }
      return null;
    } catch {
      return null;
    }
  }
  if (text.startsWith("<")) return null; // HTML error page from a proxy
  return text.length <= 300 ? text : null;
}

export class ApiError extends Error {
  /** HTTP status; 0 when the request never reached the server. */
  readonly status: number;
  /** Raw response body (or the transport error text) for a Copy-details action. */
  readonly body: string;
  /** Request URL (path only), for diagnostics. */
  readonly url: string;
  /** Where `message` came from; `errorMessage` localizes everything but `detail`. */
  readonly copy: CopySource;

  constructor(
    message: string,
    init: { status: number; body: string; url: string; copy: CopySource },
  ) {
    super(message);
    this.name = "ApiError";
    this.status = init.status;
    this.body = init.body;
    this.url = init.url;
    this.copy = init.copy;
  }

  /** Multi-line technical detail for a Copy-details action or console. */
  get details(): string {
    const head = this.status ? `HTTP ${this.status} ${this.url}` : `network failure ${this.url}`;
    return this.body ? `${head}\n${this.body}` : head;
  }
}

export function apiErrorFromResponse(status: number, body: string, url: string): ApiError {
  const detail = extractDetail(body);
  if (detail) return new ApiError(detail, { status, body, url, copy: "detail" });
  return new ApiError(statusMessage(status), { status, body, url, copy: "status" });
}

export function apiErrorFromNetworkFailure(cause: unknown, url: string): ApiError {
  const body = cause instanceof Error ? `${cause.name}: ${cause.message}` : String(cause);
  return new ApiError(API_UNREACHABLE_MESSAGE, { status: 0, body, url, copy: "unreachable" });
}

function localizedCopy(err: ApiError, t: Translations): string {
  const copy = pageCopy(t, "error");
  if (err.copy === "unreachable") return copy.apiUnreachable;
  if (err.copy === "status") {
    return hasStatusCopy(err.status) ? copy.status[err.status] : copy.unexpected(err.status);
  }
  return err.message || err.name;
}

/**
 * The one way to turn a caught `unknown` into toast/inline text. Never yields
 * a `Error: Error:` double prefix because it reads `.message`, not `String(e)`.
 * Generated sentences follow the active locale; server details pass through.
 */
export function errorMessage(err: unknown, t: Translations): string {
  if (err instanceof ApiError) return localizedCopy(err, t);
  if (typeof err === "string") return err;
  return String(err);
}
