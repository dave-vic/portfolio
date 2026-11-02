"use client";
import { at, t, u } from "@/lib/u";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const CV = "/Davida-Dzato-CV.pdf";
const JOBS = [
  { years: "Sep 2026 – now", role: "UI/UX design consultant", company: "Nerdion Tech Solutions · Remote", did: "Lead designer on Loco, a business and POS platform for Tanzania: web, mobile and tablet, 300+ screens." },
  { years: "Now", role: "Product analyst consultant", company: "MojoPay", did: "Product reviews, PRD and requirements input, roadmap priorities and design improvements." },
  { years: "2026", role: "Product designer, independent", company: "Commercial bank, Ghana · NDA", did: "Treasury management system: user journeys, flows, a 42-part design system and 500+ screens." },
  { years: "May 2025 – now", role: "UI/UX designer", company: "Interactive Digital, Accra", did: "Court case management, an HR portal, MiSika USSD loans and Stanbic Bank campaigns." },
  { years: "Dec 2024 – now", role: "PM, Scrum Master & designer", company: "Cynteract, Germany · Remote", did: "Sprints for a distributed health-tech team: production bugs down 60%, on-time delivery up to 90%." },
  { years: "Dec 2024 – now", role: "Product designer", company: "Silver Rock Technologies, Accra", did: "Ghana Talent Hub, AfriPlay and Glo TV streaming, and Elysium Tours." },
  { years: "2023 – 2024", role: "Developer & product designer", company: "Volta River Authority, Accra", did: "National service: system documentation, Figma prototypes and PHP support." },
  { years: "2022 – 2023", role: "UI/UX designer", company: "Iota Digital Lab, USA · Remote", did: "Designed the whole BlaccBook app for finding and booking local businesses, now live on the App Store." },
];

const line = (extra: React.CSSProperties = {}): React.CSSProperties => ({ height: 1, background: "var(--ink)", ...extra });

export default function Experience() {
  return (
    <section data-label="(ABOUT) WHO I AM" aria-labelledby="exp-h">
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(1330), background: "var(--bone)" }}>
        <Reveal y={30} style={at(56, 170)}>
          <p className="mono" style={{ ...t(11, 1.4, 0.33) }}>(02) EXPERIENCE</p>
        </Reveal>
        <Reveal y={50} delay={0.05} style={at(56, 200)}>
          <h2 id="exp-h" className="sans nowrap" style={{ ...t(64, 1.05, -1.92), fontWeight: 400, margin: 0 }}>Where I’ve worked.</h2>
        </Reveal>
        <a href={CV} download className="mono abs pre navlink" style={{ ...at(1575, 230), ...t(11, 1.4, 0.33), color: "var(--laterite)" }}>{`DOWNLOAD CV  ↓`}</a>

        <StaggerGroup style={{ position: "absolute", inset: 0 }} gap={0.07} amount={0.2}>
          <StaggerItem kind="fade" style={{ position: "absolute", inset: 0 }}>
            {[["YEARS", 56], ["ROLE", 300], ["COMPANY", 760], ["WHAT I DID", 1100]].map(([l, x]) => (
              <p key={l} className="mono abs" style={{ ...at(x as number, 380), ...t(11, 1.4, 0.33), color: "var(--muted-small)" }}>{l}</p>
            ))}
            <div style={{ ...at(56, 410, 1616), ...line() }} />
          </StaggerItem>
          {JOBS.map((j, i) => (
            <StaggerItem key={i} style={at(56, 438 + i * 104, 1616, 104)}>
              <p className="mono abs" style={{ ...at(0, 0, 300), ...t(11, 1.45, 0.33) }}>{j.years}</p>
              <p className="sans abs" style={{ ...at(244, 0, 420), ...t(22, 1.45, -0.11), fontWeight: 500 }}>{j.role}</p>
              <p className="sans abs" style={{ ...at(704, 0, 300), ...t(16, 1.45) }}>{j.company}</p>
              <p className="sans abs" style={{ ...at(1044, 0, 560), ...t(16, 1.45), color: "var(--ink-2)" }}>{j.did}</p>
              <div style={{ ...at(0, 76, 1616), ...line() }} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: u(36) }}>
              <Reveal y={30} style={{ display: "flex", flexDirection: "column", gap: u(14) }}>
                <p className="mono" style={t(11, 1.5, 0.33)}>(02) EXPERIENCE</p>
                <p className="sans" style={{ ...t(T ? 64 : 40, 1.05, T ? -1.92 : -1.2) }}>Where I’ve worked.</p>
              </Reveal>
              <a href={CV} download className="mono pre" style={{ ...t(11, 1.5, 0.33), color: "var(--laterite)", flex: "none" }}>{`CV  ↓`}</a>
            </div>
            <StaggerGroup gap={0.06} amount={0.05}>
              <div style={line()} />
              {JOBS.map((j, i) => (
                <StaggerItem key={i}>
                  {T ? (
                    <div style={{ display: "flex", gap: u(24), padding: `${u(22)} 0` }}>
                      <div className="mono" style={{ width: u(220), flex: "none", display: "flex", flexDirection: "column", gap: u(8), ...t(11, 1.5, 0.33) }}>
                        <p style={{ color: "var(--muted-small)" }}>{j.years}</p>
                        <p>{j.company}</p>
                      </div>
                      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: u(8) }}>
                        <p style={{ ...t(22, 1.25, -0.11), fontWeight: 500 }}>{j.role}</p>
                        <p style={{ ...t(17, 1.45), color: "var(--ink-2)" }}>{j.did}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: u(8), padding: `${u(22)} 0` }}>
                      <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)" }}>{j.years}</p>
                      <p style={{ ...t(20, 1.25, -0.1), fontWeight: 500 }}>{j.role}</p>
                      <p className="mono" style={t(11, 1.5, 0.33)}>{j.company}</p>
                      <p style={{ ...t(16, 1.45), color: "var(--ink-2)" }}>{j.did}</p>
                    </div>
                  )}
                  <div style={line()} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        );
      })}
    </section>
  );
}
