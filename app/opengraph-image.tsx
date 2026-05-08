import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: "52px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(45,226,255,0.25), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255,75,213,0.20), transparent 48%), linear-gradient(135deg, #020617, #0f172a 40%, #312e81 100%)",
          color: "#e2e8f0",
          fontFamily: "Inter, system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.28,
            backgroundImage:
              "linear-gradient(rgba(45,226,255,0.17) 1px, transparent 1px), linear-gradient(90deg, rgba(255,75,213,0.13) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(45,226,255,0.40)",
            borderRadius: 24,
            padding: "40px",
            boxShadow: "0 0 42px rgba(45,226,255,0.16)",
            background: "rgba(2,6,23,0.45)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7dd3fc",
                fontWeight: 700,
              }}
            >
              Portfolio Personal
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "#dff9ff",
                textShadow: "0 0 30px rgba(45,226,255,0.45)",
              }}
            >
              Marcelo Carabajal
            </div>
            <div
              style={{
                fontSize: 34,
                color: "#e9d5ff",
                fontWeight: 600,
              }}
            >
              {site.title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: "#cbd5e1",
              }}
            >
              Java · Spring Boot · NestJS · Next.js · C#
            </div>
            <div
              style={{
                width: 116,
                height: 116,
                borderRadius: 58,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(45,226,255,0.75)",
                color: "#cffafe",
                fontSize: 44,
                fontWeight: 800,
                background: "rgba(15,23,42,0.8)",
                textShadow: "0 0 12px rgba(45,226,255,0.65)",
              }}
            >
              MC
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
