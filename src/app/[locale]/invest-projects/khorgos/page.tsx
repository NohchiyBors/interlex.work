import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { InvestModal } from "@/components/invest-modal";

export async function generateMetadata(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const kp = dict.khorgosProject;
  return buildMetadata(locale, kp.title, kp.body.substring(0, 160), "invest-projects");
}

const khorgosAudienceShares = ["35%", "25%", "25%", "15%"];

const khorgosScenarioData = [
  { size: "5 000 m²", capex: "$2 800 000", irr: "10%", npv: "$480 000", ebitda: "26%", recommended: false },
  { size: "15 000 m²", capex: "$9 450 000", irr: "21%", npv: "$5 800 000", ebitda: "54–56%", recommended: true },
  { size: "15 000 m²", capex: "$9 450 000", irr: "18%", npv: "$5 000 000", ebitda: "54%", recommended: false },
  { size: "18 000 m²", capex: "$12–15 млн", irr: "21–23%", npv: "$6 800 000–$8 400 000", ebitda: "34–40%", recommended: false },
];

export default async function KhorgosProjectPage(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const ip = dict.investProjects;
  const kp = dict.khorgosProject;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: ip.title, url: `https://interlex.work${localePath(locale, "invest-projects")}` },
          { name: kp.title, url: `https://interlex.work${localePath(locale, "invest-projects")}/khorgos` },
        ])}
      />

      {/* Project header */}
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{kp.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {kp.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{kp.body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 lg:items-end">
            <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{kp.badgeLabel}</p>
              <p className="mt-1 font-display text-4xl leading-none text-[var(--primary)]">IRR 21%</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{kp.badgeValue}</p>
            </div>
            <InvestModal
              projectName={kp.projectName}
              triggerLabel={kp.requestCta}
              locale={locale}
              triggerClass="btn-primary inline-flex w-full items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Scenarios table */}
      <section className="mt-6 overflow-x-auto border border-[color:rgba(0,9,36,0.08)] bg-white">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            <p>{kp.scenarioCol}</p>
            <p>CAPEX</p>
            <p>{kp.paybackCol}</p>
            <p>IRR</p>
            <p>EBITDA</p>
          </div>
          {([
            { name: kp.scenario1Name, payback: kp.scenario1Payback },
            { name: kp.scenario2Name, payback: kp.scenario2Payback },
            { name: kp.scenario3Name, payback: kp.scenario3Payback },
            { name: kp.scenario4Name, payback: kp.scenario4Payback },
          ] as { name: string; payback: string }[]).map((s, i) => {
            const data = khorgosScenarioData[i];
            return (
              <div
                key={s.name}
                className={`grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] px-6 py-5 text-sm ${data.recommended ? "bg-[color:rgba(117,91,0,0.04)]" : ""}`}
              >
                <div>
                  <p className="font-semibold text-[var(--primary)]">{s.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{data.size}</p>
                  {data.recommended && (
                    <span className="mt-1.5 inline-block border border-[color:rgba(117,91,0,0.3)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {kp.recommendedBadge}
                    </span>
                  )}
                </div>
                <p className="self-center font-medium text-[var(--ink)]">{data.capex}</p>
                <p className="self-center text-[var(--ink)]">{s.payback}</p>
                <p className={`self-center font-semibold ${data.recommended ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{data.irr}</p>
                <p className="self-center text-[var(--ink)]">{data.ebitda}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages + Audience */}
      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{kp.sezEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--primary)]">{kp.sezTitle}</h2>
          <ul className="mt-5 space-y-3">
            {[kp.sezAdv1, kp.sezAdv2, kp.sezAdv3, kp.sezAdv4].map((adv) => (
              <li key={adv} className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{kp.servicesEyebrow}</p>
            <ul className="mt-4 space-y-2">
              {[kp.service1, kp.service2, kp.service3, kp.service4, kp.service5].map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{kp.audienceEyebrow}</p>
            <ul className="mt-4 space-y-3">
              {([kp.audience1, kp.audience2, kp.audience3, kp.audience4] as string[]).map((label, i) => (
                <li key={label} className="flex items-center justify-between gap-4 text-sm text-[var(--ink)]">
                  <span>{label}</span>
                  <span className="shrink-0 font-semibold text-[var(--primary)]">{khorgosAudienceShares[i]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendation banner */}
      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{kp.recommendationEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">{kp.recommendationTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{kp.recommendationBody}</p>
          </div>
          <div className="flex shrink-0 items-center">
            <InvestModal
              projectName={kp.projectName}
              triggerLabel={kp.discussCta}
              locale={locale}
              triggerClass="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
