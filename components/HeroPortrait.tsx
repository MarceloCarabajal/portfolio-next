"use client";

import { useCallback, useState } from "react";

type Props = {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
};

export function HeroPortrait({ primarySrc, fallbackSrc, alt }: Props) {
  const [src, setSrc] = useState(primarySrc);
  const onError = useCallback(() => {
    setSrc((current) => (current !== fallbackSrc ? fallbackSrc : current));
  }, [fallbackSrc]);
  const isSvg = /\.svg(\?.*)?$/i.test(src);
  return (
    <img
      src={src}
      alt={alt}
      onError={onError}
      width={720}
      height={720}
      className={
        isSvg
          ? "h-full w-full object-contain object-center bg-[radial-gradient(circle_at_50%_42%,rgba(244,114,182,0.12),rgba(15,23,42,0.95))] p-6 sm:p-10"
          : "h-full w-full object-contain object-center bg-[radial-gradient(circle_at_50%_42%,rgba(45,226,255,0.1),rgba(15,23,42,0.9))] p-2 sm:bg-none sm:p-0 sm:object-cover sm:object-[center_22%] lg:object-[center_26%]"
      }
      fetchPriority="high"
      decoding="async"
    />
  );
}
