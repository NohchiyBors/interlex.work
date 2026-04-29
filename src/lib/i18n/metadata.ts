import type { Metadata } from "next";
import { baseUrl, defaultLocale, localePath, locales, type Locale } from "./core";

// BCP 47 hreflang mapping. URL segments stay short (/zh, /ar) but search engines
// receive precise language tags via the alternates.languages map.
export const hreflangMap: Record<Locale, string> = {
  en: "en",
  ru: "ru",
  zh: "zh-Hans",
  it: "it",
  fr: "fr",
  ka: "ka",
  de: "de",
  ar: "ar",
  tr: "tr",
  es: "es",
};

// Open Graph requires xx_YY locale codes. Keep one place to translate
// our short URL locale into the regional variant Facebook/LinkedIn expect.
export const openGraphLocaleMap: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  zh: "zh_CN",
  it: "it_IT",
  fr: "fr_FR",
  ka: "ka_GE",
  de: "de_DE",
  ar: "ar_AR",
  tr: "tr_TR",
  es: "es_ES",
};

export function buildMetadata(locale: Locale, title: string, description: string, slug = ""): Metadata {
  const pathname = localePath(locale, slug);
  const url = new URL(pathname, baseUrl);
  const languages = Object.fromEntries(
    locales.map((item) => [hreflangMap[item], localePath(item, slug)]),
  );
  languages["x-default"] = localePath(defaultLocale, slug);

  const alternateLocale = locales
    .filter((value) => value !== locale)
    .map((value) => openGraphLocaleMap[value]);

  const verification = (() => {
    const google = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
    const yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
    const bing = process.env.NEXT_PUBLIC_BING_VERIFICATION;
    if (!google && !yandex && !bing) return undefined;
    return {
      ...(google ? { google } : {}),
      ...(yandex ? { yandex } : {}),
      ...(bing ? { other: { "msvalidate.01": bing } } : {}),
    };
  })();

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages,
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: "InterLex",
      type: "website",
      locale: openGraphLocaleMap[locale],
      alternateLocale,
      images: [
        {
          url: `${baseUrl}${localePath(locale, "opengraph-image")}`,
          width: 1200,
          height: 630,
          alt: "InterLex global hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${localePath(locale, "twitter-image")}`],
    },
    ...(verification ? { verification } : {}),
  };
}
