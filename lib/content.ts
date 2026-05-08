export const site = {
  name: "Marcelo Carabajal",
  title: "Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con orientación a backend y experiencia en entornos empresariales. APIs, integraciones, migraciones y soluciones web escalables con Java, Node.js, .NET y React.",
  locale: "es_AR",
} as const;

export const hero = {
  headline: "Marcelo Carabajal",
  subline: "Desarrollador Full Stack · Backend & APIs",
  lead:
    "Construyo servicios robustos y productos web con Java (Quarkus, Spring Boot), Node/TypeScript, NestJS, Next.js y C#/.NET.",
  /** Colocá tu foto en public/profile.jpg (recomendado 800×800+). Si no existe, se usa el SVG. */
  imageSrc: "/profile.jpg",
  imageFallback: "/profile.svg",
  imageAlt: "Retrato de Marcelo Carabajal",
} as const;

export const about = {
  visualSrc: "/art-about.svg",
  visualAlt: "Ilustración abstracta de perfil y sistemas",
  summary:
    "Desarrollador Full Stack con foco en backend y experiencia en productos empresariales. Trabajo en Grupo Hasar construyendo APIs, integraciones y evolución de sistemas con Java, Node/TypeScript, NestJS y Next.js. Complemento esta práctica con formación continua en UTN y experiencia como tutor de React.js.",
  cvUrlEs: "/cv-marcelo-carabajal.pdf",
  cvUrlEn: "/cv-marcelo-carabajal-en.pdf",
} as const;

export const skillGroups = [
  {
    title: "Lenguajes",
    items: ["Java", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["Quarkus", "Spring Boot", "ASP.NET Framework", "NestJS", "Node.js", "Express.js"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Android Studio (Java)"],
  },
  {
    title: "Datos",
    items: ["SQL Server", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "DevOps & calidad",
    items: ["Git", "Docker", "OpenShift", "YAML", "Swagger", "Jest", "JUnit", "Mockito"],
  },
] as const;

export const projects = [
  {
    name: "Desarrollador Full Stack · Backend & APIs",
    role: "Grupo Hasar — desde 2021",
    summary:
      "Desarrollo y mantenimiento de soluciones empresariales en entornos legacy y modernos: backend con Java (Quarkus, Spring Boot), C#/.NET Framework y ADO.NET, datos con SQL Server, e interfaces con React, WebForms y WinForms; además de soporte a despliegues con Docker/OpenShift y prácticas de testing.",
    stack: [
      "Java",
      "Quarkus",
      "Spring Boot",
      "SQL Server",
      "C#",
      ".NET Framework",
      "ADO.NET",
      "WebForms",
      "WinForms",
      "NestJS",
      "Next.js",
      "React",

      "Git",
      "YAML",
      "Swagger",
      "Jest",
      "JUnit",
      "Mockito",
      "Android Studio (Java)",
      "React Native",
      "Docker",
      "OpenShift",
    ],
    imageSrc: "/art-project-api.svg",
    imageAlt: "Ilustración de red de APIs y malla de servicios",
  },
  {
    name: "Producto web full stack",
    role: "Brillante Pro — Queloco Creativo",
    summary:
      "Sitio y servicios con React, Spring Boot y Java, priorizando UX responsive, performance y mantenimiento continuo del producto.",
    stack: ["React", "Spring Boot", "Java", "HTML/CSS"],
    imageSrc: "/art-project-web.svg",
    imageAlt: "Ilustración de interfaz web y ventana de producto",
  },
  {
    name: "Acompañamiento educativo React",
    role: "Coderhouse — Tutoría",
    summary:
      "Diseño de ejercicios prácticos sobre componentes, hooks y estado. Devolución de código y buenas prácticas para estudiantes de frontend.",
    stack: ["React", "Hooks", "Arquitectura UI"],
    imageSrc: "/art-project-teach.svg",
    imageAlt: "Ilustración de código y formación en React",
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcelo-carabajal/",
    hint: "Trayectoria y recomendaciones",
    iconSrc: "/icons/linkedin.svg",
  },
  {
    label: "Email",
    href: "mailto:marcelocarabajalok@gmail.com",
    hint: "marcelocarabajalok@gmail.com",
    iconSrc: "/icons/mail.svg",
  },
  {
    label: "WhatsApp / llamadas",
    href: "https://wa.me/5491126347325",
    hint: "+54 11 2634-7325",
    iconSrc: "/icons/whatsapp.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/MarceloCarabajal",
    hint: "github.com/MarceloCarabajal",
    iconSrc: "/icons/github.svg",
  },
] as const;

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#conocimientos", label: "Conocimientos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#redes", label: "Redes" },
  { href: "#contacto", label: "Contacto" },
] as const;
