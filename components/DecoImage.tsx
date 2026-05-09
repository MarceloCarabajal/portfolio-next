type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** In short strips, `cover` avoids empty bands with wide SVGs */
  fit?: "contain" | "cover";
};

function isVectorSrc(src: string) {
  return /\.svg(\?.*)?$/i.test(src);
}

/**
 * SVG: default object-contain + padding so artwork isn’t cropped awkwardly.
 * Raster: object-cover. Use fit="cover" on short banners if you want full-height fill.
 */
export function DecoImage({ src, alt, className = "", priority, fit }: Props) {
  const vector = isVectorSrc(src);
  const useCover = fit === "cover" || (!vector && fit !== "contain");
  const base =
    "h-full w-full transition-transform duration-500 " +
    (useCover
      ? "object-cover object-center "
      : "object-contain object-center bg-[radial-gradient(ellipse_at_50%_40%,rgba(45,226,255,0.12),transparent_62%)] p-5 sm:p-8 ");
  return (
    <img
      src={src}
      alt={alt}
      width={vector ? 800 : 1200}
      height={vector ? 450 : 675}
      className={`${base}${className}`.trim()}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}
