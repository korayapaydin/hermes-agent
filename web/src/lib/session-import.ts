import type { SessionImportResponse } from "@/lib/api";
import type { Translations } from "@/i18n/types";

export type ImportableSession = Record<string, unknown>;

function normalizeImportSessions(value: unknown, t: Translations): ImportableSession[] {
  const candidate =
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Array.isArray((value as { sessions?: unknown }).sessions)
      ? (value as { sessions: unknown[] }).sessions
      : Array.isArray(value)
        ? value
        : [value];

  const sessions = candidate.filter(
    (item): item is ImportableSession =>
      !!item && typeof item === "object" && !Array.isArray(item),
  );
  if (sessions.length !== candidate.length) {
    throw new Error(t.session!.import!.expectedJson!);
  }
  return sessions;
}

export function parseImportSessions(text: string, t: Translations): ImportableSession[] {
  const trimmed = text.trim();
  if (!trimmed) throw new Error(t.session!.import!.fileEmpty!);

  try {
    return normalizeImportSessions(JSON.parse(trimmed), t);
  } catch (jsonError) {
    const lines = trimmed.split(/\r?\n/).filter((line) => line.trim());
    if (lines.length <= 1) throw jsonError;
    return normalizeImportSessions(lines.map((line) => JSON.parse(line)), t);
  }
}

export function importSummary(result: SessionImportResponse): string {
  const parts = [`${result.imported} imported`];
  if (result.skipped > 0) parts.push(`${result.skipped} skipped`);
  if (result.detached > 0) {
    parts.push(`${result.detached} detached from missing parents`);
  }
  return parts.join("; ");
}
