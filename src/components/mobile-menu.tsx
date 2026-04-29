"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

type NavItem = { slug: string; label: string };

type Props = {
  locale: Locale;
  nav: NavItem[];
  menuLabel: string;
};

export function MobileMenu({ locale, nav, menuLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div className="fixed inset-x-0 bottom-0 top-[4.9rem] z-50 flex flex-col overflow-y-auto bg-[rgba(247,249,252,0.97)] md:hidden">
      <nav className="flex flex-col">
        {nav.map((item) => (
          <Link
            key={item.slug}
            href={localePath(locale, item.slug)}
            onClick={() => setOpen(false)}
            className="flex items-center border-b border-[color:rgba(0,9,36,0.06)] px-6 py-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] transition-colors active:bg-[var(--surface-low)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-[color:rgba(0,9,36,0.06)] px-6 py-5">
        <LanguageSwitcher locale={locale} mobileInMenu />
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={menuLabel}
        aria-expanded={open}
        className="flex h-9 w-9 shrink-0 items-center justify-center border border-[color:rgba(0,9,36,0.08)] bg-white text-[var(--primary)] transition-colors hover:border-[var(--accent)] md:hidden"
      >
        {open ? (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M1.5 1.5L13.5 13.5M13.5 1.5L1.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M1.5 3.5H13.5M1.5 7.5H13.5M1.5 11.5H13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}
