import { en } from "./en";
import { es } from "./es";

export type Locale = "es" | "en";

export const bundles = { es, en } as const;

export const defaultLocale: Locale = "es";
