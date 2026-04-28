"use client";

import { useState } from "react";
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

  return (
    <div className="order-4 basis-full border-t border-[color:rgba(0,9,36,0.06)] pt-3 md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]"
        aria-expanded={open}
      >
        <span>{menuLabel}</span>
        <span aria-hidden>{open ? "×" : "+"}</span>
      </button>

      {open && (
        <div className="mt-2 grid gap-2">
          {nav.map((item) => (
            <Link
              key={item.slug}
              href={localePath(locale, item.slug)}
              onClick={() => setOpen(false)}
              className="border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:rgba(25,28,30,0.72)] transition-colors hover:border-[var(--accent)] hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2.5">
            <LanguageSwitcher locale={locale} mobileInMenu />
          </div>
        </div>
      )}
    </div>
  );
}
