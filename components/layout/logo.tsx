import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  /** Render the logo white, for dark backgrounds. */
  light?: boolean;
};

export function Logo({ className, href = "/", onClick, light = false }: LogoProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="QEIC, Queen's Entrepreneurship and Innovation Committee, home"
      className={cn("inline-flex items-center transition-opacity hover:opacity-80", className)}
    >
      <Image
        src="/brand/qeic-logo.png"
        alt="QEIC"
        width={672}
        height={234}
        priority
        unoptimized
        className={cn(
          "h-7 w-auto",
          light && "[filter:brightness(0)_invert(1)_drop-shadow(0_1px_3px_rgb(0_0_0/0.5))]",
        )}
      />
    </Link>
  );
}
