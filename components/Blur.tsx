"use client";
import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.2, 0.7, 0.1, 1] as const;

/**
 * Comes into focus: blurred and faint, then sharp (the Figma motion's text entrance).
 * play: undefined = when scrolled into view; boolean = controlled by the parent (e.g. after the loader).
 */
export default function Blur({
  children, delay = 0, duration = 1, y = 0, blur = 16, play, style, className, as = "span",
}: { children?: ReactNode; delay?: number; duration?: number; y?: number; blur?: number; play?: boolean; style?: CSSProperties; className?: string; as?: "span" | "div" | "p" }) {
  const M = motion[as];
  const hide = { opacity: 0, filter: `blur(${blur}px)`, y };
  const show = { opacity: 1, filter: "blur(0px)", y: 0 };
  const tr = { duration, ease: EASE, delay };
  return play === undefined ? (
    <M className={className} style={style} initial={hide} whileInView={show} viewport={{ once: true, margin: "0px 0px -10% 0px" }} transition={tr}>{children}</M>
  ) : (
    <M className={className} style={style} initial={hide} animate={play ? show : hide} transition={tr}>{children}</M>
  );
}
