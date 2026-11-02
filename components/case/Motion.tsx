"use client";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** honour "reduce motion": transforms jump to their end state, nothing slides or spins */
export default function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
