import { describe, expect, it } from "vitest";

import { en } from "@/i18n/en";
import { type McpServerDraft, buildMcpServerCreate, emptyMcpServerDraft } from "./mcp-server-create";

/** These tests assert the copy, not the locale mechanism, so they run on English. */
const buildServer = (draft: McpServerDraft) => buildMcpServerCreate(draft, en);

describe("buildMcpServerCreate", () => {
  it("builds an HTTP Bearer request without stdio fields", () => {
    const server = buildServer({
      ...emptyMcpServerDraft(),
      name: " Linear ",
      url: " https://mcp.linear.app/mcp ",
      httpAuth: "header",
      bearerToken: "Bearer secret-token",
      command: "ignored",
      args: "--ignored",
      env: "IGNORED=value",
    });

    expect(server).toEqual({
      name: "Linear",
      url: "https://mcp.linear.app/mcp",
      auth: "header",
      bearer_token: "Bearer secret-token",
    });
  });

  it("builds OAuth and unauthenticated HTTP requests without a token", () => {
    expect(
      buildServer({
        ...emptyMcpServerDraft(),
        name: "oauth",
        url: "https://example.com/mcp",
        httpAuth: "oauth",
      }),
    ).toEqual({
      name: "oauth",
      url: "https://example.com/mcp",
      auth: "oauth",
    });

    expect(
      buildServer({
        ...emptyMcpServerDraft(),
        name: "public",
        url: "https://example.com/mcp",
      }),
    ).toEqual({
      name: "public",
      url: "https://example.com/mcp",
    });
  });

  it("parses stdio arguments and environment assignments", () => {
    const server = buildServer({
      ...emptyMcpServerDraft(),
      name: "local",
      transport: "stdio",
      command: " uvx ",
      args: "mcp-server, --debug",
      env: "API_KEY=secret\nURL=https://example.com?a=b\nINVALID",
    });

    expect(server).toEqual({
      name: "local",
      command: "uvx",
      args: ["mcp-server", "--debug"],
      env: {
        API_KEY: "secret",
        URL: "https://example.com?a=b",
      },
    });
  });

  it("rejects missing transport fields and Bearer tokens", () => {
    expect(() => buildServer(emptyMcpServerDraft())).toThrow(
      "Name required",
    );
    expect(() =>
      buildServer({
        ...emptyMcpServerDraft(),
        name: "remote",
      }),
    ).toThrow("URL required");
    expect(() =>
      buildServer({
        ...emptyMcpServerDraft(),
        name: "remote",
        url: "https://example.com/mcp",
        httpAuth: "header",
      }),
    ).toThrow("Bearer token required");
    expect(() =>
      buildServer({
        ...emptyMcpServerDraft(),
        name: "local",
        transport: "stdio",
      }),
    ).toThrow("Command required");
  });
});
