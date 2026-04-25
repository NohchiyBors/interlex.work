import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { BriefForm } from "@/components/brief-form";
import { getBriefPageCopy } from "@/lib/brief-copy";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/briefs">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const isRu = locale === "ru";
  const title = isRu ? "Клиентские брифы — InterLex" : "Client Intake Briefs — InterLex";
  const description = isRu
    ? "Выберите бриф для вашего проекта — регистрация бизнеса в Казахстане или Грузии, СЭЗ, Virtual Zone, бизнес-сопровождение. Получите документ на email."
    : "Select an intake brief for your project — business registration in Kazakhstan or Georgia, SEZ, Virtual Zone, business support. Receive the document by email.";

  return buildMetadata(locale, title, description, "briefs");
}

export default async function BriefsPage(props: PageProps<"/[locale]/briefs">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const copy = getBriefPageCopy(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: copy.eyebrow, url: `https://interlex.work${localePath(locale, "briefs")}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
            {copy.pageTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{copy.pageBody}</p>
        </div>

        <BriefForm locale={locale} copy={copy} />
      </section>
    </main>
  );
}
