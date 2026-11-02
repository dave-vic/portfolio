"use client";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { Pic, mono, shadow } from "./ui";

const RULE = "#bfbdb2", MUTED = "#6b6b66";

export default function Journey({ c }: { c: CaseData }) {
  const j = c.journey!;
  const n = j.rows.length;
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-journey`}>
      <div className="only-d sec" style={{ height: u(1336), background: "var(--bone)" }}>
        <p style={{ ...at(56, 120), ...mono(12, 6) }}>{j.label}</p>
        <Reveal style={at(56, 160, j.hw ?? 1000)}><h2 id={`${c.slug}-journey`} style={{ ...t(64, 1.05, -1.28), fontWeight: 400, margin: 0, whiteSpace: "pre-line" }}>{j.h}</h2></Reveal>
        <div role="list">
          {j.rows.map((r, i) => (
            <Reveal key={i} delay={i * 0.09} y={30} style={at(0, 360 + i * 118, 1120, 118)}>
              <div role="listitem">
                <div style={{ ...at(56, 0, 1060, 1), background: RULE }} />
                <p className="anton" style={{ ...at(56, 12, 260), ...t(84, 1), color: r.tc ?? "var(--ink)", whiteSpace: "nowrap" }}>{r.t}</p>
                <p style={{ ...at(330, 22, 200), ...mono(11, 6), color: MUTED }}>{r.who}</p>
                <h3 style={{ ...at(330, 42, 420), ...t(28, 1.1), fontWeight: 500, margin: 0 }}>{r.title}</h3>
                <p style={{ ...at(770, 24, 300), ...t(15, 1.4), color: MUTED }}>{r.body}</p>
                <p style={{ ...at(770, 82, 300), ...mono(11, 5), color: r.tagc ?? "var(--ink)" }}>{r.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ ...at(56, 360 + n * 118, 1060, 1), background: RULE }} />
        <Reveal delay={0.2} style={at(1202, 360, 470, 826)}>
          <Pic img={j.img} style={{ width: "100%", height: "100%", borderRadius: u(14), boxShadow: shadow(0.16) }} />
        </Reveal>
        <p style={{ ...at(1202, 1204, 470), ...mono(11, 5), color: MUTED }}>{j.cap}</p>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const iw = T ? 370 : 260;
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <p style={mono(11, 6, 1.4)}>{j.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -0.96 : -0.6), fontWeight: 400, margin: `${u(24)} 0 0`, whiteSpace: "pre-line" }}>{j.h}</h2>
            <div role="list" style={{ marginTop: u(24), borderTop: `1px solid #c9c7bd` }}>
              {j.rows.map((r, i) => (
                <Reveal key={i} delay={Math.min(i, 4) * 0.06} y={20} style={{ borderBottom: `1px solid #c9c7bd` }}>
                  <div role="listitem" style={{ display: "flex", gap: u(T ? 18 : 14), padding: `${u(T ? 16 : 14)} 0` }}>
                    <p className="anton" style={{ width: u(T ? 130 : 80), flex: "none", ...t(T ? 60 : 36, 0.95), color: r.tc ?? "var(--ink)" }}>{r.t}</p>
                    {T ? (
                      <>
                        <div style={{ width: u(220), flex: "none", display: "flex", flexDirection: "column", gap: u(6) }}>
                          <p style={{ ...mono(11, 6, 1.4), color: MUTED }}>{r.who}</p>
                          <h3 style={{ ...t(26, 1.25), fontWeight: 500, margin: 0 }}>{r.title}</h3>
                        </div>
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: u(8) }}>
                          <p style={{ ...t(15, 1.25), color: MUTED }}>{r.body}</p>
                          <p style={{ ...mono(11, 5, 1.4), color: r.tagc ?? "var(--ink)" }}>{r.tag}</p>
                        </div>
                      </>
                    ) : (
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: u(6) }}>
                        <p style={{ ...mono(11, 6, 1.4), color: MUTED }}>{r.who}</p>
                        <h3 style={{ ...t(20, 1.25), fontWeight: 500, margin: 0 }}>{r.title}</h3>
                        <p style={{ ...t(15, 1.25), color: MUTED }}>{r.body}</p>
                        <p style={{ ...mono(11, 5, 1.4), color: r.tagc ?? "var(--ink)" }}>{r.tag}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal style={{ display: "flex", justifyContent: "center", marginTop: u(24) }}>
              <Pic img={j.img} style={{ width: u(iw), height: u((iw * 826) / 470), borderRadius: u(T ? 11 : 7.7), boxShadow: shadow(0.16, 12, 32) }} />
            </Reveal>
            <p style={{ ...mono(11, 5, 1.4), color: MUTED, marginTop: u(24) }}>{j.cap}</p>
          </div>
        );
      })}
    </section>
  );
}
