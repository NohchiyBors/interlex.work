// Captures everything the browser knows about the visitor at the moment a
// form is submitted, then ships it to the API as part of the JSON payload.
// Designed to be safe in SSR (returns an empty object when window is
// undefined) and to fail closed: any individual probe is wrapped in a
// try/catch so a hostile or unusual environment never breaks form submit.

import type { ClientContext } from "@/lib/request-context";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "yclid",
  "msclkid",
  "ref",
] as const;

const tryRun = <T,>(fn: () => T): T | undefined => {
  try {
    return fn();
  } catch {
    return undefined;
  }
};

export function collectClientContext(pageLoadedAt?: number): ClientContext {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {};
  }

  const utm: Record<string, string> = {};
  tryRun(() => {
    const params = new URL(window.location.href).searchParams;
    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) utm[key] = v;
    }
  });

  const navigatorWithExtras = navigator as Navigator & { deviceMemory?: number };

  const sessionMs =
    typeof pageLoadedAt === "number" && Number.isFinite(pageLoadedAt)
      ? Math.max(0, Date.now() - pageLoadedAt)
      : undefined;

  return {
    pagePath: tryRun(() => window.location.pathname),
    pageUrl: tryRun(() => window.location.href),
    referrer: tryRun(() => document.referrer) || undefined,
    screenWidth: tryRun(() => window.screen?.width),
    screenHeight: tryRun(() => window.screen?.height),
    pixelRatio: tryRun(() => window.devicePixelRatio),
    viewportWidth: tryRun(() => window.innerWidth),
    viewportHeight: tryRun(() => window.innerHeight),
    language: tryRun(() => navigator.language),
    languages: tryRun(() =>
      navigator.languages && navigator.languages.length > 0 ? Array.from(navigator.languages) : undefined,
    ),
    platform: tryRun(() => navigator.platform),
    timezone: tryRun(() => Intl.DateTimeFormat().resolvedOptions().timeZone),
    hardwareConcurrency: tryRun(() => navigator.hardwareConcurrency),
    deviceMemoryGb: tryRun(() => navigatorWithExtras.deviceMemory),
    touchPoints: tryRun(() => navigator.maxTouchPoints),
    colorScheme: tryRun(() =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    ),
    reducedMotion: tryRun(() =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    ),
    utm: Object.keys(utm).length > 0 ? utm : undefined,
    sessionMs,
  };
}
