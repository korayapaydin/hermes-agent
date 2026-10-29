import { useEffect, useState } from "react";
import { BarChart3, X } from "lucide-react";
import { api, type SharedMetricsConsent } from "@/lib/api";
import { useProfileScope } from "@/contexts/useProfileScope";
import { useI18n } from "@/i18n";
import { pageCopy } from "@/lib/page-copy";

const DOCS_URL =
  "https://hermes-agent.nousresearch.com/docs/developer-guide/relay-shared-metrics";
const STORAGE_KEY = "sharedMetricsOfferDismissed";

/**
 * The dashboard's first-run shared-metrics offer: the twin of Desktop's composer strip and the
 * terminal's offer, with the same two equal answers. Shown while the managed profile has no
 * answer in its config.yaml; answering writes it (every surface then stops asking), while the X
 * only hides the banner for this browser session. A re-ask (``reask``) is the exception: its X
 * keeps the recorded "No thanks", so nobody is asked a third time.
 */
export function SharedMetricsConsentBanner() {
  const { t } = useI18n();
  const app = pageCopy(t, "app");
  const { profile } = useProfileScope();
  // Keyed by the profile it was read for, so a profile switch hides a stale answer at once.
  const [loaded, setLoaded] = useState<{ profile: string; consent: SharedMetricsConsent } | null>(
    null,
  );
  const [saving, setSaving] = useState(false);
  const [failed, setFailed] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    let live = true;
    api
      .getSharedMetricsConsent()
      .then((next) => {
        if (live) setLoaded({ profile, consent: next });
      })
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, [profile]);

  const consent = loaded?.profile === profile ? loaded.consent : null;
  if (dismissed || !consent || consent.decided || consent.managed) return null;

  const answer = (enabled: boolean, send: boolean) => {
    setSaving(true);
    setFailed(false);
    api
      .saveSharedMetricsConsent({ enabled, send })
      .then((next) => setLoaded({ profile, consent: next }))
      .catch(() => setFailed(true))
      .finally(() => setSaving(false));
  };
  const dismiss = () => {
    // A re-ask settles on any response: closing it keeps the recorded "No thanks" for good.
    if (consent.reask) {
      answer(false, false);
      return;
    }
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setDismissed(true);
  };
  const choice =
    "shrink-0 rounded border border-current/30 px-2 py-0.5 hover:bg-current/10 disabled:opacity-50";

  return (
    <div
      role="region"
      aria-label={app.sharedMetricsTitle}
      data-testid="shared-metrics-consent-banner"
      className="flex flex-wrap items-center gap-2 border-b border-current/20 bg-current/5 px-4 py-1.5 text-xs text-midground"
    >
      <BarChart3 className="h-3.5 w-3.5 shrink-0" />
      <span className="font-semibold">{app.sharedMetricsTitle}</span>
      <span className="min-w-0 flex-1 opacity-80">
        {failed
          ? app.sharedMetricsSaveFailed
          : consent.reask
            ? app.sharedMetricsReaskBody
            : app.sharedMetricsBody}{" "}
        <a href={DOCS_URL} target="_blank" rel="noreferrer" className="underline">
          {app.sharedMetricsDetails}
        </a>
      </span>
      <button type="button" disabled={saving} className={choice} onClick={() => answer(true, true)}>
        {app.sharedMetricsShare}
      </button>
      <button type="button" disabled={saving} className={choice} onClick={() => answer(false, false)}>
        {app.sharedMetricsOff}
      </button>
      <button
        type="button"
        aria-label={app.dismiss}
        onClick={dismiss}
        className="shrink-0 opacity-70 hover:opacity-100"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
