"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src?: ImageProps["src"];
  initials?: string;
  placeholderClassName?: string;
};

/** next/image that falls back to an initials tile if the src is missing or fails. */
export function SafeImage({
  className,
  placeholderClassName,
  initials,
  alt,
  src,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-light-gray to-muted text-medium-gray select-none dark:from-dark-gray dark:to-charcoal",
          className,
          placeholderClassName,
        )}
      >
        {initials ? (
          <span className="font-mono text-sm font-semibold tracking-widest uppercase opacity-70">
            {initials}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <Image
      className={className}
      alt={alt}
      src={src}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
