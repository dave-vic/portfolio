"use client";
import { MotionConfig } from "motion/react";

/** One place for reduced motion: when the visitor asks for less motion,
 *  movement is switched off and elements simply fade in. */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
