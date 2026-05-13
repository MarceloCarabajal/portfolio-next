import { contactEmail, getSiteUrl, siteMeta } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMeta.name,
    jobTitle: siteMeta.title,
    url: getSiteUrl(),
    description: siteMeta.description,
    email: contactEmail,
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
