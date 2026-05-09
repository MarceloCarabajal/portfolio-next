import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionContact } from "@/components/SectionContact";
import { SectionHero } from "@/components/SectionHero";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionSocial } from "@/components/SectionSocial";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
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
