# Marcelo Carabajal Portfolio (Next.js)

Personal portfolio built with Next.js App Router, Tailwind CSS v4, and a neon visual style.
Includes a bilingual UI toggle (ES/EN), sections for professional profile and projects, and a contact form backed by Resend.

## Highlights

- Bilingual interface with persistent `ES | EN` toggle (`localStorage`)
- Hero section with neon effects and animated floating background
- Sections: About, Skills, Projects, Social links, Contact
- Contact API route (`app/api/contact/route.ts`) using Resend
- Fallback `mailto` behavior when email API is not configured
- Custom rocket-based FAB (scroll to top); favicon in `app/icon.svg` (see README to generate PNG/ICO if you want)

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Resend (transactional email)

## Project Structure

```text
app/
  api/contact/route.ts      # Contact endpoint (Resend)
  layout.tsx                # Metadata + global providers
  page.tsx                  # Main page composition
  icon.svg / apple-icon.svg # Favicon (rocket)
components/
  LanguageProvider.tsx      # i18n state + persistence
  SiteHeader.tsx            # Header + ES/EN toggle
  Section*.tsx              # Home sections
  ScrollToTop.tsx           # Rocket FAB
lib/
  i18n/en.ts                # English copy bundle
  i18n/es.ts                # Spanish copy bundle
  content.ts                # Shared exports + metadata copy
public/
  icons/                    # Social and UI icons
```

## Favicon (y preview en redes, si la querés)

El proyecto usa **`app/icon.svg`** (cohete). Next lo sirve como favicon en la pestaña del navegador.

Para **generar** favicons en PNG / ICO a partir de una imagen o texto:

- [favicon.io](https://favicon.io/) — muy simple: texto, emoji o subís una imagen y descargás el pack.
- [RealFaviconGenerator](https://realfavicongenerator.net/) — más completo (Android, Safari, etc.).

Si descargás un **`favicon.ico`**, podés ponerlo en **`app/favicon.ico`** (Next lo detecta). Si preferís PNG, **`app/icon.png`** también funciona; podés quitar o dejar el SVG según prioridad de Next.

**Nota:** WhatsApp y otras apps suelen **no usar el favicon** como miniatura del link; para eso haría falta un **`og:image`** en PNG (archivo estático en `public/`, por ejemplo `og.png`, y una línea en `metadata.openGraph.images`). Sin eso, igual se ven título y descripción. No sumamos código extra en el repo para eso.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required/optional variables:

- `RESEND_API_KEY` (required to send emails through API)
- `RESEND_FROM` (recommended, verified sender)
- `CONTACT_TO_EMAIL` (optional destination override)

If `RESEND_API_KEY` is missing, the UI shows fallback guidance and allows `mailto` draft creation.

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Production build check
- `npm run start` - Serve production build
- `npm run lint` - Run ESLint

## Deploy (Vercel)

1. Import this folder as a Vercel project.
2. Add environment variables from `.env.local`.
3. Deploy.

Recommended:

- Use a verified domain in Resend for production sending.
- Keep `NEXT_PUBLIC_SITE_URL` configured in Vercel for correct metadata URLs.

## Notes

- UI language defaults to Spanish and can be changed from the header toggle.
- SEO metadata is currently served from English static metadata (`siteMeta`) for crawler consistency.
