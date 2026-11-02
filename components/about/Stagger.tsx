"use client";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

export const EASE = [0.2, 0.7, 0.1, 1] as const;

/**
 * Visible wrapper that watches the viewport and releases its children one after another.
 * Children use <StaggerItem>, which only carries variants (no whileInView of its own).
 */
export function StaggerGroup({
  children, style, className, gap = 0.08, delay = 0, amount = 0.15, as = "div",
}: { children: ReactNode; style?: CSSProperties; className?: string; gap?: number; delay?: number; amount?: number; as?: "div" | "section" | "ul" }) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </M>
  );
}

const PRESETS: Record<string, Variants> = {
  rise: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } },
  fade: { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } } },
  // the element sits inside an overflow:hidden mask and slides up out of it
  mask: { hidden: { y: "105%" }, show: { y: 0, transition: { duration: 1, ease: EASE } } },
  side: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } } },
};

export function StaggerItem({
  children, style, className, kind = "rise", as = "div",
}: { children?: ReactNode; style?: CSSProperties; className?: string; kind?: keyof typeof PRESETS; as?: "div" | "p" | "span" | "a" | "li" }) {
  const M = motion[as];
  return (
    <M className={className} style={style} variants={PRESETS[kind]}>
      {children}
    </M>
  );
}
