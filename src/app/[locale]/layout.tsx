import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteFrame } from "@/components/site-frame";
import { baseUrl, buildMetadata, getDictionary, hasLocale, locales } from "@/lib/i18n";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;

  if (!hasLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(baseUrl),
    applicationName: "InterLex",
    manifest: "/site.webmanifest",
    title: {
      default: dict.site.title,
      template: `%s | ${dict.site.brand}`,
    },
    description: dict.site.description,
    ...buildMetadata(locale, dict.site.title, dict.site.description),
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <html lang={dict.lang} dir={dict.dir} className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteFrame locale={locale} dict={dict}>
          {props.children}
        </SiteFrame>
      </body>
    </html>
  );
}
