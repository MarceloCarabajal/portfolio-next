"use client";

import { useEffect, useRef, useState } from "react";
import { useLocaleBundle } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

function LocaleToggle() {
  const { locale, setLocale, t } = useLocaleBundle();

  function pill(next: Locale, label: string) {
    const active = locale === next;
    return (
      <button
        type="button"
        onClick={() => setLocale(next)}
        aria-pressed={active}
        className={`flex flex-1 items-center justify-center rounded-md py-1 text-[11px] font-bold tracking-wide transition sm:text-xs ${
          active
            ? "bg-cyan-500/25 text-cyan-100 shadow-[0_0_12px_rgba(45,226,255,0.25)]"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        {label}
      </button>
    );
  }

  /** Fixed width so active/inactive styles never resize the header cluster (desktop + mobile). */
  return (
    <div
      role="group"
      aria-label={t.ui.localeToggleAria}
      className="flex h-[34px] w-[4.75rem] shrink-0 rounded-lg border border-cyan-500/30 bg-slate-950/55 p-0.5 shadow-inner"
    >
      {pill("es", "ES")}
      {pill("en", "EN")}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocaleBundle();
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Close mobile drawer on page scroll — common pattern so the menu does not stay “stuck open”. */
  useEffect(() => {
    if (!open) return;
    const closeMenu = () => {
      setOpen(false);
      menuBtnRef.current?.blur();
    };
    window.addEventListener("scroll", closeMenu, { passive: true });
    return () => window.removeEventListener("scroll", closeMenu);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-cyan-400/25 bg-slate-950/90 shadow-[0_0_32px_rgba(45,226,255,0.12)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[5.25rem] max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:min-h-[5.75rem] sm:gap-4 sm:px-6 sm:py-3.5 lg:min-h-24 lg:px-8 lg:py-4">
        <div className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <a
            href="#home"
            className="font-display min-w-0 truncate text-base font-bold tracking-tight text-slate-50 [text-shadow:0_0_18px_rgba(45,226,255,0.35)] hover:text-cyan-100 sm:text-lg lg:text-xl"
            onClick={() => setOpen(false)}
          >
            {t.site.name}
          </a>
          <LocaleToggle />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-4">
          <nav
            className="hidden items-center gap-0.5 md:flex lg:gap-1 xl:gap-2"
            aria-label={t.ui.navAriaLabel}
          >
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-[0.9375rem] font-semibold text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-[0_0_16px_rgba(45,226,255,0.25)] lg:px-4 lg:text-base xl:px-5 xl:text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            ref={menuBtnRef}
            type="button"
            className="inline-flex min-h-12 min-w-[5.5rem] shrink-0 touch-manipulation items-center justify-center rounded-xl border border-cyan-500/35 bg-slate-950/40 px-4 py-3 text-base font-semibold text-cyan-100 shadow-[0_0_14px_rgba(45,226,255,0.15)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {t.ui.menu}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cyan-500/15 bg-slate-950/97 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1 pb-1">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-4 text-lg font-semibold text-slate-100 hover:bg-cyan-500/10 hover:text-cyan-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
