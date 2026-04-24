"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { ContactFormCopy, ContactMarket } from "@/lib/contact-form-copy";

type Props = Readonly<{
  locale: Locale;
  copy: ContactFormCopy;
}>;

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  market: ContactMarket;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  market: "compare",
  message: "",
  website: "",
};

export function ContactForm({ locale, copy }: Props) {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const selectedMarket = copy.marketOptions.find((option) => option.value === form.market);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          locale,
          pagePath: pathname,
          sourceSurface: "contact-page-form",
          referrer: typeof document === "undefined" ? "" : document.referrer,
          marketLabel: selectedMarket?.label ?? form.market,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{copy.label}</p>
      <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-[var(--primary)]">{copy.title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">{copy.body}</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden>
          <label htmlFor="website">{copy.companyLabel}</label>
          <input id="website" name="website" value={form.website} onChange={updateField} autoComplete="off" tabIndex={-1} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.nameLabel}</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder={copy.namePlaceholder}
              autoComplete="name"
              className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.emailLabel}</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder={copy.emailPlaceholder}
              autoComplete="email"
              className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.phoneLabel}</span>
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              placeholder={copy.phonePlaceholder}
              autoComplete="tel"
              className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.companyLabel}</span>
            <input
              name="company"
              value={form.company}
              onChange={updateField}
              placeholder={copy.companyPlaceholder}
              autoComplete="organization"
              className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.marketLabel}</span>
          <select
            name="market"
            value={form.market}
            onChange={updateField}
            className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
          >
            {copy.marketOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.messageLabel}</span>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder={copy.messagePlaceholder}
            rows={6}
            className="min-h-36 border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm leading-7 text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-72"
          >
            {isSubmitting ? copy.submitPending : copy.submitIdle}
          </button>

          {status === "success" ? <p className="text-sm leading-7 text-[var(--primary)]">{copy.successMessage}</p> : null}
          {status === "error" ? <p className="text-sm leading-7 text-[color:#8b2d1f]">{copy.errorMessage}</p> : null}
        </div>
      </form>
    </section>
  );
}
