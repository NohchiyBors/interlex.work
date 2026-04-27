"use client";

import { useCallback, useEffect, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { BriefId, BriefPageCopy } from "@/lib/brief-copy";
import { collectClientContext } from "@/lib/client-context";
import { TurnstileWidget } from "@/components/turnstile-widget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY ?? "";

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

type FieldErrors = {
  name?: string;
  email?: string;
};

const initialContact: ContactState = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const inputBase =
  "border bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]";
const inputNormal = `${inputBase} border-[color:rgba(0,9,36,0.12)]`;
const inputError = `${inputBase} border-[color:#8b2d1f]`;

export function BriefForm({ locale, copy }: Props) {
  const [selectedId, setSelectedId] = useState<BriefId | null>(null);
  const [contact, setContact] = useState<ContactState>(initialContact);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const pageLoadedAtRef = useRef<number | null>(null);

  useEffect(() => {
    pageLoadedAtRef.current = Date.now();
  }, []);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  function validateField(name: string, value: string): string | undefined {
    if (name === "name") return value.trim().length < 2 ? copy.nameError : undefined;
    if (name === "email") return !isValidEmail(value.trim()) ? copy.emailError : undefined;
    return undefined;
  }

  function updateField(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setContact((current) => ({ ...current, [name]: value }));
    if (name in fieldErrors) {
      setFieldErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const error = validateField(name, value);
    if (error) {
      setFieldErrors((current) => ({ ...current, [name]: error }));
    }
  }

  function validateAll(): FieldErrors {
    return {
      name: validateField("name", contact.name),
      email: validateField("email", contact.email),
    };
  }

  function selectBrief(id: BriefId) {
    setSelectedId(id);
    setStatus("idle");
  }

  function goBack() {
    setSelectedId(null);
    setStatus("idle");
    setFieldErrors({});
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedId) return;

    const errors = validateAll();
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      setFieldErrors(errors);
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const clientContext = collectClientContext(pageLoadedAtRef.current ?? undefined);
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
          clientContext,
          cfTurnstileToken: turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setContact(initialContact);
      setFieldErrors({});
      setTurnstileToken(null);
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

      <form className="mt-5 grid gap-4" onSubmit={handleSubmit} noValidate>
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

        <div className="grid gap-1">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {copy.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={updateField}
              onBlur={handleBlur}
              placeholder={copy.namePlaceholder}
              autoComplete="name"
              aria-invalid={!!fieldErrors.name}
              className={fieldErrors.name ? inputError : inputNormal}
            />
          </label>
          {fieldErrors.name ? <p className="text-xs text-[color:#8b2d1f]">{fieldErrors.name}</p> : null}
        </div>

        <div className="grid gap-1">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {copy.emailLabel}
            </span>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={updateField}
              onBlur={handleBlur}
              placeholder={copy.emailPlaceholder}
              autoComplete="email"
              aria-invalid={!!fieldErrors.email}
              className={fieldErrors.email ? inputError : inputNormal}
            />
          </label>
          {fieldErrors.email ? <p className="text-xs text-[color:#8b2d1f]">{fieldErrors.email}</p> : null}
        </div>

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
            className={inputNormal}
          />
        </label>

        {TURNSTILE_SITE_KEY ? (
          <TurnstileWidget
            siteKey={TURNSTILE_SITE_KEY}
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
          />
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--accent)]"
            >
              {copy.backLabel}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || (TURNSTILE_SITE_KEY !== "" && !turnstileToken)}
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
