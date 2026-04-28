import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { InvestModal } from "@/components/invest-modal";

export async function generateMetadata(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const op = dict.orangerieProject;
  return buildMetadata(locale, op.title, op.body.substring(0, 160), "invest-projects");
}

const orangerieScenarioData = [
  { gross: "$55,000", noi: "$39,000", yieldPct: "10.3%", payback: "7–8 yrs", recommended: false },
  { gross: "$75,000", noi: "$57,000", yieldPct: "15%", payback: "5–6 yrs", recommended: true },
];

export default async function OrangerieHillsPage(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const ip = dict.investProjects;
  const op = dict.orangerieProject;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: ip.title, url: `https://interlex.work${localePath(locale, "invest-projects")}` },
          { name: op.title, url: `https://interlex.work${localePath(locale, "invest-projects")}/orangerie-hills` },
        ])}
      />

      {/* Project header */}
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{op.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {op.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{op.body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 lg:items-end">
            <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{op.badgeLabel}</p>
              <p className="mt-1 font-display text-4xl leading-none text-[var(--primary)]">14–18%</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{op.badgeValue}</p>
            </div>
            <InvestModal
              projectName={op.projectName}
              triggerLabel={op.requestCta}
              locale={locale}
              triggerClass="btn-primary inline-flex w-full items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Scenarios table */}
      <section className="mt-6 overflow-x-auto border border-[color:rgba(0,9,36,0.08)] bg-white">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            <p>{op.scenarioCol}</p>
            <p>{op.grossCol}</p>
            <p>{op.noiCol}</p>
            <p>{op.yieldCol}</p>
            <p>{op.paybackCol}</p>
          </div>
          {([
            { name: op.scenario1Name },
            { name: op.scenario2Name },
          ] as { name: string }[]).map((s, i) => {
            const data = orangerieScenarioData[i];
            return (
              <div
                key={s.name}
                className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] px-6 py-5 text-sm ${data.recommended ? "bg-[color:rgba(117,91,0,0.04)]" : ""}`}
              >
                <div>
                  <p className="font-semibold text-[var(--primary)]">{s.name}</p>
                  {data.recommended && (
                    <span className="mt-1.5 inline-block border border-[color:rgba(117,91,0,0.3)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {op.recommendedBadge}
                    </span>
                  )}
                </div>
                <p className="self-center text-[var(--ink)]">{data.gross}</p>
                <p className="self-center font-medium text-[var(--ink)]">{data.noi}</p>
                <p className={`self-center font-semibold ${data.recommended ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{data.yieldPct}</p>
                <p className="self-center text-[var(--ink)]">{data.payback}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages + Parameters */}
      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{op.advantagesEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--primary)]">{op.advantagesTitle}</h2>
          <ul className="mt-5 space-y-3">
            {[op.advantage1, op.advantage2, op.advantage3, op.advantage4].map((adv) => (
              <li key={adv} className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{op.paramsEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--primary)]">{op.paramsTitle}</h2>
            <ul className="mt-5 space-y-4">
              {([
                [op.param1Label, op.param1Value],
                [op.param2Label, op.param2Value],
                [op.param3Label, op.param3Value],
                [op.param4Label, op.param4Value],
              ] as [string, string][]).map(([label, value]) => (
                <li key={label} className="grid gap-0.5 text-sm">
                  <span className="font-semibold text-[var(--primary)]">{label}</span>
                  <span className="leading-6 text-[var(--muted)]">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment schedule */}
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{op.paymentEyebrow}</p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-[var(--primary)]">{op.paymentTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{op.paymentBody}</p>
          </div>
        </div>
      </section>

      {/* Recommendation banner */}
      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{op.recommendationEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">{op.recommendationTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{op.recommendationBody}</p>
          </div>
          <div className="flex shrink-0 items-center">
            <InvestModal
              projectName={op.projectName}
              triggerLabel={op.discussCta}
              locale={locale}
              triggerClass="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
