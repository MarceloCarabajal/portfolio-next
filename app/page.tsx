import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionContact } from "@/components/SectionContact";
import { SectionHero } from "@/components/SectionHero";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionSocial } from "@/components/SectionSocial";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <a
        href="#inicio"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 opacity-0 shadow-lg transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
      >
        Ir al contenido principal
      </a>
      <SiteHeader />
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionSocial />
        <SectionContact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-slate-500">
        <p>© 2026 Marcelo Carabajal</p>
      </footer>
      <ScrollToTop />
    </>
  );
}
