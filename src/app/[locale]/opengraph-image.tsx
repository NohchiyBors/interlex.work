import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/lib/i18n";
import { createSocialImage, socialImageAlt, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = socialImageAlt;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  if (!hasLocale(locale)) {
    notFound();
  }

  return createSocialImage(locale);
}
