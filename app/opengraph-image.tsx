import { siteMeta } from "@/lib/content";
import { createPortfolioOgImage, ogImageSize } from "@/lib/og-image-response";

export const runtime = "nodejs";
export const alt = `${siteMeta.name} — portfolio`;
export const size = ogImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return createPortfolioOgImage();
}
