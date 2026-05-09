"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useLocaleBundle } from "@/components/LanguageProvider";
import { contactEmail } from "@/lib/content";

export function SectionSocial() {
  const { t } = useLocaleBundle();

  return (
    <section
      id="social"
      aria-labelledby="social-heading"
      className="flex min-h-[100svh] scroll-mt-28 flex-col justify-center px-4 py-8 sm:min-h-screen sm:scroll-mt-32 sm:px-6 sm:py-10 lg:scroll-mt-36 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <ScrollReveal>
          <h2
            id="social-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            {t.ui.socialSectionTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-400">
            {t.ui.socialSectionLead}
          </p>
        </ScrollReveal>
        <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {t.socialLinks.map((link, i) => (
            <li key={`${link.href}-${link.label}`}>
              <ScrollReveal delayMs={70 + i * 70}>
                <a
                  href={
                    link.label === "Email" ? `mailto:${contactEmail}` : link.href
                  }
                  className="group flex h-full flex-col rounded-2xl border border-cyan-500/20 bg-slate-950/55 p-6 shadow-[inset_0_0_26px_rgba(45,226,255,0.05)] transition hover:scale-[1.01] hover:border-fuchsia-400/35 hover:shadow-[0_0_32px_rgba(255,75,213,0.18)]"
                  {...(link.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <span className="inline-flex items-center gap-3">
                    <img
                      src={link.iconSrc}
                      alt=""
                      width={22}
                      height={22}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-display text-lg font-semibold text-slate-100 group-hover:text-cyan-300">
                      {link.label}
                    </span>
                  </span>
                  <span className="mt-2 text-sm text-slate-400">{link.hint}</span>
                  <span className="mt-4 text-xs font-medium text-violet-300">{t.ui.openLink}</span>
                </a>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
