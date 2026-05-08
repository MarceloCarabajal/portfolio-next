import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          border: "2px solid rgba(45,226,255,0.8)",
          background:
            "radial-gradient(circle at 25% 20%, rgba(45,226,255,0.35), transparent 50%), linear-gradient(135deg, #020617, #312e81 65%, #be185d)",
          color: "#e2f7ff",
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          textShadow: "0 0 12px rgba(45,226,255,0.65)",
        }}
      >
        MC
      </div>
    ),
    {
      ...size,
    },
  );
}
