"use client";
import { at, t, u } from "@/lib/u";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/about/Stagger";

type Exp = {
  n: string; title: string; meta: string; body: string; note?: string; tags: string;
  href?: string; img?: string; alt?: string; medium?: boolean;
  // desktop offsets from the row's top rule (Figma)
  d: { meta: number; tags: number };
};
const MEDIUM_URL = "https://medium.com/@davidadzato45/i-hadnt-written-code-in-years-this-week-i-shipped-an-ai-agent-594e355bcbaa";
const EXPS: Exp[] = [
  {
    n: "01", title: "Signal, an AI feedback agent", meta: "LIVE · SIGNAL-FEEDBACK-AGENT.VERCEL.APP", href: "https://signal-feedback-agent.vercel.app",
    img: "/lab/exp-signal.webp", alt: "Signal upload screen: drop in raw feedback, get back a prioritised roadmap",
    body: "Drop in a CSV of app reviews, support tickets and survey comments. Signal sorts them into themes and drafts tickets, each linked to the comments behind it. 190 comments became 8 themes and 5 tickets.",
    note: "The hard part was not the clustering. It was keeping a person in charge, so nothing ships without the approval queue.",
    tags: "[ AGENT ]  [ APPROVAL QUEUE ]  [ PRODUCT OPS ]", d: { meta: 128, tags: 250 },
  },
  {
    n: "02", title: "VoiceScript", meta: "LIVE · VOICESCRIPT-WEB.ONRENDER.COM", href: "https://voicescript-web.onrender.com",
    img: "/lab/exp-voicescript.webp", alt: "VoiceScript upload screen with language and output options",
    body: "Audio or video in, a transcript or formatted meeting notes out, in 25 languages including Twi, Hausa, Swahili and Yoruba, with speaker labels and text to speech.",
    note: "Built with Claude and ChatGPT, deployed on Render.",
    tags: "[ SPEECH TO TEXT ]  [ 25 LANGUAGES ]  [ .DOCX ]", d: { meta: 91, tags: 250 },
  },
  {
    n: "03", title: "ORAD document workspace", meta: "CONCEPT · NOT IN USE",
    img: "/lab/exp-orad.webp", alt: "ORAD document workspace with folders and an access-controlled document list",
    body: "A role-based document workspace concept for GhIPSS: folders for procedures and manuals, admin, member and viewer access, access requests and an activity log.",
    note: "Built with Claude and ChatGPT, deployed on Render.",
    tags: "[ ACCESS CONTROL ]  [ CONCEPT ]", d: { meta: 128, tags: 250 },
  },
  {
    n: "04", title: "I hadn’t written code in years. This week I shipped an AI agent.", meta: "ARTICLE · MEDIUM · @DAVIDADZATO45", href: MEDIUM_URL, medium: true,
    body: "What it was like to go from designing products to building and shipping a working AI agent myself.",
    tags: "[ WRITING ]  [ AI ]  [ READ ON MEDIUM ↗ ]", d: { meta: 165, tags: 140 },
  },
];

/** wraps in an external link when the experiment has one */
function L({ e, children, style, label }: { e: Exp; children: React.ReactNode; style?: React.CSSProperties; label?: string }) {
  if (!e.href) return <div style={style}>{children}</div>;
  return <a href={e.href} target="_blank" rel="noopener" aria-label={label} className="exp-link" style={{ display: "block", ...style }}>{children}</a>;
}

function Cover({ e, radius = 6, mediumSize }: { e: Exp; radius?: number; mediumSize: number }) {
  if (e.medium) {
    return (
      <div style={{ width: "100%", height: "100%", borderRadius: u(radius), background: "#1a1a18", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <span className="sans exp-zoom" style={{ ...t(mediumSize, 1.4, -mediumSize * 0.03), color: "#eeebe4" }}>Medium</span>
      </div>
    );
  }
  return (
    <div style={{ width: "100%", height: "100%", borderRadius: u(radius), border: "1px solid #c9c7bd", overflow: "hidden" }}>
      <img loading="lazy" decoding="async" src={e.img} alt={e.alt} className="exp-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

const mono = (c = "var(--muted-small)"): React.CSSProperties => ({ ...t(11, 1.4, 0.33), color: c });
const TAIL = "More experiments when they’re worth writing about.";

export default function Experiments() {
  return (
    <section id="experiments" data-label="(LAB) EXPERIMENTS" aria-labelledby="exp-h" style={{ scrollMarginTop: 0 }}>
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(2120), background: "var(--bone)" }}>
        <Reveal y={30} style={at(56, 170)}><p className="mono" style={mono("var(--ink)")}>(01) EXPERIMENTS</p></Reveal>
        <Reveal y={50} delay={0.05} style={at(56, 200)}>
          <h2 id="exp-h" className="sans nowrap" style={{ ...t(64, 1.4, -1.92), fontWeight: 400, margin: 0 }}>Three AI products I built, and an article about it.</h2>
        </Reveal>
        {EXPS.map((e, i) => {
          const y = 360 + i * 420;
          return (
            <StaggerGroup key={e.n} style={{ ...at(56, y, 1616, 420) }} gap={0.08} amount={0.25}>
              <StaggerItem kind="fade" style={{ ...at(0, 0, 1616), height: 1, background: "var(--ink)" }} />
              <StaggerItem style={{ position: "absolute", inset: 0 }}>
                <p className="mono abs" style={{ ...at(0, 36), ...mono("var(--laterite)") }}>{e.n}</p>
                <L e={e} label={`${e.title} (opens in a new tab)`} style={at(54, 36, 440, 264)}><Cover e={e} mediumSize={64} /></L>
              </StaggerItem>
              <StaggerItem style={{ position: "absolute", inset: 0 }}>
                <L e={e} style={at(538, 30, 400)}>
                  <h3 className="sans" style={{ ...t(34, 1.1, -0.51), fontWeight: 500, margin: 0 }}>{e.title}</h3>
                </L>
                <p className="mono abs nowrap" style={{ ...at(538, e.d.meta), ...mono() }}>{e.meta}</p>
              </StaggerItem>
              <StaggerItem style={{ position: "absolute", inset: 0 }}>
                <p className="abs" style={{ ...at(944, 32, 560), ...t(17, 1.55), color: "var(--ink-2)" }}>{e.body}</p>
                {e.note && <p className="serif abs" style={{ ...at(944, 160, 560), ...t(18, 1.45), fontStyle: "italic" }}>{e.note}</p>}
                {e.medium
                  ? <a href={e.href} target="_blank" rel="noopener" className="mono abs pre exp-tag" style={{ ...at(944, e.d.tags), ...mono() }}>{e.tags}</a>
                  : <p className="mono abs pre" style={{ ...at(944, e.d.tags), ...mono() }}>{e.tags}</p>}
              </StaggerItem>
            </StaggerGroup>
          );
        })}
        <Reveal y={20} style={{ ...at(56, 2040, 1616) }}>
          <div style={{ height: 1, background: "var(--ink)" }} />
          <p className="serif nowrap" style={{ ...t(18, 1.4), fontStyle: "italic", marginTop: u(39) }}>{TAIL}</p>
        </Reveal>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)}` }}>
            <Reveal y={30} style={{ display: "flex", flexDirection: "column", gap: u(14), paddingBottom: u(36) }}>
              <p className="mono" style={{ ...t(11, 1.5, 0.33) }}>(01) EXPERIMENTS</p>
              <p style={t(T ? 64 : 40, 1.05, T ? -1.92 : -1.2)}>Three AI products I built, and an article about it.</p>
            </Reveal>
            <div style={{ height: 1, background: "var(--ink)" }} />
            {EXPS.map((e) => (
              <StaggerGroup key={e.n} gap={0.1} amount={0.2}>
                <div style={{ display: "flex", flexDirection: T ? "row" : "column", gap: u(T ? 28 : 14), padding: `${u(28)} 0` }}>
                  <StaggerItem style={{ width: T ? u(300) : "100%", height: u(T ? 220 : 242), flex: "none" }}>
                    <L e={e} label={`${e.title} (opens in a new tab)`} style={{ width: "100%", height: "100%" }}><Cover e={e} mediumSize={T ? 44 : 48} /></L>
                  </StaggerItem>
                  <StaggerItem style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: u(12) }}>
                    <div style={{ display: "flex", gap: u(12), alignItems: "flex-start" }}>
                      <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--laterite)", flex: "none" }}>{e.n}</p>
                      <L e={e} style={{ flex: 1, minWidth: 0 }}>
                        <h3 className="sans" style={{ ...t(T ? 30 : 26, 1.12, T ? -0.36 : -0.31), fontWeight: 500, margin: 0 }}>{e.title}</h3>
                      </L>
                    </div>
                    <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", overflowWrap: "anywhere" }}>{e.meta}</p>
                    <p style={{ ...t(T ? 17 : 16, 1.45), color: "var(--ink-2)" }}>{e.body}</p>
                    {e.note && <p className="serif" style={{ ...t(17, 1.45), fontStyle: "italic", letterSpacing: "-0.015em" }}>{e.note}</p>}
                    {e.medium
                      ? <a href={e.href} target="_blank" rel="noopener" className="mono exp-tag" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", whiteSpace: "pre-wrap" }}>{e.tags}</a>
                      : <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", whiteSpace: "pre-wrap" }}>{e.tags}</p>}
                  </StaggerItem>
                </div>
                <div style={{ height: 1, background: "var(--ink)" }} />
              </StaggerGroup>
            ))}
            <p className="serif" style={{ ...t(17, "normal"), fontStyle: "italic", paddingTop: u(24) }}>{TAIL}</p>
          </div>
        );
      })}
      <style>{`.exp-zoom{transition:transform .8s cubic-bezier(.2,.7,.1,1)}.exp-link:hover .exp-zoom{transform:scale(1.03)}.exp-link h3{transition:color .3s}.exp-link:hover h3{color:var(--laterite)}.exp-tag:hover{color:var(--laterite)!important}@media (prefers-reduced-motion: reduce){.exp-zoom{transition:none}}`}</style>
    </section>
  );
}
