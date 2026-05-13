import { bundles } from "./i18n";

export type { Locale } from "./i18n";
export { bundles, defaultLocale } from "./i18n";

/** Public contact email (form, JSON-LD). */
export const contactEmail = "marcelocarabajalok@gmail.com" as const;

/** English copy for static metadata & JSON-LD (crawlers). UI uses `LanguageProvider`. */
export const siteMeta = bundles.en.site;

/** Base URL for `metadataBase`, Open Graph, and JSON-LD. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
