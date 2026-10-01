"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const subscribe = () => () => {};

/**
 * Like framer-motion's useReducedMotion, but always `false` during SSR and
 * hydration so server and client markup match.
 */
export function useSafeReducedMotion() {
  const prefersReduced = useReducedMotion();
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  return isClient && !!prefersReduced;
}
