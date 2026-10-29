import { describe, expect, it } from "vitest";

import { en } from "@/i18n/en";
import { importSummary, parseImportSessions } from "./session-import";

describe("parseImportSessions", () => {
  it("accepts a single exported session", () => {
    expect(parseImportSessions('{"id":"session-1","messages":[]}', en)).toEqual([
      { id: "session-1", messages: [] },
    ]);
  });

  it("accepts arrays and wrapped session exports", () => {
    const sessions = [{ id: "one" }, { id: "two" }];
    expect(parseImportSessions(JSON.stringify(sessions), en)).toEqual(sessions);
    expect(parseImportSessions(JSON.stringify({ sessions }), en)).toEqual(sessions);
  });

  it("accepts JSONL session exports", () => {
    expect(parseImportSessions('{"id":"one"}\n\n{"id":"two"}\n', en)).toEqual([
      { id: "one" },
      { id: "two" },
    ]);
  });

  it("rejects empty files and non-object entries", () => {
    expect(() => parseImportSessions("  \n", en)).toThrow("File is empty");
    expect(() => parseImportSessions('[{"id":"one"},42]', en)).toThrow(
      "Expected exported session JSON or JSONL",
    );
  });
});

describe("importSummary", () => {
  it("includes skipped and detached counts only when present", () => {
    expect(
      importSummary({
        ok: true,
        imported: 2,
        skipped: 1,
        detached: 1,
        imported_ids: ["one", "two"],
        skipped_ids: ["existing"],
        errors: [],
      }),
    ).toBe("2 imported; 1 skipped; 1 detached from missing parents");
  });
});
