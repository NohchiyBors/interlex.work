import type { MetadataRoute } from "next";
import { baseUrl, defaultLocale, hreflangMap, localePath, locales } from "@/lib/i18n";
import { collectRouteSlugs, getRouteConfig } from "@/lib/sitemap-routes";

// Stable lastModified — bumped manually when sitemap content (routes/locales)
// changes meaningfully, so search engines see a real signal instead of a
// build-time `new Date()` that flips on every deploy.
const lastModified = new Date("2026-04-29T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const routeSlugs = collectRouteSlugs();

  return routeSlugs.flatMap((slug) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [hreflangMap[locale], `${baseUrl}${localePath(locale, slug)}`]),
    );
    languages["x-default"] = `${baseUrl}${localePath(defaultLocale, slug)}`;

    const { changeFrequency, priority: basePriority } = getRouteConfig(slug);

    return locales.map((locale, index) => ({
      url: `${baseUrl}${localePath(locale, slug)}`,
      lastModified,
      changeFrequency,
      // Slightly lower priority for non-default locales on the root page
      priority: slug === "" && index > 0 ? basePriority - 0.1 : basePriority,
      alternates: {
        languages,
      },
    }));
  });
}
