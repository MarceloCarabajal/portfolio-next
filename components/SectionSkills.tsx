import { ScrollReveal } from "@/components/ScrollReveal";
import { skillGroups } from "@/lib/content";

const techLogoMap: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  Quarkus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  NestJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  "ASP.NET Framework":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "React Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Android Studio (Java)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  "SQL Server":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  OpenShift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  YAML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg",
  Swagger:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  JUnit:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
  Mockito:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
};

function logoForTech(item: string) {
  if (techLogoMap[item]) return techLogoMap[item];
  if (item === ".NET Framework" || item === "ADO.NET" || item === "WebForms" || item === "WinForms") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg";
  }
  return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg";
}

export function SectionSkills() {
  return (
    <section
      id="conocimientos"
      aria-labelledby="skills-heading"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <ScrollReveal>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Conocimientos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-fuchsia-200/85 [text-shadow:0_0_14px_rgba(255,75,213,0.28)]">
            Stack que uso en producción y en proyectos académicos.
          </p>
        </ScrollReveal>

        <ul className="mt-6 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <li key={group.title}>
              <ScrollReveal delayMs={80 + i * 50}>
                <div className="neon-edge-hover h-full rounded-2xl border border-violet-500/20 bg-slate-950/55 p-4 shadow-[inset_0_0_24px_rgba(180,107,255,0.07)] transition hover:border-cyan-400/35">
                  <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 [text-shadow:0_0_12px_rgba(45,226,255,0.45)]">
                    {group.title}
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-lg border border-cyan-500/25 bg-cyan-500/5 px-1.5 py-1.5 text-center text-[10px] font-medium text-slate-100 shadow-[0_0_10px_rgba(45,226,255,0.12)]">
                          <span className="leading-tight">{item}</span>
                          <img
                            src={logoForTech(item)}
                            alt={item}
                            width={28}
                            height={28}
                            loading="lazy"
                            className="h-7 w-7 object-contain"
                          />
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
