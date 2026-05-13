import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import { JsonLd } from "@/components/JsonLd";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteMeta.name} | ${siteMeta.title}`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "Backend",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "C#",
    "APIs",
    "Argentina",
    "UTN FRGP",
  ],
  authors: [{ name: siteMeta.name, url: siteUrl }],
  creator: siteMeta.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${siteMeta.name} — Portfolio`,
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.description,
    images: [
      {
        url: "/icon.svg",
        width: 64,
        height: 64,
        alt: `${siteMeta.name} — portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.description,
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-body text-slate-100 cosmic-bg">
        <AppProviders>
          <JsonLd />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
