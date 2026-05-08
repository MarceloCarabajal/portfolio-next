"use client";

import { useCallback, useRef, useState } from "react";
import { HeroPortrait } from "@/components/HeroPortrait";
import { hero } from "@/lib/content";

export function SectionHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [gridShift, setGridShift] = useState({ x: 0, y: 0 });
  const [blobShift, setBlobShift] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onSectionMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setGridShift({ x: px * -22, y: py * -22 });
    setBlobShift({ x: px * 32, y: py * 26 });
  }, []);

  const onSectionLeave = useCallback(() => {
    setGridShift({ x: 0, y: 0 });
    setBlobShift({ x: 0, y: 0 });
  }, []);

  const onPortraitMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: ny * -14, ry: nx * 14 });
  }, []);

  const onPortraitLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-labelledby="hero-heading"
      onMouseMove={onSectionMove}
      onMouseLeave={onSectionLeave}
      className="relative flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:scroll-mt-32 sm:px-6 sm:pt-32 lg:scroll-mt-36 lg:px-8 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
        style={{
          transform: `translate3d(${gridShift.x}px, ${gridShift.y}px, 0)`,
          transition: "transform 0.35s ease-out",
        }}
      >
        <div className="hero-grid absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl blob-move"
          style={{
            transform: `translate3d(${blobShift.x}px, ${blobShift.y}px, 0)`,
            transition: "transform 0.45s ease-out",
          }}
        />
        <div
          className="absolute -right-28 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl blob-move-reverse"
          style={{
            transform: `translate3d(${-blobShift.x * 0.55}px, ${-blobShift.y * 0.55}px, 0)`,
            transition: "transform 0.45s ease-out",
          }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 scanlines opacity-[0.09]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="order-1 mx-auto max-w-md text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.42em] text-cyan-200 [text-shadow:0_0_20px_rgba(45,226,255,0.65)]">
            Portfolio personal
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl title-neon"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 text-base font-semibold text-fuchsia-200 [text-shadow:0_0_18px_rgba(255,75,213,0.35)] sm:text-lg">
            {hero.subline}
          </p>
          <div className="hidden lg:block">
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
              {hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="btn-neon-primary inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition hover:scale-[1.02]"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="btn-neon-ghost inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-slate-100 transition hover:scale-[1.02] hover:text-cyan-100"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 flex justify-center lg:justify-end">
          <div
            ref={frameRef}
            onMouseMove={onPortraitMove}
            onMouseLeave={onPortraitLeave}
            className="relative aspect-square w-[250px] perspective-distant sm:w-[320px] lg:w-[360px]"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400/35 via-transparent to-fuchsia-500/35 blur-2xl lg:rounded-3xl" />
            <div
              className="neon-edge relative h-full w-full overflow-hidden rounded-full border border-cyan-400/35 bg-slate-950/40 shadow-[0_0_60px_rgba(180,107,255,0.15)] transition-transform duration-150 ease-out will-change-transform lg:rounded-3xl"
              style={{
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
            >
              <HeroPortrait
                primarySrc={hero.imageSrc}
                fallbackSrc={hero.imageFallback}
                alt={hero.imageAlt}
              />
            </div>
          </div>
        </div>

        <div className="order-3 mx-auto max-w-md text-center lg:hidden">
          <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">
            {hero.lead}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#proyectos"
              className="btn-neon-primary inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition hover:scale-[1.02]"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="btn-neon-ghost inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-slate-100 transition hover:scale-[1.02] hover:text-cyan-100"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
