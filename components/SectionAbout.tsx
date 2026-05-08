import { ScrollReveal } from "@/components/ScrollReveal";
import { about } from "@/lib/content";

export function SectionAbout() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="flex min-h-[100svh] scroll-mt-28 flex-col justify-center px-4 py-8 sm:min-h-screen sm:scroll-mt-32 sm:px-6 sm:py-10 lg:scroll-mt-36 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <ScrollReveal>
          <h2
            id="about-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Información general
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium leading-snug text-cyan-200/90 [text-shadow:0_0_16px_rgba(45,226,255,0.35)] sm:text-xl">
            {about.tagline}
          </p>
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal delayMs={100}>
            <article className="neon-edge-hover mx-auto max-w-3xl rounded-2xl border border-cyan-500/20 bg-slate-950/45 p-6 shadow-[inset_0_0_28px_rgba(45,226,255,0.06)] backdrop-blur sm:p-8">
              <div className="space-y-6 text-left">
                {about.blocks.map((block) => (
                  <div key={block.title}>
                    <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 [text-shadow:0_0_12px_rgba(45,226,255,0.45)]">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-300">{block.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={about.cvUrlEs}
                  download
                  className="btn-neon-primary inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
                >
                  CV Español
                </a>
                <a
                  href={about.cvUrlEn}
                  download
                  className="btn-neon-primary inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
                >
                  CV English
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
