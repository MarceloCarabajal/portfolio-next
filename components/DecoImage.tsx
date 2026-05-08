type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** En franjas bajas, `cover` evita bandas vacías con SVG anchos */
  fit?: "contain" | "cover";
};

function isVectorSrc(src: string) {
  return /\.svg(\?.*)?$/i.test(src);
}

/**
 * SVG: por defecto object-contain + padding para que no se recorten mal.
 * Raster: object-cover. Usá fit="cover" en banners bajos si preferís que llene el alto.
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
