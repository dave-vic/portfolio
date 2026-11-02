"use client";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const LI = "https://www.linkedin.com/in/davida-dzato-b870021a0/";
// words in order; "pill" = photo pill with its Figma crop. dim = the grey half of the sentence
type Tok = { w: string; dim?: boolean } | { pill: [number, number, number, number] };
const TOKENS: Tok[] = [
  { w: "I" }, { w: "partner" }, { w: "with" }, { pill: [588.24, 757.58, -208.82, -450] }, { w: "startups," }, { w: "institutions" }, { w: "and" },
  { pill: [588.24, 757.58, -338.24, -366.67] }, { w: "founders" }, { w: "to", dim: true }, { w: "shape", dim: true },
  { pill: [666.67, 858.59, -363.33, -722.73] }, { w: "products", dim: true }, { w: "people", dim: true }, { w: "trust.", dim: true },
];
const SUB = "Based in Accra, working remotely with product teams anywhere. I stay close to the work from the first conversation to the final screen.";

function Word({ tok, i, n, p, pill }: { tok: Tok; i: number; n: number; p: MotionValue<number>; pill: [number, number] }) {
  // each word brightens as the reader scrolls past it
  const start = i / n, end = (i + 1) / n;
  const o = useTransform(p, [start, end], [0.28, 1]);
  if ("pill" in tok) {
    const [w, h, l, tp] = tok.pill;
    return (
      <motion.span style={{ opacity: o, display: "inline-block", width: u(pill[0]), height: u(pill[1]), borderRadius: u(pill[1] / 2), overflow: "hidden", position: "relative", flex: "none" }}>
        <img src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", width: `${w}%`, height: `${h}%`, left: `${l}%`, top: `${tp}%` }} />
      </motion.span>
    );
  }
  return <motion.span style={{ opacity: o, color: tok.dim ? "var(--muted)" : "var(--on-dark)", whiteSpace: "nowrap" }}>{tok.w}</motion.span>;
}

function Sentence({ size, ls, gap, pill, width }: { size: number; ls: number; gap: [number, number]; pill: [number, number]; width: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));
  return (
    <p ref={ref} className="sans" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", alignContent: "center", rowGap: u(gap[0]), columnGap: u(gap[1]), width: u(width), ...t(size, 1.1, ls) }}>
      {TOKENS.map((tok, i) => <Word key={i} tok={tok} i={i} n={TOKENS.length} p={p} pill={pill} />)}
    </p>
  );
}

function Signature({ w, h }: { w: number; h: number }) {
  return (
    <motion.div
      style={{ width: u(w), height: u(h) }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 2.2, ease: EASE, delay: 0.3 }}
    >
      <img src="/home/signature.svg" alt="" style={{ width: "100%", height: "100%" }} />
    </motion.div>
  );
}

function LinkedIn() {
  return (
    <a href={LI} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", background: "var(--on-dark)", color: "var(--ink)", borderRadius: 99, padding: `${u(12)} ${u(20)}` }}>
      <span className="sans" style={{ ...t(15, 1.4), fontWeight: 500 }}>Connect on LinkedIn</span>
      <span className="mono pre" style={t(13, 1.4)}>{"  ↗"}</span>
    </a>
  );
}

export default function Statement() {
  return (
    <section data-label="(07) ABOUT" aria-label="About" style={{ color: "var(--on-dark)" }}>
      <div className="only-d sec" style={{ height: u(1117), background: "var(--night)" }}>
        <p className="mono abs" style={{ ...at(220, 210), ...t(12, 1.4, 0.24), color: "var(--muted)" }}>(07) ABOUT</p>
        <div style={at(220, 260)}><Sentence size={76} ls={-2.28} gap={[14, 20]} pill={[170, 88]} width={1290} /></div>
        <p className="abs" style={{ ...at(220, 787, 460), ...t(17, 1.5), color: "var(--muted)" }}>{SUB}</p>
        <div style={at(1201.37, 835.35)}><Signature w={432.3} h={96.07} /></div>
        <p className="mono abs" style={{ ...at(1672, 967), transform: "translateX(-100%)", textAlign: "right", whiteSpace: "nowrap", ...t(12, 1.4, 0.24) }}>DAVIDA DZATO<br />PRODUCT DESIGNER</p>
        <div style={at(220, 947)}><LinkedIn /></div>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--night)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)} ${u(T ? 104 : 72)}` }}>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted)" }}>(07) ABOUT</p>
            <div style={{ marginTop: u(28) }}>
              <Sentence size={T ? 46 : 34} ls={T ? -1.15 : -0.85} gap={[10, T ? 12 : 8]} pill={T ? [78, 39] : [58, 29]} width={T ? 754 : 390} />
            </div>
            <p style={{ ...t(T ? 17 : 16, 1.45), color: "var(--muted)", marginTop: u(28) }}>{SUB}</p>
            <div style={{ marginTop: u(28) }}><Signature w={T ? 320 : 240} h={T ? 69 : 52} /></div>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), marginTop: u(28) }}>DAVIDA DZATO<br />PRODUCT DESIGNER</p>
            <div style={{ marginTop: u(28) }}><LinkedIn /></div>
          </div>
        );
      })}
    </section>
  );
}
