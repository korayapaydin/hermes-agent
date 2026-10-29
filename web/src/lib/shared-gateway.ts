import type { StatusResponse } from "@/lib/api";
import { ApiError } from "@/lib/api-error";
import type { Translations } from "@/i18n/types";

/** Profiles a gateway restart would blip when the managed profile is carried by the shared
 *  multiplexer (default first). `null` for a standalone gateway or an older backend without
 *  `gateway_shared_with`; those keep the plain restart copy. */
export function sharedGatewayProfiles(
  status: Pick<StatusResponse, "gateway_shared_with"> | null | undefined,
): string[] | null {
  const shared = status?.gateway_shared_with;
  if (!Array.isArray(shared)) return null;
  const names = [...new Set(shared.map((n) => String(n).trim()).filter(Boolean))];
  if (names.length < 2) return null;
  return names.sort((a, b) =>
    a === "default" ? -1 : b === "default" ? 1 : a.localeCompare(b),
  );
}

export function sharedGatewayRestartDescription(profiles: string[], t: Translations): string {
  return t.sharedGateway!.reconnectAll!(profiles.join(", "));
}

export function sharedGatewayRestartedMessage(count: number, t: Translations): string {
  return t.sharedGateway!.restarted!(count);
}

/** Raw `gateway_state` values (gateway/status.py) that have catalog copy. */
const GATEWAY_STATES = ["running", "starting", "degraded", "stopped", "startup_failed"] as const;
type GatewayStateKey = (typeof GATEWAY_STATES)[number];

function isGatewayState(state: string): state is GatewayStateKey {
  return (GATEWAY_STATES as readonly string[]).includes(state);
}

/** Plain description of the gateway's state; null/unknown falls back to running/stopped. */
export function gatewayStateDescription(
  state: string | null | undefined,
  running: boolean | undefined,
  t: Translations,
): string {
  const copy = t.gateway!.state!;
  // A `degraded` record of a dead process is a watchdog exit, not a live gateway with channels down.
  if (state === "degraded" && running === false) return copy.exitedDegraded!;
  if (state && isGatewayState(state)) return copy[state]!;
  return running ? copy.running! : copy.stopped!;
}

/** True when the state points at Logs as the next step. */
export function gatewayStateNeedsLogs(state: string | null | undefined): boolean {
  return state === "startup_failed" || state === "degraded";
}

/** Toast for a failed Start/Stop/Restart: lead with the outcome, then the detail, then the fix.
 *  `error` (the caught value) decides whether the Logs pointer makes sense: when the dashboard
 *  itself is unreachable (ApiError.status 0) the Logs page cannot load either, so it is omitted. */
export function gatewayActionFailedMessage(
  verb: "start" | "stop" | "restart",
  detail: string,
  error: unknown,
  t: Translations,
): string {
  const action = t.gateway!.action!;
  const verbCopy: Record<typeof verb, string> = {
    start: action.couldNotStart!,
    stop: action.couldNotStop!,
    restart: action.couldNotRestart!,
  };
  const trimmed = detail.trim().replace(/\.+$/, "");
  const ended = /[!?]$/.test(trimmed);
  const head = trimmed
    ? `${verbCopy[verb]}: ${trimmed}${ended ? "" : "."}`
    : `${verbCopy[verb]}.`;
  const unreachable = error instanceof ApiError && error.status === 0;
  return unreachable ? head : `${head} ${action.openLogs!}`;
}

/** A 409 on gateway start/stop for a served profile carries the multiplexer explanation in
 *  `detail`, which `fetchJSON` already lifts into `ApiError.message`. Return it, else null. */
export function servedProfileRefusal(error: unknown): string | null {
  if (error instanceof ApiError) {
    return error.status === 409 ? error.message : null;
  }
  // Pre-ApiError shape (`"409: {...}"`) from callers that still hand-roll fetch.
  const text = error instanceof Error ? error.message : String(error ?? "");
  if (!text.startsWith("409")) return null;
  const detail = text.match(/"detail"\s*:\s*"([^"]+)"/)?.[1];
  return detail ?? text.replace(/^409:\s*/, "");
}
