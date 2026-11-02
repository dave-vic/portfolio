"use client";
import { motion } from "motion/react";
import { useIntroDone } from "@/lib/intro";
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
function Bracket({ w, h, play }: { w: number; h: number; play: boolean }) {
  return (
    <motion.span
      aria-hidden
      style={{ display: "block", position: "relative", height: u(h), overflow: "hidden", flex: "none" }}
      initial={{ width: u(w * 0.3) }}
      animate={{ width: play ? u(w) : u(w * 0.3) }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
    >
      <img decoding="async" src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", width: u(w * 2.5), height: u(h * 2.8571), left: u(-w * 1.05), top: u(-h * 1.3857) }} />
    </motion.span>
  );
}

/** a headline line that comes into focus (blurred → sharp), one after another */
function Line({ children, i, style, play }: { children: React.ReactNode; i: number; style?: React.CSSProperties; play: boolean }) {
  const hide = { opacity: 0, filter: "blur(18px)" };
  return (
    <motion.span
      style={{ display: "flex", alignItems: "center", ...style }}
      initial={hide}
      animate={play ? { opacity: 1, filter: "blur(0px)" } : hide}
      transition={{ duration: 1.1, ease: EASE, delay: 0.05 + i * 0.28 }}
    >
      {children}
    </motion.span>
  );
}

function Fade({ children, play, delay, style }: { children: React.ReactNode; play: boolean; delay: number; style?: React.CSSProperties }) {
  return (
    <motion.span style={style} initial={{ opacity: 0, y: 10 }} animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.8, ease: EASE, delay }}>
      {children}
    </motion.span>
  );
}

function Strip({ cols, pad }: { cols: number; pad: "d" | "f" }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, columnGap: pad === "f" ? u(16) : 0, rowGap: u(18) }}>
      {SECTORS.map(([a, b], i) => (
        <div key={a} className="mono" style={pad === "d" ? { padding: `${u(14)} ${u(16)} ${u(14)} ${i ? u(16) : 0}`, borderLeft: i ? "1px solid var(--line)" : "none", display: "grid", gap: u(4) } : { display: "grid", gap: u(4) }}>
          <span style={{ ...t(11, 1.4, 0.33), color: "var(--muted-small)", display: "flex", alignItems: "center", gap: u(8) }}>
            {i === 0 && <img decoding="async" src="/home/dot-rust.svg" alt="" style={{ width: u(6), height: u(6) }} />}{a}
          </span>
          <span style={{ ...t(11, 1.4, 0.33) }}>{b}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const play = useIntroDone();
  const big = { fontSize: u(236), lineHeight: 1, letterSpacing: u(-2.36) };
  return (
    <section data-label="(01) INDEX" aria-label="Introduction">
      {/* desktop 1728 × 1117 */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        <h1 className="anton" style={{ ...at(103, 201), display: "flex", flexDirection: "column", alignItems: "center", margin: 0, fontWeight: 400 }}>
          <Line play={play} i={0} style={{ marginBottom: u(-6) }}>
            <Fade play={play} delay={1.05} style={{ ...t(21, 1.1), fontStyle: "italic", textAlign: "right", marginRight: u(28), fontFamily: "var(--f-serif)" }}>Accra,<br />2026</Fade>
            <span className="nowrap" style={big}>I BUILD</span>
          </Line>
          <Line play={play} i={1} style={{ marginBottom: u(-6) }}>
            <span className="nowrap" style={big}>*(</span>
            <span style={{ width: u(10) }} />
            <Bracket play={play} w={360} h={210} />
            <span style={{ width: u(10) }} />
            <span className="nowrap" style={big}>)</span>
            <span style={{ width: u(34) }} />
            <span className="nowrap" style={big}>PRODUCTS</span>
          </Line>
          <Line play={play} i={2}>
            <span className="nowrap" style={big}>THAT WORK.</span>
            <Fade play={play} delay={1.15} style={{ ...t(21, 1.1), fontStyle: "italic", marginLeft: u(28), fontFamily: "var(--f-serif)" }}>Product designer<br />for complex products<br />with many kinds of users</Fade>
          </Line>
        </h1>
        <motion.div style={{ ...at(56, 1014, 1616), borderTop: "1px solid var(--ink)" }} initial={{ opacity: 0 }} animate={{ opacity: play ? 1 : 0 }} transition={{ duration: 0.9, delay: 1.3 }}>
          <Strip cols={6} pad="d" />
        </motion.div>
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
              <Line play={play} i={0}><span className="nowrap" style={B}>I BUILD</span></Line>
              <Line play={play} i={1}>
                <span className="nowrap" style={B}>*(</span>
                <span style={{ width: u(6) }} />
                <Bracket play={play} w={img[0]} h={img[1]} />
                <span style={{ width: u(6) }} />
                <span className="nowrap" style={B}>)</span>
                {T && <><span style={{ width: u(7) }} /><span className="nowrap" style={B}>PRODUCTS</span></>}
              </Line>
              {!T && <Line play={play} i={2}><span className="nowrap" style={B}>PRODUCTS</span></Line>}
              <Line play={play} i={3}><span className="nowrap" style={B}>THAT WORK.</span></Line>
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
