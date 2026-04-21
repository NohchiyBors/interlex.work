import type { Locale } from "@/lib/i18n";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";

const localeAliases = new Map<string, Locale>([
  ["en", "en"],
  ["ru", "ru"],
  ["zh", "zh"],
  ["zh-cn", "zh"],
  ["zh-hans", "zh"],
  ["it", "it"],
  ["fr", "fr"],
  ["ka", "ka"],
  ["de", "de"],
  ["ar", "ar"],
  ["tr", "tr"],
  ["es", "es"],
]);

function normalizeLanguageTag(value: string) {
  return value.trim().toLowerCase();
}

function resolveLanguageTag(tag: string): Locale | null {
  const normalized = normalizeLanguageTag(tag);

  if (hasLocale(normalized)) {
    return normalized;
  }

  const directMatch = localeAliases.get(normalized);
  if (directMatch) {
    return directMatch;
  }

  const baseTag = normalized.split("-")[0];
  return localeAliases.get(baseTag) ?? null;
}

export function detectLocaleFromHeader(headerValue: string | null): Locale {
  if (!headerValue) {
    return defaultLocale;
  }

  const ranked = headerValue
    .split(",")
    .map((entry) => {
      const [tagPart, ...params] = entry.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number.parseFloat(qParam.split("=")[1] ?? "1") : 1;

      return {
        tag: tagPart,
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.tag)
    .sort((left, right) => right.quality - left.quality);

  for (const candidate of ranked) {
    const resolved = resolveLanguageTag(candidate.tag);
    if (resolved) {
      return resolved;
    }
  }

  return defaultLocale;
}

export function hasLocalePrefix(pathname: string) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}
