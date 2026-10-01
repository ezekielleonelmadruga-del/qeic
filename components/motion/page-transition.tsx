"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";
import { transitions } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useSafeReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transitions.standard}
    >
      {children}
    </motion.div>
  );
}
