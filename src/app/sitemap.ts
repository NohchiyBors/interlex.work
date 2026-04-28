import type { MetadataRoute } from "next";
import { baseUrl, defaultLocale, hreflangMap, localePath, locales } from "@/lib/i18n";
import { getHubSeoPageSlugs } from "@/lib/hub-seo-pages";

const routeSlugs = [
  "",
  "about",
  "cross-border",
  "contact",
  "briefs",
  "cookies",
  "kazakhstan-vs-georgia",
  "cross-border-structuring",
  "international-market-entry",
  ...getHubSeoPageSlugs(),
] as const;

// Stable lastModified — bumped manually when sitemap content (routes/locales)
// changes meaningfully, so search engines see a real signal instead of a
// build-time `new Date()` that flips on every deploy.
const lastModified = new Date("2026-04-28T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routeSlugs.flatMap((slug) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [hreflangMap[locale], `${baseUrl}${localePath(locale, slug)}`]),
    );
    languages["x-default"] = `${baseUrl}${localePath(defaultLocale, slug)}`;

    return locales.map((locale, index) => ({
      url: `${baseUrl}${localePath(locale, slug)}`,
      lastModified,
      changeFrequency: slug === "" ? "weekly" : "monthly",
      priority: slug === "" ? (index === 0 ? 1 : 0.9) : 0.7,
      alternates: {
        languages,
      },
    }));
  });
}
