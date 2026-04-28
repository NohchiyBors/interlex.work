"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

type Props = {
  projectName: string;
  triggerLabel: string;
  triggerClass?: string;
  locale: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string; // honeypot
};

type FieldErrors = {
  name?: string;
  email?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY ?? "";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const inputBase =
  "w-full border bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[color:rgba(25,28,30,0.38)] focus:border-[var(--accent)]";
const inputNormal = `${inputBase} border-[color:rgba(0,9,36,0.12)]`;
const inputError = `${inputBase} border-[color:#8b2d1f]`;

export function InvestModal({ projectName, triggerLabel, triggerClass, locale }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset form when opening
  function openModal() {
    setForm(initialState);
    setFieldErrors({});
    setStatus("idle");
    setOpen(true);
  }

  function updateField(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): FieldErrors {
    return {
      name: form.name.trim().length < 2 ? "Введите имя (минимум 2 символа)" : undefined,
      email: !isValidEmail(form.email.trim()) ? "Введите корректный email" : undefined,
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot
    if (form.website) return;

    const errors = validate();
    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    const messageBody = form.message.trim()
      ? form.message.trim()
      : `Запрос по проекту: ${projectName}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: "",
          market: "kz",
          marketLabel: `Инвест-проект: ${projectName}`,
          message: messageBody,
          website: form.website,
          locale,
          pagePath: `/invest-projects`,
          sourceSurface: `invest-modal — ${projectName}`,
          referrer: typeof document !== "undefined" ? document.referrer : "",
          cfTurnstileToken: TURNSTILE_SITE_KEY ? null : "bypass",
        }),
      });

      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={openModal}
        className={triggerClass}
      >
        {triggerLabel}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--primary)]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            ref={dialogRef}
            className="relative z-10 w-full max-w-lg border border-[color:rgba(0,9,36,0.08)] bg-white shadow-xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Запрос по проекту</p>
                <h2 className="mt-1 font-display text-2xl leading-tight text-[var(--primary)]">{projectName}</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
                className="ml-4 mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form or success */}
            {status === "success" ? (
              <div className="px-6 py-10 text-center">
                <p className="font-display text-3xl text-[var(--primary)]">Спасибо!</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Ваш запрос по проекту <strong>{projectName}</strong> получен. Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-6 inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-4 px-6 py-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden>
                  <input name="website" value={form.website} onChange={updateField} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1">
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Имя *</span>
                      <input
                        name="name"
                        value={form.name}
                        onChange={updateField}
                        placeholder="Иван Иванов"
                        autoComplete="name"
                        className={fieldErrors.name ? inputError : inputNormal}
                      />
                    </label>
                    {fieldErrors.name && <p className="text-xs text-[color:#8b2d1f]">{fieldErrors.name}</p>}
                  </div>

                  <div className="grid gap-1">
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Email *</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={fieldErrors.email ? inputError : inputNormal}
                      />
                    </label>
                    {fieldErrors.email && <p className="text-xs text-[color:#8b2d1f]">{fieldErrors.email}</p>}
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Телефон</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+7 000 000 00 00"
                    autoComplete="tel"
                    className={inputNormal}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Комментарий</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder={`Укажите, что именно интересует по проекту «${projectName}»`}
                    rows={4}
                    className={`${inputNormal} leading-7`}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Отправка…" : "Отправить запрос"}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-[color:#8b2d1f]">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
