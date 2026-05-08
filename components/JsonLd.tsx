import { site } from "@/lib/content";

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: siteUrl(),
    description: site.description,
    email: "marcelocarabajalok@gmail.com",
    telephone: "+54-11-2634-7325",
    sameAs: ["https://www.linkedin.com/in/marcelo-carabajal/"],
    knowsLanguage: ["es", "en"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional — Regional General Pacheco",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
