/**
 * Canonical site URL for metadata (og:image, JSON-LD, etc.).
 * Prefer NEXT_PUBLIC_SITE_URL in production; on Vercel previews use the deployment host
 * so og:image points to the same deployment that serves the page (WhatsApp / crawlers).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
