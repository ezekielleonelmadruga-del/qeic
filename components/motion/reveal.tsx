"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";
import { fadeUp, revealViewport, transitions } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fades + slides children up the first time they scroll into view. */
export function Reveal({ delay = 0, ...props }: RevealProps) {
  const reduced = useSafeReducedMotion();

  // With no animation props, motion.div renders as a plain div.
  if (reduced) return <motion.div {...props} />;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ ...transitions.standard, delay }}
      {...props}
    />
  );
}
