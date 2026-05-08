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
  paragraphs: [
    "Soy desarrollador Full Stack con foco en backend y trayectoria en empresas que desafían la escala y la integración entre sistemas. Disfruto diseñar APIs claras, ordenar migraciones y dejar equipos con herramientas que se pueden desplegar con confianza.",
    "Actualmente en Grupo Hasar — Hasar Sistemas, participo en proyectos con lógica de negocio compleja, integraciones y evolución continua de plataformas. También fui tutor de React.js en Coderhouse, lo que reforzó mi mirada sobre buenas prácticas en frontend y feedback de código.",
    "Estudio la Tecnicatura Universitaria en Programación en la UTN General Pacheco y complementé mi perfil con la carrera de Full Stack en Coderhouse. Idiomas: español nativo e inglés intermedio.",
  ],
} as const;

export const skillsVisual = {
  bannerSrc: "/art-skills.svg",
  bannerAlt: "Onda de señal y herramientas de desarrollo",
} as const;

export const skillGroups = [
  {
    title: "Lenguajes",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "C#"],
  },
  {
    title: "Backend",
    items: ["Quarkus", "Spring Boot", "Node.js", "Express.js", "NestJS", "ASP.NET Framework"],
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
    items: ["SQL Server", "MongoDB", "Firebase", "MySQL"],
  },
  {
    title: "DevOps & calidad",
    items: ["Docker", "OpenShift", "Git", "YAML", "Swagger", "Jest", "JUnit", "Mockito"],
  },
] as const;

export const projects = [
  {
    name: "Plataformas corporativas y APIs",
    role: "Grupo Hasar — desde 2021",
    summary:
      "Desarrollo web y backend con Java (Quarkus, Spring Boot), Node/TypeScript, NestJS, Next.js y React. Enfoque en reglas de negocio, contratos de API y pruebas en entornos containerizados.",
    stack: ["Java", "NestJS", "Next.js", "OpenShift", "Docker"],
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
  },
  {
    label: "Email",
    href: "mailto:marcelocarabajalok@gmail.com",
    hint: "marcelocarabajalok@gmail.com",
  },
  {
    label: "WhatsApp / llamadas",
    href: "https://wa.me/5491126347325",
    hint: "+54 11 2634-7325",
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
