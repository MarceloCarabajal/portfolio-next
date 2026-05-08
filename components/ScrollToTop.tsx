"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="hex-launch fixed bottom-6 right-6 z-[60] flex h-[4.25rem] w-[4.25rem] items-center justify-center text-lg font-bold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:scale-105 hover:text-cyan-50 hover:shadow-[0_0_40px_rgba(167,139,250,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      onClick={() =>
        document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
      }
      aria-label="Volver al inicio de la página"
    >
      <span className="font-display leading-none tracking-tight" aria-hidden>
        ↑
      </span>
    </button>
  );
}
