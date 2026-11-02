"use client";
import { motion } from "motion/react";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const SECTORS = [
  ["OPEN TO REMOTE ROLES", "ACCRA · GMT+0"],
  ["GOVTECH", "COURTS · 9 ROLES"],
  ["BUSINESS SAAS", "POS · 300+ SCREENS"],
  ["FINTECH", "BANKING · 14 ROLES"],
  ["EDTECH", "TALENT HUB · 5 USERS"],
  ["NEXT", "SCROLL ↓"],
];

/** The photo inside the brackets: same crop as Figma, grows open on load */
function Bracket({ w, h }: { w: number; h: number }) {
  return (
    <motion.span
      aria-hidden
      style={{ display: "block", position: "relative", height: u(h), overflow: "hidden", flex: "none" }}
      initial={{ width: u(w * 0.12) }}
      animate={{ width: u(w) }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
    >
      <img src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", width: u(w * 2.5), height: u(h * 2.8571), left: u(-w * 1.05), top: u(-h * 1.3857) }} />
    </motion.span>
  );
}

function Line({ children, i, style }: { children: React.ReactNode; i: number; style?: React.CSSProperties }) {
  return (
    <span style={{ display: "block", overflow: "hidden", ...style }}>
      <motion.span
        style={{ display: "flex", alignItems: "center" }}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Strip({ cols, pad }: { cols: number; pad: "d" | "f" }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, columnGap: pad === "f" ? u(16) : 0, rowGap: u(18) }}>
      {SECTORS.map(([a, b], i) => (
        <div key={a} className="mono" style={pad === "d" ? { padding: `${u(14)} ${u(16)} ${u(14)} ${i ? u(16) : 0}`, borderLeft: i ? "1px solid var(--line)" : "none", display: "grid", gap: u(4) } : { display: "grid", gap: u(4) }}>
          <span style={{ ...t(11, 1.4, 0.33), color: "var(--muted-small)", display: "flex", alignItems: "center", gap: u(8) }}>
            {i === 0 && <img src="/home/dot-rust.svg" alt="" style={{ width: u(6), height: u(6) }} />}{a}
          </span>
          <span style={{ ...t(11, 1.4, 0.33) }}>{b}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const big = { fontSize: u(236), lineHeight: 1, letterSpacing: u(-2.36) };
  return (
    <section data-label="(01) INDEX" aria-label="Introduction">
      {/* desktop 1728 × 1117 */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        <h1 className="anton" style={{ ...at(103, 201), display: "flex", flexDirection: "column", alignItems: "center", margin: 0, fontWeight: 400 }}>
          <Line i={0} style={{ marginBottom: u(-6) }}>
            <span className="serif" style={{ ...t(21, 1.1), fontStyle: "italic", textAlign: "right", marginRight: u(28) }}>Accra,<br />2026</span>
            <span className="nowrap" style={big}>I BUILD</span>
          </Line>
          <Line i={1} style={{ marginBottom: u(-6) }}>
            <span className="nowrap" style={big}>*(</span>
            <span style={{ width: u(10) }} />
            <Bracket w={360} h={210} />
            <span style={{ width: u(10) }} />
            <span className="nowrap" style={big}>)</span>
            <span style={{ width: u(34) }} />
            <span className="nowrap" style={big}>PRODUCTS</span>
          </Line>
          <Line i={2}>
            <span className="nowrap" style={big}>THAT WORK.</span>
            <span className="serif" style={{ ...t(21, 1.1), fontStyle: "italic", marginLeft: u(28) }}>Product designer<br />for complex products<br />with many kinds of users</span>
          </Line>
        </h1>
        <div style={{ ...at(56, 1014, 1616), borderTop: "1px solid var(--ink)" }}>
          <Strip cols={6} pad="d" />
        </div>
      </div>

      {/* tablet 834 and mobile 430 */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const P = T ? 40 : 20, size = T ? 115.9 : 89.1, img = T ? [177, 103] : [136, 79];
        const B = { fontSize: u(size), lineHeight: 0.92 };
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 72 + 66 : 40 + 71)} ${u(P)} ${u(28)}` }}>
            <p className="mono" style={t(11, 1.5, 0.33)}>(01) INDEX</p>
            <p className="serif" style={{ ...t(15), fontStyle: "italic", marginTop: u(18) }}>Accra, 2026</p>
            <h1 className="anton" style={{ margin: `${u(18)} 0 0`, fontWeight: 400 }}>
              <Line i={0}><span className="nowrap" style={B}>I BUILD</span></Line>
              <Line i={1}>
                <span className="nowrap" style={B}>*(</span>
                <span style={{ width: u(6) }} />
                <Bracket w={img[0]} h={img[1]} />
                <span style={{ width: u(6) }} />
                <span className="nowrap" style={B}>)</span>
                {T && <><span style={{ width: u(7) }} /><span className="nowrap" style={B}>PRODUCTS</span></>}
              </Line>
              {!T && <Line i={2}><span className="nowrap" style={B}>PRODUCTS</span></Line>}
              <Line i={3}><span className="nowrap" style={B}>THAT WORK.</span></Line>
            </h1>
            <p className="serif" style={{ ...t(T ? 18 : 16, 1.3), fontStyle: "italic", marginTop: u(18), width: u(T ? 300 : 262) }}>
              Product designer for complex products with many kinds of users
            </p>
            <div style={{ height: u(T ? 48 : 24), marginTop: u(18) }} />
            <div style={{ borderTop: "1px solid var(--ink)", marginTop: u(18), paddingTop: u(18) }}>
              <Strip cols={T ? 3 : 2} pad="f" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
