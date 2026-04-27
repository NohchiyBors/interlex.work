"use client";

import { useCallback, useEffect, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { ContactFormCopy, ContactMarket } from "@/lib/contact-form-copy";
import { collectClientContext } from "@/lib/client-context";
import { TurnstileWidget } from "@/components/turnstile-widget";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY ?? "";

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

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const inputBase =
  "border bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]";
const inputNormal = `${inputBase} border-[color:rgba(0,9,36,0.12)]`;
const inputError = `${inputBase} border-[color:#8b2d1f]`;

export function ContactForm({ locale, copy }: Props) {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>(initialState);
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
    if (name === "message") return value.trim().length < 10 ? copy.messageError : undefined;
    return undefined;
  }

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    // Сбрасываем ошибку поля при изменении
    if (name in fieldErrors) {
      setFieldErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const error = validateField(name, value);
    if (error) {
      setFieldErrors((current) => ({ ...current, [name]: error }));
    }
  }

  function validateAll(): FieldErrors {
    return {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      const selectedMarket = copy.marketOptions.find((option) => option.value === form.market);
      const clientContext = collectClientContext(pageLoadedAtRef.current ?? undefined);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          pagePath: pathname,
          sourceSurface: "contact-page-form",
          referrer: typeof document === "undefined" ? "" : document.referrer,
          marketLabel: selectedMarket?.label ?? form.market,
          clientContext,
          cfTurnstileToken: turnstileToken,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setForm(initialState);
      setFieldErrors({});
      setTurnstileToken(null);
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

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <div className="hidden" aria-hidden>
          <label htmlFor="website">{copy.companyLabel}</label>
          <input id="website" name="website" value={form.website} onChange={updateField} autoComplete="off" tabIndex={-1} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-1">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.nameLabel}</span>
              <input
                name="name"
                value={form.name}
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
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.emailLabel}</span>
              <input
                type="email"
                name="email"
                value={form.email}
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
              className={inputNormal}
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
              className={inputNormal}
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

        <div className="grid gap-1">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{copy.messageLabel}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              onBlur={handleBlur}
              placeholder={copy.messagePlaceholder}
              rows={6}
              aria-invalid={!!fieldErrors.message}
              className={`min-h-36 ${fieldErrors.message ? inputError : inputNormal} leading-7`}
            />
          </label>
          {fieldErrors.message ? <p className="text-xs text-[color:#8b2d1f]">{fieldErrors.message}</p> : null}
        </div>

        {TURNSTILE_SITE_KEY ? (
          <TurnstileWidget
            siteKey={TURNSTILE_SITE_KEY}
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
          />
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting || (TURNSTILE_SITE_KEY !== "" && !turnstileToken)}
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
