"use client";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { EASE, FlowShot, ShotBox, mono } from "./ui";

/** the band wipes open: a bone cover slides up and away when the band scrolls in */
function Wipe() {
  return (
    <motion.div
      aria-hidden className="bleed"
      style={{ position: "absolute", inset: 0, background: "var(--bone)", transformOrigin: "50% 0%", zIndex: 5, pointerEvents: "none" }}
      variants={{ hide: { scaleY: 1 }, show: { scaleY: 0 } }}
      transition={{ duration: 1.1, ease: EASE }}
    />
  );
}

/** phone floats gently */
function Float({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const reduce = useReducedMotion();
  return (
    <motion.div style={style} animate={reduce ? undefined : { y: [0, -14, 0] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}>
      {children}
    </motion.div>
  );
}

export default function Overview({ c }: { c: CaseData }) {
  const o = c.overview;
  const wrap = (cls: string, style: React.CSSProperties, children: React.ReactNode) => (
    <motion.div data-noauto key={cls} className={cls} style={{ position: "relative", overflow: "hidden", background: c.colors.brand, color: "#fff", ...style }} initial="hide" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      {children}
      <Wipe />
    </motion.div>
  );
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-overview`}>
      {wrap("only-d sec", { height: u(1000) }, <>
        <p id={`${c.slug}-overview`} style={{ ...at(56, 120), ...mono(12, 6) }}>(01) OVERVIEW</p>
        <Reveal delay={0.35} style={at(56, 170, o.ledeW ?? 1020)}>
          <p style={{ ...t(o.size ?? 46, 1.12, -(o.size ?? 46) * 0.02) }}>{o.lede}</p>
        </Reveal>
        <Float style={{ position: "absolute", inset: 0, pointerEvents: "none" }}><ShotBox s={o.phone} /></Float>
        {o.facts.map(([k, v], i) => (
          <Reveal key={k} delay={0.5 + i * 0.1} y={20} style={at(56 + i * 340, 800, 300)}>
            <p style={{ ...mono(11, 6), color: c.colors.tint }}>{k}</p>
            <p style={{ ...t(17, "normal"), marginTop: u(12) }}>{v}</p>
          </Reveal>
        ))}
      </>)}

      {/* tablet: text column + phone; mobile: stacked */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const facts = (
          <div style={{ display: "flex", flexDirection: "column", gap: u(18) }}>
            {o.facts.map(([k, v]) => (
              <div key={k} style={{ display: "flex", flexDirection: "column", gap: u(6) }}>
                <p style={{ ...mono(11, 6, 1.4), color: c.colors.tint }}>{k}</p>
                <p style={t(16, 1.25)}>{v}</p>
              </div>
            ))}
          </div>
        );
        const ph = T ? 540 : 460, pw = (ph * o.phone.w) / o.phone.h;
        const phone = <Float><FlowShot s={o.phone} w={pw} r={T ? 19.9 : 16.9} rot={o.phone.rot} /></Float>;
        return wrap(T ? "only-t" : "only-m", { padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }, <>
          <p style={{ ...mono(11, 6, 1.4) }}>(01) OVERVIEW</p>
          {T ? (
            <div style={{ display: "flex", alignItems: "center", gap: u(40), marginTop: u(24) }}>
              <div style={{ width: u(414), flex: "none", display: "flex", flexDirection: "column", gap: u(32) }}>
                <p style={t(30, 1.25, -0.6)}>{o.lede}</p>
                {facts}
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>{phone}</div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: u(24), marginTop: u(24) }}>
              <p style={t(24, 1.25, -0.48)}>{o.lede}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>{phone}</div>
              {facts}
            </div>
          )}
        </>);
      })}
    </section>
  );
}
