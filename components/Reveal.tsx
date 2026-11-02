"use client";
import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.2, 0.7, 0.1, 1] as const;

/** Rises into place once it scrolls into view. */
export default function Reveal({
  children, delay = 0, y = 40, x = 0, style, className, as = "div",
}: { children?: ReactNode; delay?: number; y?: number; x?: number; style?: CSSProperties; className?: string; as?: "div" | "p" | "span" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}
