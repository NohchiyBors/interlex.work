// Collects everything the API routes know about the visitor at the moment of
// form submission, and renders it into the lead-notification email.
//
// Two sources of context:
//
// 1. Server-side headers (this file's `collectServerRequestContext`) —
//    available without cooperation from the client. Includes the IP the
//    request reached us from (with proper proxy-header precedence), the
//    User-Agent string, Accept-Language, and Client Hints (`Sec-CH-UA*`)
//    that modern Chromium browsers send.
//
// 2. Client-side context (see `src/lib/client-context.ts`) — collected in
//    the browser at submit time and sent as part of the JSON payload.
//    Includes the page URL, the in-page referrer, screen and viewport
//    sizes, navigator.language / platform / hardwareConcurrency, the
//    visitor's timezone, color-scheme preference, and any UTM parameters.
//
// Both are merged into the InterLex lead notification only — the autoreply
// to the visitor stays minimal and never echoes their context back.

export type ServerRequestContext = Readonly<{
  ip: string;
  forwardedFor: string;
  realIp: string;
  cfConnectingIp: string;
  userAgent: string;
  acceptLanguage: string;
  referer: string;
  origin: string;
  secChUa: string;
  secChUaMobile: string;
  secChUaPlatform: string;
  secChUaPlatformVersion: string;
  secChUaModel: string;
}>;

export type ClientContext = Readonly<{
  pagePath?: string;
  pageUrl?: string;
  referrer?: string;
  screenWidth?: number;
  screenHeight?: number;
  pixelRatio?: number;
  viewportWidth?: number;
  viewportHeight?: number;
  language?: string;
  languages?: readonly string[];
  platform?: string;
  timezone?: string;
  hardwareConcurrency?: number;
  deviceMemoryGb?: number;
  touchPoints?: number;
  colorScheme?: "light" | "dark";
  reducedMotion?: boolean;
  utm?: Readonly<Record<string, string>>;
  sessionMs?: number;
}>;

export function collectServerRequestContext(request: Request): ServerRequestContext {
  const h = request.headers;
  return {
    ip: pickClientIp(h),
    forwardedFor: h.get("x-forwarded-for") ?? "",
    realIp: h.get("x-real-ip") ?? "",
    cfConnectingIp: h.get("cf-connecting-ip") ?? "",
    userAgent: h.get("user-agent") ?? "",
    acceptLanguage: h.get("accept-language") ?? "",
    referer: h.get("referer") ?? "",
    origin: h.get("origin") ?? "",
    secChUa: h.get("sec-ch-ua") ?? "",
    secChUaMobile: h.get("sec-ch-ua-mobile") ?? "",
    secChUaPlatform: h.get("sec-ch-ua-platform") ?? "",
    secChUaPlatformVersion: h.get("sec-ch-ua-platform-version") ?? "",
    secChUaModel: h.get("sec-ch-ua-model") ?? "",
  };
}

function pickClientIp(headers: Headers): string {
  // Cloudflare > Vercel/Render proxy chain > direct connection.
  const cf = headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() ?? "";
  const real = headers.get("x-real-ip");
  if (real) return real.trim();
  return "";
}

// ── Light User-Agent parsing ─────────────────────────────────────────────────
// Best-effort detection of browser, OS and device class for skim-readable
// emails. We deliberately avoid `ua-parser-js` to keep the dependency
// footprint small; the raw UA is also included so a human can disambiguate.

export type ParsedUserAgent = Readonly<{
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: "desktop" | "mobile" | "tablet" | "bot" | "unknown";
}>;

export function parseUserAgent(ua: string): ParsedUserAgent {
  if (!ua) {
    return {
      browser: "",
      browserVersion: "",
      os: "",
      osVersion: "",
      device: "unknown",
    };
  }

  const lower = ua.toLowerCase();
  const isBot = /bot|crawler|spider|crawling|headlesschrome|phantomjs|googlebot/.test(lower);
  const isTablet = /ipad|tablet|kindle|silk|playbook/.test(lower);
  const isMobile = !isTablet && /mobi|iphone|ipod|android.*mobile|opera mini|iemobile/.test(lower);

  // Browser
  let browser = "";
  let browserVersion = "";
  const browserMatchers: Array<[RegExp, string]> = [
    [/edg(?:e|ios|a)?\/([\d.]+)/i, "Edge"],
    [/opr\/([\d.]+)/i, "Opera"],
    [/yabrowser\/([\d.]+)/i, "Yandex"],
    [/firefox\/([\d.]+)/i, "Firefox"],
    [/chrome\/([\d.]+)/i, "Chrome"],
    [/safari\/[\d.]+.*version\/([\d.]+)/i, "Safari"],
  ];
  for (const [re, name] of browserMatchers) {
    const m = ua.match(re);
    if (m) {
      browser = name;
      browserVersion = m[1] ?? "";
      break;
    }
  }

  // OS
  let os = "";
  let osVersion = "";
  if (/windows nt/i.test(ua)) {
    os = "Windows";
    const m = ua.match(/windows nt ([\d.]+)/i);
    osVersion = m?.[1] ?? "";
  } else if (/iphone os|ipad; cpu os|cpu iphone os/i.test(ua)) {
    os = "iOS";
    const m = ua.match(/(?:iphone os|cpu os) (\d+[_\d]*)/i);
    osVersion = m?.[1]?.replaceAll("_", ".") ?? "";
  } else if (/mac os x/i.test(ua)) {
    os = "macOS";
    const m = ua.match(/mac os x (\d+[_\d.]*)/i);
    osVersion = m?.[1]?.replaceAll("_", ".") ?? "";
  } else if (/android/i.test(ua)) {
    os = "Android";
    const m = ua.match(/android ([\d.]+)/i);
    osVersion = m?.[1] ?? "";
  } else if (/linux/i.test(ua)) {
    os = "Linux";
  }

  const device = isBot ? "bot" : isTablet ? "tablet" : isMobile ? "mobile" : os ? "desktop" : "unknown";

  return { browser, browserVersion, os, osVersion, device };
}

// ── Email rendering ──────────────────────────────────────────────────────────

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function dash(value: string | number | undefined | null): string {
  if (value === undefined || value === null) return "-";
  if (typeof value === "string") return value.length === 0 ? "-" : value;
  return String(value);
}

function formatBrowser(parsed: ParsedUserAgent): string {
  if (!parsed.browser && !parsed.os) return "-";
  const browser = parsed.browser
    ? `${parsed.browser}${parsed.browserVersion ? ` ${parsed.browserVersion}` : ""}`
    : "Unknown browser";
  const os = parsed.os
    ? `${parsed.os}${parsed.osVersion ? ` ${parsed.osVersion}` : ""}`
    : "Unknown OS";
  return `${browser} · ${os} · ${parsed.device}`;
}

function formatScreen(client: ClientContext | undefined): string {
  if (!client?.screenWidth || !client?.screenHeight) return "-";
  const px = client.pixelRatio ? ` @${client.pixelRatio}x` : "";
  return `${client.screenWidth}×${client.screenHeight}${px}`;
}

function formatViewport(client: ClientContext | undefined): string {
  if (!client?.viewportWidth || !client?.viewportHeight) return "-";
  return `${client.viewportWidth}×${client.viewportHeight}`;
}

function formatUtm(client: ClientContext | undefined): string {
  if (!client?.utm) return "-";
  const entries = Object.entries(client.utm).filter(([, v]) => !!v);
  if (entries.length === 0) return "-";
  return entries.map(([k, v]) => `${k}=${v}`).join(" · ");
}

function formatLanguages(client: ClientContext | undefined, fallbackHeader: string): string {
  const list = client?.languages && client.languages.length > 0 ? client.languages.join(", ") : "";
  if (list) return list;
  return fallbackHeader || "-";
}

function formatSession(client: ClientContext | undefined): string {
  if (typeof client?.sessionMs !== "number" || !Number.isFinite(client.sessionMs)) return "-";
  const seconds = Math.round(client.sessionMs / 1000);
  if (seconds < 60) return `${seconds} s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export type ContextLines = Readonly<{
  rows: ReadonlyArray<readonly [string, string]>;
  text: string;
  html: string;
}>;

export function buildContextLines(
  server: ServerRequestContext,
  client: ClientContext | undefined,
): ContextLines {
  const parsed = parseUserAgent(server.userAgent);

  const rows: Array<[string, string]> = [
    ["Page URL", dash(client?.pageUrl)],
    ["Page path", dash(client?.pagePath)],
    ["Referrer", dash(client?.referrer || server.referer)],
    ["UTM / ad params", formatUtm(client)],
    ["Time on page", formatSession(client)],
    ["IP", dash(server.ip)],
    ["x-forwarded-for", dash(server.forwardedFor)],
    ["x-real-ip", dash(server.realIp)],
    ["cf-connecting-ip", dash(server.cfConnectingIp)],
    ["Origin", dash(server.origin)],
    ["Browser", formatBrowser(parsed)],
    ["User-Agent", dash(server.userAgent)],
    [
      "Sec-CH-UA",
      [server.secChUa, server.secChUaMobile, server.secChUaPlatform, server.secChUaPlatformVersion, server.secChUaModel]
        .filter(Boolean)
        .join(" · ") || "-",
    ],
    ["Languages", formatLanguages(client, server.acceptLanguage)],
    ["navigator.language", dash(client?.language)],
    ["Accept-Language", dash(server.acceptLanguage)],
    ["Platform (navigator)", dash(client?.platform)],
    ["Timezone", dash(client?.timezone)],
    ["Screen", formatScreen(client)],
    ["Viewport", formatViewport(client)],
    ["Hardware threads", dash(client?.hardwareConcurrency)],
    ["Device memory", client?.deviceMemoryGb ? `${client.deviceMemoryGb} GB` : "-"],
    ["Touch points", dash(client?.touchPoints)],
    ["Color scheme", dash(client?.colorScheme)],
    [
      "Reduced motion",
      typeof client?.reducedMotion === "boolean" ? (client.reducedMotion ? "yes" : "no") : "-",
    ],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `
    <table role="presentation" cellspacing="0" cellpadding="6" style="border-collapse:collapse;font-size:13px;line-height:1.4">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="color:#666;padding-right:14px;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(
              k,
            )}</strong></td><td style="vertical-align:top;word-break:break-word">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  return { rows, text, html };
}
