"use client";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Img, Shot } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";

export const EASE = [0.2, 0.7, 0.1, 1] as const;

/** letter-spacing given as a % of the font size (Figma) -> design px */
export const ls = (size: number, pct: number) => (size * pct) / 100;

/** mono label, Figma "Geist Mono" with % tracking */
export const mono = (size: number, pct: number, lh: number | "normal" = "normal", extra: CSSProperties = {}): CSSProperties => ({
  fontFamily: "var(--f-mono)",
  ...t(size, lh, ls(size, pct)),
  ...extra,
});

/** an image fill clipped to its box, using Figma's crop transform */
export function Pic({ img, style, eager }: { img: Img; style?: CSSProperties; eager?: boolean }) {
  const [sx, sy, tx, ty] = img.crop ?? [1, 1, 0, 0];
  const imgStyle: CSSProperties = img.cover
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : { position: "absolute", width: `${100 / sx}%`, height: `${100 / sy}%`, left: `${(-tx / sx) * 100}%`, top: `${(-ty / sy) * 100}%` };
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      <img src={img.src} alt={img.alt ?? ""} loading={eager ? "eager" : "lazy"} decoding="async" style={imgStyle} />
    </div>
  );
}

export const shadow = (a = 0.2, y = 24, blur = 60) => `0 ${u(y)} ${u(blur)} rgba(0,0,0,${a})`;

/** shadow + backing for a screen: images with transparent areas get a shadow that follows their pixels (as in Figma) */
export const skin = (img: Img, a: number | undefined, y = 24, blur = 60, bg = "#fff"): CSSProperties =>
  img.alpha
    ? { background: "transparent", filter: a ? `drop-shadow(0 ${u(y)} ${u(blur / 2)} rgba(0,0,0,${a}))` : undefined }
    : { background: bg, boxShadow: a ? shadow(a, y, blur) : undefined };

/** a placed, rotated screen in the 1728 desktop frame */
export function ShotBox({ s, style, eager, stroke }: { s: Shot; style?: CSSProperties; eager?: boolean; stroke?: string }) {
  return (
    <div style={{ ...at(s.x, s.y, s.w, s.h), transform: s.rot ? `rotate(${-s.rot}deg)` : undefined, ...style }}>
      <Pic img={s.img} eager={eager} style={{ width: "100%", height: "100%", borderRadius: u(s.r), ...skin(s.img, s.shadow) }} />
      {stroke && <div aria-hidden style={{ position: "absolute", inset: 0, borderRadius: u(s.r), border: `${u(2)} solid ${stroke}`, pointerEvents: "none" }} />}
    </div>
  );
}

/** rotated bounding box of a w×h box turned by rot degrees */
export const bbox = (w: number, h: number, rot = 0) => {
  const a = (Math.abs(rot) * Math.PI) / 180;
  return [w * Math.cos(a) + h * Math.sin(a), h * Math.cos(a) + w * Math.sin(a)];
};

/** a flow-layout screen: given width, height from the desktop box ratio; takes up its rotated bounding box */
export function FlowShot({ s, w, r, rot, style, stroke }: { s: Shot; w: number; r?: number; rot?: number; style?: CSSProperties; stroke?: string }) {
  const k = w / s.w, h = s.h * k;
  const [bw, bh] = bbox(w, h, rot);
  const rad = u(r ?? s.r * Math.max(k, 0.45));
  return (
    <div style={{ position: "relative", width: u(bw), height: u(bh), flex: "none", ...style }}>
      <div style={{ position: "absolute", left: u((bw - w) / 2), top: u((bh - h) / 2), width: u(w), height: u(h), transform: rot ? `rotate(${-rot}deg)` : undefined }}>
        <Pic img={s.img} style={{ width: "100%", height: "100%", borderRadius: rad, ...skin(s.img, s.shadow && s.shadow * 0.9, 12, 32) }} />
        {stroke && <div aria-hidden style={{ position: "absolute", inset: 0, borderRadius: rad, border: `${u(2)} solid ${stroke}`, pointerEvents: "none" }} />}
      </div>
    </div>
  );
}

/** counts a number up when it scrolls into view; non-numeric values are shown as they are */
export function Count({ v, style, className }: { v: string; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const n = /^\d+$/.test(v) ? parseInt(v, 10) : null;
  const [shown, setShown] = useState(v);
  const started = useRef(false);
  useEffect(() => {
    if (n === null || reduce || started.current) return;
    if (!inView) { setShown("0"); return; }
    started.current = true;
    const c = animate(0, n, { duration: 0.9 + Math.min(n, 30) * 0.03, ease: [0.2, 0.7, 0.1, 1], onUpdate: (x) => setShown(String(Math.round(x))) });
    return () => c.stop();
  }, [inView, n, reduce, v]);
  return <span ref={ref} className={className} style={style}>{shown}</span>;
}

/** drifts its children sideways as the page scrolls past */
export function Drift({ children, dist = 120, style, className }: { children: ReactNode; dist?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-dist, 0, dist]);
  return (
    <motion.div ref={ref} className={className} style={{ ...style, x: reduce ? 0 : x }}>
      {children}
    </motion.div>
  );
}

/** drift that starts at rest (for the first section on the page) */
export function DriftTop({ children, dist = 120, style, className, enter }: { children: ReactNode; dist?: number; style?: CSSProperties; className?: string; enter?: boolean }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1100], [0, dist], { clamp: true });
  return (
    <motion.div className={className} style={{ ...style, x: reduce ? 0 : x }}>
      {enter ? (
        /* giant words slide in from their own side, then keep drifting with the scroll (Figma motion) */
        <motion.div initial={{ x: u(dist < 0 ? -420 : 420), opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ x: { duration: 1.3, ease: EASE, delay: 0.1 }, opacity: { duration: 0.6, delay: 0.1 } }}>
          {children}
        </motion.div>
      ) : children}
    </motion.div>
  );
}

/** a numbered pin, laterite circle */
export function Pin({ n, size = 28, style, active }: { n: number; size?: number; style?: CSSProperties; active?: boolean }) {
  return (
    <span
      aria-hidden
      className="mono"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", width: u(size), height: u(size), borderRadius: "50%",
        background: "var(--laterite-2)", color: "#fff", ...t(13, 1), flex: "none",
        transform: active ? "scale(1.3)" : "scale(1)", boxShadow: active ? `0 0 0 ${u(6)} rgba(168,64,20,.22)` : "none",
        transition: "transform .35s cubic-bezier(.2,.7,.1,1), box-shadow .35s", ...style,
      }}
    >
      {n}
    </span>
  );
}
