"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { BriefId, BriefPageCopy } from "@/lib/brief-copy";

type Props = Readonly<{
  locale: Locale;
  copy: BriefPageCopy;
}>;

type ContactState = {
  name: string;
  email: string;
  phone: string;
  website: string; // honeypot
};

const initialContact: ContactState = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

export function BriefForm({ locale, copy }: Props) {
  const [selectedId, setSelectedId] = useState<BriefId | null>(null);
  const [contact, setContact] = useState<ContactState>(initialContact);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setContact((current) => ({ ...current, [name]: value }));
  }

  function selectBrief(id: BriefId) {
    setSelectedId(id);
    setStatus("idle");
  }

  function goBack() {
    setSelectedId(null);
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedId) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          briefId: selectedId,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          website: contact.website,
          locale,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setContact(initialContact);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Step 1: Brief selection ───────────────────────────────────────────────
  if (!selectedId) {
    return (
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {copy.step1Label}
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {copy.briefs.map((brief) => (
            <button
              key={brief.id}
              type="button"
              onClick={() => selectBrief(brief.id)}
              className="group cursor-pointer border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5 text-left transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-[var(--surface-low)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {brief.subtitle}
              </p>
              <h3 className="mt-3 font-display text-xl leading-tight text-[var(--primary)] group-hover:text-[var(--accent)]">
                {brief.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{brief.description}</p>
            </button>
          ))}
        </div>
      </section>
    );
  }

  // ── Step 2: Contact form ──────────────────────────────────────────────────
  const selectedBrief = copy.briefs.find((b) => b.id === selectedId);

  if (status === "success") {
    return (
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {copy.step2Label}
        </p>
        <h2 className="mt-5 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--primary)]">
          {copy.successTitle}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{copy.successBody}</p>
        <button
          type="button"
          onClick={goBack}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] hover:underline"
        >
          {copy.backLabel}
        </button>
      </section>
    );
  }

  return (
    <section className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        {copy.step2Label}
      </p>

      {selectedBrief ? (
        <div className="mt-4 border border-[color:rgba(117,91,0,0.28)] bg-white px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {selectedBrief.subtitle}
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--primary)]">{selectedBrief.title}</p>
        </div>
      ) : null}

      <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
        {/* Honeypot */}
        <div className="hidden" aria-hidden>
          <input
            id="website"
            name="website"
            value={contact.website}
            onChange={updateField}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            {copy.nameLabel}
          </span>
          <input
            required
            name="name"
            value={contact.name}
            onChange={updateField}
            placeholder={copy.namePlaceholder}
            autoComplete="name"
            className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            {copy.emailLabel}
          </span>
          <input
            required
            type="email"
            name="email"
            value={contact.email}
            onChange={updateField}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            {copy.phoneLabel}
          </span>
          <input
            name="phone"
            value={contact.phone}
            onChange={updateField}
            placeholder={copy.phonePlaceholder}
            autoComplete="tel"
            className="border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={goBack}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--accent)]"
            >
              {copy.backLabel}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-72"
            >
              {isSubmitting ? copy.submitPending : copy.submitIdle}
            </button>
          </div>

          {status === "error" ? (
            <p className="text-sm leading-7 text-[color:#8b2d1f]">{copy.errorMessage}</p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
