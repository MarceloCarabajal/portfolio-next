"use client";

import { useLocaleBundle } from "@/components/LanguageProvider";

export function SkipLink() {
  const { t } = useLocaleBundle();
  return (
    <a
      href="#home"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 opacity-0 shadow-lg transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
    >
      {t.ui.skipToContent}
    </a>
  );
}
