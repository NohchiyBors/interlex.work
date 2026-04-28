import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import "../globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFrame } from "@/components/site-frame";
import { baseUrl, buildMetadata, getDictionary, hasLocale, locales } from "@/lib/i18n";

const GA_MEASUREMENT_ID = "G-V16R7S8WGC";

// Google Consent Mode v2 default state. Analytics and ad signals start
// denied for everyone — the CookieConsent client component then pushes a
// `consent update` after the user accepts (EU) or auto-grants on mount
// (non-EU). This keeps _ga cookies from being written before consent
// regardless of the visitor's region.
const GA_CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
`;

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
    manifest: "/manifest.webmanifest",
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
        {/*
          Inline Consent Mode v2 default — must run BEFORE the GA tag so
          analytics_storage starts denied. We use a plain <script> rather
          than next/script so it executes synchronously during HTML
          parsing; next/script with strategy="beforeInteractive" is only
          fully supported in the root layout in App Router, and this
          project's only layout sits at [locale]/layout.tsx.
        */}
        <script dangerouslySetInnerHTML={{ __html: GA_CONSENT_DEFAULT_SCRIPT }} />
        <SiteFrame locale={locale} dict={dict}>
          {props.children}
        </SiteFrame>
        <CookieConsent locale={locale} />
        {/*
          GA waits for the load event. This improves the Lighthouse main-thread
          path, with the tradeoff that very short visits may not be recorded.
          The inline Consent Mode default still runs before any GA script.
        */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
