import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { ContactForm } from "@/components/contact-form";
import { getContactFormCopy } from "@/lib/contact-form-copy";
import { getBreadcrumbJsonLd, getSeoContent } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  return {
    ...buildMetadata(locale, dict.contactPage.title, seo.contact.description, "contact"),
    keywords: seo.contact.keywords,
  };
}

export default async function ContactPage(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const formCopy = getContactFormCopy(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: dict.contactPage.title, url: `https://interlex.work${localePath(locale, "contact")}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{dict.contactPage.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
            {dict.contactPage.introTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{dict.contactPage.introBody}</p>

          {/* Иконки с номерами снизу */}
          <div className="mt-auto pt-8 grid grid-cols-2 gap-3">
            {/* WhatsApp KZ */}
            <a
              href="https://wa.me/77000070021"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded border border-[color:rgba(0,9,36,0.08)] px-4 py-3 transition-colors hover:border-[#25D366] hover:bg-[#f0fdf4]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.035-1.468A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.36-.214-3.733.978.995-3.63-.235-.374A9.862 9.862 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">KZ</span>
                <span className="text-sm font-medium text-[var(--primary)]">+7 700 007 00 21</span>
              </span>
            </a>

            {/* WhatsApp GE */}
            <a
              href="https://wa.me/995591458182"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded border border-[color:rgba(0,9,36,0.08)] px-4 py-3 transition-colors hover:border-[#25D366] hover:bg-[#f0fdf4]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.035-1.468A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.36-.214-3.733.978.995-3.63-.235-.374A9.862 9.862 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">GE</span>
                <span className="text-sm font-medium text-[var(--primary)]">+995 591 458 182</span>
              </span>
            </a>

            {/* Telegram KZ */}
            <a
              href="https://t.me/+77000070021"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded border border-[color:rgba(0,9,36,0.08)] px-4 py-3 transition-colors hover:border-[#2AABEE] hover:bg-[#f0f9ff]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2AABEE]">
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">KZ</span>
                <span className="text-sm font-medium text-[var(--primary)]">+7 700 007 00 21</span>
              </span>
            </a>

            {/* Telegram GE */}
            <a
              href="https://t.me/+995591458182"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded border border-[color:rgba(0,9,36,0.08)] px-4 py-3 transition-colors hover:border-[#2AABEE] hover:bg-[#f0f9ff]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2AABEE]">
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">GE</span>
                <span className="text-sm font-medium text-[var(--primary)]">+995 591 458 182</span>
              </span>
            </a>
          </div>
        </div>

        <ContactForm locale={locale} copy={formCopy} />
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.contactPage.flowLabel}</p>
        <ol className="mt-5 grid gap-4 lg:grid-cols-3">
          {dict.contactPage.steps.map((step, index) => (
            <li key={step} className="flex gap-4 border border-[color:rgba(0,9,36,0.08)] bg-white px-4 py-4">
              <span className="font-display text-3xl leading-none text-[var(--accent)]">0{index + 1}</span>
              <span className="pt-1 text-sm leading-7 text-[var(--ink)]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {dict.contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-[var(--surface-low)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{channel.label}</p>
            <h2 className="mt-3 font-display text-3xl leading-none text-[var(--primary)]">{channel.value}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{channel.note}</p>
          </a>
        ))}
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{dict.contactPage.closingLabel}</p>
            <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-white">{dict.contactPage.closingTitle}</h2>
          </div>
          <p className="text-sm leading-7 text-[rgba(255,255,255,0.72)]">{dict.contactPage.closingBody}</p>
        </div>
      </section>
    </main>
  );
}
