import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";

export const ogImageSize = { width: 1200, height: 630 } as const;

/** PNG OG image — WhatsApp / Telegram need raster, not SVG. */
export async function createPortfolioOgImage() {
  const svgPath = path.join(process.cwd(), "public", "icons", "rocket-up.svg");
  const svg = await readFile(svgPath, "utf8");
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  const desc =
    siteMeta.description.length > 160
      ? `${siteMeta.description.slice(0, 157)}…`
      : siteMeta.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 18% 22%, rgba(45,226,255,0.22), transparent 42%), radial-gradient(circle at 88% 78%, rgba(236,72,153,0.18), transparent 40%), linear-gradient(135deg, #020617 0%, #1e1b4b 55%, #831843 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 56,
            padding: "48px 64px",
          }}
        >
          <img
            src={src}
            width={300}
            height={300}
            alt=""
            style={{ objectFit: "contain", filter: "drop-shadow(0 0 28px rgba(45,226,255,0.45))" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 680,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              {siteMeta.name}
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#a5f3fc",
                lineHeight: 1.15,
              }}
            >
              {siteMeta.title}
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#cbd5e1",
                lineHeight: 1.45,
              }}
            >
              {desc}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
