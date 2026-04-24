import type { MetadataRoute } from "next";
import { baseUrl, defaultLocale, localePath, locales } from "@/lib/i18n";
import { getHubSeoPageSlugs } from "@/lib/hub-seo-pages";

const routeSlugs = [
  "",
  "about",
  "cross-border",
  "contact",
  "kazakhstan-vs-georgia",
  "cross-border-structuring",
  "international-market-entry",
  ...getHubSeoPageSlugs(),
] as const;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routeSlugs.flatMap((slug) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${baseUrl}${localePath(locale, slug)}`]),
    );
    languages["x-default"] = `${baseUrl}${localePath(defaultLocale, slug)}`;

    return locales.map((locale, index) => ({
      url: `${baseUrl}${localePath(locale, slug)}`,
      lastModified: now,
      changeFrequency: slug === "" ? "weekly" : "monthly",
      priority: slug === "" ? (index === 0 ? 1 : 0.9) : 0.7,
      alternates: {
        languages,
      },
    }));
  });
}
