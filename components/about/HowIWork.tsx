"use client";
import { at, t, u } from "@/lib/u";
import Reveal from "@/components/Reveal";
import Blur from "@/components/Blur";
import { StaggerGroup, StaggerItem } from "./Stagger";

const STEPS = [
  { n: "01", h: "Start where the work happens", p: "The court registry, the shop counter, the spreadsheet nobody trusts. I go there first." },
  { n: "02", h: "Write it down", p: "A PRD the business can sign, with IDs every screen can trace back to." },
  { n: "03", h: "Design the exceptions first", p: "Blocked, expired, returned, timed out. Get those right and the happy path is easy." },
  { n: "04", h: "AI for speed, me for judgment", p: "I use AI to research, draft and prototype faster, and I own every decision that ships." },
];

/** big number slides up out of a mask */
function Num({ n, size }: { n: string; size: number }) {
  return (
    <div style={{ overflow: "hidden", height: u(size * 1.06), marginBottom: u(-size * 0.06) }}>
      <StaggerItem kind="mask" as="p" className="anton" style={{ ...t(size, 1), color: "var(--peach)", whiteSpace: "nowrap" }}>{n}</StaggerItem>
    </div>
  );
}

export default function HowIWork() {
  return (
    <section data-label="(ABOUT) WHO I AM" aria-labelledby="how-h" style={{ color: "var(--on-dark)" }}>
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(1000), background: "var(--ink)" }}>
        <Reveal y={30} style={at(56, 170)}>
          <p className="mono" style={{ ...t(11, 1.4, 0.33), color: "var(--muted)" }}>(03) HOW I WORK</p>
        </Reveal>
        <Blur as="div" y={20} delay={0.05} style={at(56, 200)}>
          <h2 id="how-h" className="sans nowrap" style={{ ...t(64, 1.4, -1.92), fontWeight: 400, margin: 0 }}>Four things I always do.</h2>
        </Blur>
        <StaggerGroup style={{ position: "absolute", inset: 0 }} gap={0.12} amount={0.3}>
          {STEPS.map((s, i) => (
            <div key={s.n} style={at(56 + i * 412, 460, 380)}>
              <Num n={s.n} size={120} />
              <StaggerItem kind="fade">
                <p style={{ ...t(24, 1.2, -0.12), fontWeight: 500, marginTop: u(40) }}>{s.h}</p>
                <p style={{ ...t(16, 1.5), color: "var(--muted)", marginTop: u(41) }}>{s.p}</p>
              </StaggerItem>
            </div>
          ))}
        </StaggerGroup>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--ink)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)}`, display: "flex", flexDirection: "column", gap: u(T ? 36 : 28) }}>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted)" }}>(03) HOW I WORK</p>
            <Reveal y={30}><p style={{ ...t(T ? 64 : 40, 1.05, T ? -1.92 : -1.2) }}>Four things I always do.</p></Reveal>
            <StaggerGroup gap={0.1} amount={0.15} style={{ display: "grid", gridTemplateColumns: T ? "1fr 1fr" : "1fr", columnGap: u(32), rowGap: u(T ? 40 : 32) }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: u(10) }}>
                  <Num n={s.n} size={T ? 96 : 72} />
                  <StaggerItem kind="fade" style={{ display: "flex", flexDirection: "column", gap: u(10) }}>
                    <p style={{ ...t(22, 1.2, -0.11), fontWeight: 500 }}>{s.h}</p>
                    <p style={{ ...t(T ? 17 : 16, 1.45), color: "var(--muted)" }}>{s.p}</p>
                  </StaggerItem>
                </div>
              ))}
            </StaggerGroup>
          </div>
        );
      })}
    </section>
  );
}
