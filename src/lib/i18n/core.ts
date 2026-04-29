export const locales = ["en", "ru", "zh", "it", "fr", "ka", "de", "ar", "tr", "es"] as const;
export const defaultLocale = "en";
export const baseUrl = "https://interlex.work";

export type Locale = (typeof locales)[number];

export const sharedDomains = [
  { domain: "interlex.kz", href: "https://interlex.kz", servicesHref: "https://interlex.kz/services" },
  { domain: "interlex.ge", href: "https://interlex.ge", servicesHref: "https://interlex.ge/services" },
] as const;

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, slug = "") {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}
