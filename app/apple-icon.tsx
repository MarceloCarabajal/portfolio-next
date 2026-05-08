import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          border: "4px solid rgba(45,226,255,0.7)",
          background:
            "radial-gradient(circle at 22% 18%, rgba(45,226,255,0.35), transparent 46%), linear-gradient(135deg, #020617, #312e81 62%, #be185d)",
          color: "#f8fdff",
          fontSize: 76,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          textShadow: "0 0 16px rgba(45,226,255,0.65)",
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
