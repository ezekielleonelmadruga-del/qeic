"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

/** Thin blue bar along the bottom of the header that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const reduced = useSafeReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduced ? scrollYProgress : smoothed }}
      className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px] origin-left bg-qeic-500"
    />
  );
}
