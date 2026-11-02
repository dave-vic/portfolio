"use client";
import { at, t, u } from "@/lib/u";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const COLS = [
  { h: "PRODUCT", items: ["PRDs and specs", "Roadmaps", "Prioritisation", "Stakeholder updates"] },
  { h: "ANALYSIS", items: ["Interviews", "Process maps", "Journey maps", "Competitor benchmarks"] },
  { h: "DESIGN", items: ["Figma and FigJam", "Design systems", "Prototyping", "Accessibility (WCAG)"] },
  { h: "BUSINESS", items: ["Business cases", "Pitches and pricing", "Partnerships", "Go-to-market"] },
  { h: "AI", items: ["Claude and ChatGPT", "Research synthesis", "Building apps with AI", "AI features in products"] },
];
const SUB = "Methods and tools I use on real projects.";

export default function Toolbox() {
  return (
    <section data-label="(ABOUT) WHO I AM" aria-labelledby="tool-h">
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(900), background: "var(--bone)" }}>
        <Reveal y={30} style={at(56, 170)}>
          <p className="mono" style={t(11, 1.4, 0.33)}>(04) TOOLBOX</p>
        </Reveal>
        <Reveal y={50} delay={0.05} style={at(56, 200)}>
          <h2 id="tool-h" className="sans nowrap" style={{ ...t(64, 1.4, -1.92), fontWeight: 400, margin: 0 }}>What I work with.</h2>
        </Reveal>
        <Reveal y={20} delay={0.15} style={at(56, 290)}>
          <p className="serif nowrap" style={{ ...t(17, 1.4), fontStyle: "italic", color: "var(--muted-small)" }}>{SUB}</p>
        </Reveal>
        <StaggerGroup style={{ position: "absolute", inset: 0 }} gap={0.1} amount={0.3}>
          {COLS.map((c, i) => (
            <StaggerItem key={c.h} kind="fade" style={at(56 + i * 328.8, 420, 300.8)}>
              <div style={{ height: 1, background: "var(--ink)" }} />
              <p className="mono" style={{ ...t(11, 1.4, 0.33), color: "var(--laterite)", marginTop: u(19) }}>{c.h}</p>
              <ul style={{ listStyle: "none", margin: `${u(21)} 0 0`, padding: 0, ...t(18, 1.7) }}>
                {c.items.map((x) => <li key={x} className="nowrap">{x}</li>)}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)}`, display: "flex", flexDirection: "column", gap: u(T ? 36 : 28) }}>
            <p className="mono" style={t(11, 1.5, 0.33)}>(04) TOOLBOX</p>
            <Reveal y={30}><p style={t(T ? 64 : 40, 1.05, T ? -1.92 : -1.2)}>What I work with.</p></Reveal>
            <p className="serif" style={{ ...t(16, "normal"), fontStyle: "italic", color: "var(--muted-small)" }}>{SUB}</p>
            <StaggerGroup gap={0.08} amount={0.15} style={{ display: "grid", gridTemplateColumns: `repeat(${T ? 3 : 2}, ${u(T ? 238 : 185)})`, columnGap: u(20), rowGap: u(32) }}>
              {COLS.map((c) => (
                <StaggerItem key={c.h} kind="fade" style={{ display: "flex", flexDirection: "column", gap: u(12) }}>
                  <div style={{ height: 1, background: "var(--ink)" }} />
                  <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--laterite)" }}>{c.h}</p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, ...t(16, 1.7) }}>
                    {c.items.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        );
      })}
    </section>
  );
}
