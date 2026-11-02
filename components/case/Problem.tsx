"use client";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { Count, mono } from "./ui";

const BONE = "#eeebe4", BODY = "#bfbdb5";
const STAIR = [[56, 330], [620, 470], [1150, 610]];

export default function Problem({ c }: { c: CaseData }) {
  const p = c.problem!;
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-problem`} style={{ color: BONE }}>
      <div className="only-d sec" style={{ height: u(p.height), background: "var(--ink)" }}>
        <p style={{ ...at(56, 120), ...mono(12, 6) }}>{p.label}</p>
        <Reveal style={at(56, 160, 1200)}><h2 id={`${c.slug}-problem`} style={{ ...t(64, 1.05, -1.28), fontWeight: 400, margin: 0 }}>{p.h}</h2></Reveal>
        {p.nums.map((n, i) => (
          <Reveal key={i} delay={i * 0.15} y={80} style={at(STAIR[i][0], STAIR[i][1])}>
            <Count v={n.n} className="anton" style={{ display: "block", ...t(520, 0.85), color: n.color, whiteSpace: "nowrap" }} />
            <p style={{ position: "absolute", left: u(10), top: u(462), width: u(360), ...mono(13, 8), color: n.color }}>{n.label}</p>
          </Reveal>
        ))}
        {p.notes.map((n, i) => (
          <Reveal key={i} delay={0.3 + i * 0.15} y={24} style={at(n.x, n.y, n.w ?? 250)}>
            <p style={{ ...mono(11, 6), color: p.tagColor }}>{n.tag}</p>
            <p style={{ ...t(24, "normal"), fontWeight: 500, marginTop: u(10) }}>{n.title}</p>
            <p style={{ position: "absolute", top: u(90), width: "100%", ...t(15, 1.4), color: BODY }}>{n.body}</p>
          </Reveal>
        ))}
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--ink)", padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <p style={mono(11, 6, 1.4)}>{p.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -0.96 : -0.6), fontWeight: 400, margin: `${u(24)} 0 0` }}>{p.h}</h2>
            {p.nums.map((n, i) => (
              <div key={i}>
                <div style={{ height: 1, background: "#404040", marginTop: u(24) }} />
                <Reveal y={24} delay={i * 0.08} style={{ display: "flex", gap: u(T ? 24 : 16), marginTop: u(24) }}>
                  <div style={{ width: u(T ? 200 : 118), flex: "none" }}>
                    <Count v={n.n} className="anton" style={{ display: "block", ...t(T ? 170 : 104, 0.85), color: n.color }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: u(T ? 10 : 8), paddingTop: u(T ? 12 : 0), flex: 1, minWidth: 0 }}>
                    <p style={{ ...mono(11, 8, 1.4), color: n.color }}>{n.label}</p>
                    <p style={{ ...t(T ? 26 : 20, 1.25), fontWeight: 500 }}>{p.notes[i].title}</p>
                    <p style={{ ...t(T ? 16 : 15, 1.25), color: BODY }}>{p.notes[i].body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
