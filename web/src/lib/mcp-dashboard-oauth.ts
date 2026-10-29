import type { McpOAuthFlow } from "./api";
import type { Translations } from "@/i18n/types";

type CompleteOptions = {
  serverName: string;
  start: (name: string) => Promise<McpOAuthFlow>;
  status: (flowId: string) => Promise<McpOAuthFlow>;
  open: (url?: string | URL, target?: string, features?: string) => unknown;
  sleep?: (milliseconds: number) => Promise<void>;
  maxPollFailures?: number;
  t: Translations;
};

const defaultSleep = (milliseconds: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export async function completeMcpDashboardOAuth({
  serverName,
  start,
  status,
  open,
  sleep = defaultSleep,
  maxPollFailures = 3,
  t,
}: CompleteOptions): Promise<McpOAuthFlow> {
  const copy = t.mcp!;
  // Open synchronously from the click handler, before the first await. Browsers
  // otherwise classify the later OAuth popup as unsolicited and block it.
  const authWindow = open("about:blank", "_blank") as Window | null;
  if (!authWindow) {
    throw new Error(copy.oauthPopupBlocked!);
  }
  authWindow.opener = null;
  let started: McpOAuthFlow;
  try {
    started = await start(serverName);
    if (started.status === "error") {
      throw new Error(started.error || copy.oauthFailedToStart!);
    }
    if (!started.authorization_url) {
      throw new Error(copy.oauthNoUrl!);
    }
    authWindow.location.href = started.authorization_url;
  } catch (error) {
    authWindow.close();
    throw error;
  }

  let pollFailures = 0;
  for (;;) {
    let current: McpOAuthFlow;
    try {
      current = await status(started.flow_id);
      pollFailures = 0;
    } catch (error) {
      pollFailures += 1;
      if (pollFailures >= maxPollFailures) throw error;
      await sleep(1000);
      continue;
    }
    if (current.status === "approved") return current;
    if (current.status === "error") {
      throw new Error(current.error || copy.oauthAuthorizationFailed!);
    }
    if (authWindow.closed) {
      throw new Error(copy.oauthWindowClosed!);
    }
    await sleep(1000);
  }
}
