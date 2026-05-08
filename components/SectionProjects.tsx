import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/content";

export function SectionProjects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <ScrollReveal>
          <h2
            id="projects-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Proyectos y experiencia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-cyan-200/90 [text-shadow:0_0_16px_rgba(45,226,255,0.3)]">
            Un vistazo a los contextos donde más aporté valor técnico.
          </p>
        </ScrollReveal>
        <ul className="mt-8 grid gap-6 text-left lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.name}>
              <ScrollReveal delayMs={70 + i * 80}>
                <article className="group neon-edge-hover flex h-full flex-col overflow-hidden rounded-2xl border border-fuchsia-500/15 bg-linear-to-b from-slate-950/95 to-slate-950/80 shadow-[0_0_36px_rgba(180,107,255,0.08)] transition hover:border-cyan-400/30">
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.26em] text-fuchsia-200 [text-shadow:0_0_14px_rgba(255,75,213,0.35)]">
                      {project.role}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-50">{project.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
                      {project.stack.slice(0, 12).map((t) => (
                        <li key={t}>
                          <span className="inline-flex rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-100 shadow-[0_0_10px_rgba(45,226,255,0.2)]">
                            {t}
                          </span>
                        </li>
                      ))}
                      {project.stack.length > 12 ? (
                        <li>
                          <span className="inline-flex rounded-md border border-fuchsia-500/25 bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-100 shadow-[0_0_10px_rgba(255,75,213,0.18)]">
                            +{project.stack.length - 12} más
                          </span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
