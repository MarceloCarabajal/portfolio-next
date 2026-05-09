import { bundles, defaultLocale } from "./i18n";

export type { Locale } from "./i18n";
export { bundles, defaultLocale } from "./i18n";

/** Public contact email (form, JSON-LD). */
export const contactEmail = "marcelocarabajalok@gmail.com" as const;

/** English copy for static metadata & JSON-LD (crawlers). UI uses `LanguageProvider`. */
export const siteMeta = bundles.en.site;
