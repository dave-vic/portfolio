"use client";
import { motion } from "motion/react";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const HEAD = "I sit where the business, the users and the developers meet.";
const BODY =
  "I take products from the business case to tested, developer-ready design, remotely with teams in the US and Germany since 2022. I use AI to move faster, and I stay accountable for every decision that ships.";
const GRAD = "radial-gradient(57% 45% at 29% 55%, #EDEBE3 0%, #73706B 35%, #141414 100%)";

function Name({ size }: { size: number }) {
  return (
    <p className="sans" style={{ ...t(size, 1.05), fontWeight: 500, color: "var(--ink)" }}>
      <span style={{ color: "var(--laterite)" }}>D</span>AVIDA<br />
      <span style={{ color: "var(--laterite)" }}>D</span>ZATO<br />
      <span style={{ color: "var(--laterite)" }}>P</span>ORTFOLIO
    </p>
  );
}

/** panels slide in diagonally, as in the motion video */
function Slide({ from, delay = 0, style, children }: { from: "l" | "r"; delay?: number; style: React.CSSProperties; children?: React.ReactNode }) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, x: from === "l" ? -80 : 80, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const Dots = ({ y, x, set }: { y: number; x: number; set: string[] }) => (
  <>{set.map((s, i) => <img decoding="async" key={i} src={`/home/${s}`} alt="" style={{ ...at(x + i * 22, y, 9, 9) }} />)}</>
);

export default function AboutIntro() {
  return (
    <section data-label="(ABOUT) WHO I AM" aria-label="About Davida">
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--ink)" }}>
        <Slide from="l" style={{ ...at(12, 12, 1006.74, 537) }}><img decoding="async" src="/home/panel-identity.svg" alt="" style={{ width: "100%", height: "100%" }} /></Slide>
        <Slide from="r" delay={0.1} style={{ ...at(753.49, 12, 962.55, 537) }}><img decoding="async" src="/about/intro-panel.webp" alt="Davida Dzato in Accra" style={{ width: "100%", height: "100%" }} /></Slide>
        <Slide from="l" delay={0.2} style={{ ...at(12, 563, 665.05, 542) }}><img decoding="async" src="/home/panel-gradient.svg" alt="" style={{ width: "100%", height: "100%" }} /></Slide>
        <Slide from="r" delay={0.3} style={{ ...at(408.73, 563, 1307.25, 542) }}><img decoding="async" src="/home/panel-text.svg" alt="" style={{ width: "100%", height: "100%" }} /></Slide>

        {[70, 118, 166, 214].map((y) => <p key={y} className="mono abs" style={{ ...at(56, y), ...t(20, 1) }}>+</p>)}
        <img decoding="async" src="/home/mark.svg" alt="" style={at(150, 70, 100, 100)} />
        <div style={at(290, 64)}><Name size={44} /></div>
        <p className="mono abs pre" style={{ ...at(56, 440), ...t(12, 1.7, 0.24) }}>{`ROLE :       Product design · PM · Analysis · BD · AI\nBASED :      Accra, Ghana`}</p>
        <Dots x={1240} y={34} set={["i-e0.svg", "i-e1.svg", "i-e2.svg"]} />

        <p className="abs" style={{ ...at(56, 600), ...t(14, 1.4), color: "var(--on-dark)" }}>Product design · PM<br />Analysis · AI</p>
        <p className="abs" style={{ ...at(615, 600), ...t(14, 1.4), color: "var(--on-dark)", transform: "translateX(-100%)", textAlign: "right", whiteSpace: "nowrap" }}>Designing<br />since 2022</p>
        <div style={{ ...at(12, 680, 560, 1), background: "var(--on-dark)" }} />

        <p className="abs" style={{ ...at(980, 640, 640), ...t(34, 1.15, -0.51) }}>{HEAD}</p>
        <p className="abs" style={{ ...at(980, 746, 640), ...t(17, 1.55) }}>{BODY}</p>
        {[680, 724, 768, 812, 856, 900, 944].map((y) => <p key={y} className="mono abs" style={{ ...at(1660, y), ...t(18, 1) }}>+</p>)}
        <p className="mono abs" style={{ ...at(1300, 1010), ...t(12, 1.7, 0.24) }}>OPEN TO :<br />BASED :</p>
        <p className="mono abs" style={{ ...at(1500, 1010), ...t(12, 1.7, 0.24) }}>Remote, full-time<br />Accra, GMT</p>
        <Dots x={1200} y={1072} set={["i-e3.svg", "i-e4.svg", "i-e2.svg"]} />
      </div>

      {/* tablet (2 × 2) and mobile (stacked) */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const card = (h: number): React.CSSProperties => ({ position: "relative", borderRadius: u(28), overflow: "hidden", height: u(h) });
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--ink)", padding: u(10) }}>
            <div style={{ display: "grid", gridTemplateColumns: T ? "1fr 1fr" : "1fr", gap: u(8) }}>
              <Slide from="l" style={{ ...card(T ? 380 : 204), background: "var(--bone)", padding: u(26), display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: u(18) }}>
                  <img decoding="async" src="/home/mark.svg" alt="" style={{ width: u(64), height: u(64) }} />
                  <Name size={T ? 34 : 30} />
                </div>
                <p className="mono pre" style={{ ...t(11, 1.5, 0.33) }}>{`ROLE :    Product design · PM\n          Analysis · BD · AI\nBASED :   Accra, Ghana`}</p>
              </Slide>
              <Slide from="r" delay={0.1} style={{ ...card(T ? 380 : 300) }}>
                <img decoding="async" src="/about/intro-photo.jpg" alt="Davida Dzato in Accra" style={{ position: "absolute", width: "130%", height: T ? "183.82%" : "236.89%", left: "-17.6%", top: T ? "-28.02%" : "-47.65%" }} />
              </Slide>
              <Slide from="l" delay={0.15} style={{ ...card(T ? 380 : 220), background: GRAD, padding: u(26) }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--on-dark)", ...t(13, 1.4) }}>
                  <p>Product design · PM<br />Analysis · AI</p>
                  <p style={{ textAlign: "right" }}>Designing<br />since 2022</p>
                </div>
              </Slide>
              <Slide from="r" delay={0.2} style={{ ...card(T ? 380 : 302), height: "auto", minHeight: u(T ? 380 : 302), background: "var(--bone)", padding: u(26), display: "flex", flexDirection: "column", gap: u(16) }}>
                <p style={{ ...t(T ? 22 : 20, 1.2, -0.3) }}>{HEAD}</p>
                <p style={{ ...t(T ? 16 : 15, 1.45), color: "var(--ink-2)" }}>{BODY}</p>
                <p className="mono pre" style={{ ...t(11, 1.5, 0.33), marginTop: "auto" }}>{`OPEN TO :   Remote, full-time\nBASED :     Accra, GMT`}</p>
              </Slide>
            </div>
          </div>
        );
      })}
    </section>
  );
}
