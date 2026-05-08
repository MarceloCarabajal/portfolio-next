"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-cyan-400/25 bg-slate-950/90 shadow-[0_0_32px_rgba(45,226,255,0.12)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[5.25rem] max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:min-h-[5.75rem] sm:px-6 sm:py-3.5 lg:min-h-24 lg:px-8 lg:py-4">
        <Link
          href="#inicio"
          className="font-display text-base font-bold tracking-tight text-slate-50 [text-shadow:0_0_18px_rgba(45,226,255,0.35)] hover:text-cyan-100 sm:text-lg lg:text-xl"
          onClick={() => setOpen(false)}
        >
          Marcelo Carabajal
        </Link>
        <nav
          className="hidden items-center gap-0.5 md:flex lg:gap-1 xl:gap-2"
          aria-label="Secciones principales"
        >
          {navItems.map((item) => (
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
          type="button"
          className="inline-flex min-h-12 min-w-[5.5rem] items-center justify-center rounded-xl border border-cyan-500/35 bg-slate-950/40 px-5 py-3 text-base font-semibold text-cyan-100 shadow-[0_0_14px_rgba(45,226,255,0.15)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menú
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cyan-500/15 bg-slate-950/97 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1 pb-1">
            {navItems.map((item) => (
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
