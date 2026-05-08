import { DecoImage } from "@/components/DecoImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { skillGroups, skillsVisual } from "@/lib/content";

export function SectionSkills() {
  return (
    <section
      id="conocimientos"
      aria-labelledby="skills-heading"
      className="flex min-h-screen scroll-mt-28 flex-col justify-center px-4 py-24 sm:scroll-mt-32 sm:px-6 lg:scroll-mt-36 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Conocimientos
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-fuchsia-200/85 [text-shadow:0_0_14px_rgba(255,75,213,0.28)]">
            Stack que uso en producción y en proyectos académicos.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-8" delayMs={60}>
          <div className="neon-edge relative h-40 overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-950/60 sm:h-48">
            <DecoImage
              src={skillsVisual.bannerSrc}
              alt={skillsVisual.bannerAlt}
              fit="cover"
              className="opacity-95"
            />
          </div>
        </ScrollReveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <li key={group.title}>
              <ScrollReveal delayMs={80 + i * 50}>
                <div className="neon-edge-hover h-full rounded-2xl border border-violet-500/20 bg-slate-950/55 p-6 shadow-[inset_0_0_24px_rgba(180,107,255,0.07)] transition hover:border-cyan-400/35">
                  <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 [text-shadow:0_0_12px_rgba(45,226,255,0.45)]">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-lg border border-cyan-500/25 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-slate-100 shadow-[0_0_12px_rgba(45,226,255,0.12)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
