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
    "Construyo servicios robustos y productos web con Java (Quarkus, Spring Boot), C#/.NET, Node/TypeScript, NestJS y Next.js.",
  /** Colocá tu foto en public/profile.jpg (recomendado 800×800+). Si no existe, se usa el SVG. */
  imageSrc: "/profile.jpg",
  imageFallback: "/profile.svg",
  imageAlt: "Retrato de Marcelo Carabajal",
} as const;

export const about = {
  visualSrc: "/art-about.svg",
  visualAlt: "Ilustración abstracta de perfil y sistemas",
  tagline:
    "Backend que acompaña el negocio: APIs confiables, integraciones claras y sistemas pensados para evolucionar en producción.",
  blocks: [
    {
      title: "Perfil",
      body:
        "Soy desarrollador Full Stack con fuerte foco en backend y trayectoria en entornos exigentes.",
    },
    {
      title: "Qué hago",
      body:
        "Diseño y mantengo APIs, integraciones y servicios que conviven con sistemas legacy y modernos, priorizando estabilidad, trazabilidad y código mantenible.",
    },
    {
      title: "Stack principal",
      body:
        "Java (Quarkus, Spring Boot) y C#/.NET para soluciones empresariales; Node/TypeScript, NestJS, Next.js y React cuando el producto lo requiere.",
    },
  ],
  cvUrlEs: "/cv-marcelo-carabajal.pdf",
  cvUrlEn: "/cv-marcelo-carabajal-en.pdf",
} as const;

/** Email para contacto y botón copiar (alineado con formulario y JSON-LD). */
export const contactEmail = "marcelocarabajalok@gmail.com" as const;

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
    context:
      "Entorno enterprise en producción: APIs, datos y aplicaciones que conviven con sistemas legacy.",
    summary:
      "Desarrollo y mantenimiento de backends y servicios con Java (Quarkus, Spring Boot) y C#/.NET Framework con ADO.NET; datos en SQL Server; interfaces con React, WebForms y WinForms. Aporte en despliegues con Docker/OpenShift y prácticas de testing (Jest, JUnit, Mockito).",
    impact:
      "Enfoque en integraciones estables, evolución incremental del código y soluciones mantenibles en el tiempo.",
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
    context:
      "Producto digital con énfasis en experiencia de usuario, rendimiento y evolución continua.",
    summary:
      "Implementación y soporte del sitio y servicios con React y Spring Boot/Java: vistas responsive, tiempos de carga y mantenimiento operativo del stack.",
    impact:
      "Priorizar un producto estable para el usuario final y simple de seguir extendiendo en equipo.",
    stack: ["React", "Spring Boot", "Java", "HTML/CSS"],
    imageSrc: "/art-project-web.svg",
    imageAlt: "Ilustración de interfaz web y ventana de producto",
  },
  {
    name: "Acompañamiento educativo React",
    role: "Coderhouse — Tutoría",
    context:
      "Aula práctica de frontend: estudiantes construyendo interfaces con React.",
    summary:
      "Diseño de ejercicios sobre componentes, hooks y manejo de estado; revisión de entregas con feedback técnico y buenas prácticas de UI.",
    impact:
      "Reducir la brecha entre teoría y código real con correcciones accionables.",
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
    href: `mailto:${contactEmail}`,
    hint: contactEmail,
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
