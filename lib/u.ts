import type { CSSProperties } from "react";

/** n design pixels, scaled to the current breakpoint frame (430 / 834 / 1728) */
export const u = (n: number) => `calc(var(--u) * ${n})`;

/** absolute box in design pixels */
export const at = (x: number, y: number, w?: number, h?: number, extra: CSSProperties = {}): CSSProperties => ({
  position: "absolute",
  left: u(x),
  top: u(y),
  ...(w !== undefined ? { width: u(w) } : {}),
  ...(h !== undefined ? { height: u(h) } : {}),
  ...extra,
});

/** text style: size, line-height (ratio), letter-spacing in design px */
export const t = (size: number, lh: number | "normal" = "normal", ls = 0, extra: CSSProperties = {}): CSSProperties => ({
  fontSize: u(size),
  lineHeight: lh,
  ...(ls ? { letterSpacing: u(ls) } : {}),
  ...extra,
});
