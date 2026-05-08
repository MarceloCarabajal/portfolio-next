import { DecoImage } from "@/components/DecoImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { about } from "@/lib/content";

export function SectionAbout() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="flex min-h-screen scroll-mt-28 flex-col justify-center px-4 py-24 sm:scroll-mt-32 sm:px-6 lg:scroll-mt-36 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2
            id="about-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Información general
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-cyan-200/90 [text-shadow:0_0_16px_rgba(45,226,255,0.35)]">
            Backend, equipos y productos que evolucionan en el tiempo.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:items-start">
          <ScrollReveal delayMs={100}>
            <article className="neon-edge-hover rounded-2xl border border-cyan-500/20 bg-slate-950/45 p-6 shadow-[inset_0_0_28px_rgba(45,226,255,0.06)] backdrop-blur sm:p-8">
              <p className="text-base leading-relaxed text-slate-300">{about.summary}</p>
            </article>
          </ScrollReveal>

          <ScrollReveal className="lg:sticky lg:top-24" delayMs={80}>
            <div className="neon-edge relative aspect-5/6 max-h-[520px] overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-slate-950/70 shadow-[0_0_40px_rgba(255,75,213,0.12)]">
              <DecoImage src={about.visualSrc} alt={about.visualAlt} />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-cyan-500/10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
