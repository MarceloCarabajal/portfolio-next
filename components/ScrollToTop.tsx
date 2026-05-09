"use client";

import { useEffect, useState } from "react";
import { useLocaleBundle } from "@/components/LanguageProvider";

export function ScrollToTop() {
  const { t } = useLocaleBundle();
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  function onLaunch() {
    if (launching) return;
    setLaunching(true);
    window.setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }, 180);
    window.setTimeout(() => setLaunching(false), 900);
  }

  return (
    <button
      type="button"
      className={`rocket-fab fixed bottom-6 right-6 z-60 flex h-[5.2rem] w-[5.2rem] cursor-pointer items-center justify-center transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:cursor-grabbing ${launching ? "rocket-fab--launch" : ""}`}
      onClick={onLaunch}
      aria-label={t.ui.scrollTopAria}
    >
      <img
        src="/icons/rocket-up.svg"
        alt=""
        width={40}
        height={40}
        className="rocket-icon pointer-events-none select-none"
        aria-hidden="true"
      />
      <span className="rocket-flame" aria-hidden />
    </button>
  );
}
