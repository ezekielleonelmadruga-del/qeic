import type { Transition, Variants } from "framer-motion";

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  fast: { duration: 0.2, ease: easeOutExpo },
  standard: { duration: 0.45, ease: easeOutExpo },
  slow: { duration: 0.8, ease: easeOutExpo },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.standard },
};

export const revealViewport = { once: true, amount: 0.3 };
