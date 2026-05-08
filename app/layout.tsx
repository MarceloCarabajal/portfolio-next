import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import "./globals.css";

const fontDisplay = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
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
    "UTN",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: ["/twitter-image"],
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
      className={`${fontDisplay.variable} ${fontBody.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-body text-slate-100 cosmic-bg">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
