"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { u, t } from "@/lib/u";

const LINKS = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/lab", label: "LAB" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Nav() {
  const [label, setLabel] = useState("(01) INDEX");
  const [open, setOpen] = useState(false);
  const path = usePathname();

  // What sits under a point: a light surface, a dark one, or a photo. Images can say so with data-tone.
  type Tone = "light" | "dark" | "photo";
  // is this point of an image see-through? (the slanted panels are PNG/SVG/WebP with transparent corners)
  const clearAt = (img: HTMLImageElement, x: number, y: number) => {
    try {
      const r = img.getBoundingClientRect();
      if (!img.naturalWidth) return false;
      const c = document.createElement("canvas"); c.width = 1; c.height = 1;
      const g = c.getContext("2d", { willReadFrequently: true }); if (!g) return false;
      const sx = ((x - r.left) / r.width) * img.naturalWidth, sy = ((y - r.top) / r.height) * img.naturalHeight;
      g.drawImage(img, sx, sy, 1, 1, 0, 0, 1, 1);
      return g.getImageData(0, 0, 1, 1).data[3] < 40;
    } catch { return false; }
  };
  const toneAt = (x: number, y: number): Tone => {
    for (const el of document.elementsFromPoint(x, y)) {
      if (el.closest("header[data-nav]")) continue;
      const tagged = el.closest<HTMLElement>("[data-tone]");
      if (tagged) return tagged.dataset.tone as Tone;
      if (el.tagName === "IMG" && !/\.svg($|\?)/.test((el as HTMLImageElement).currentSrc) && clearAt(el as HTMLImageElement, x, y)) continue;
      if (el.tagName === "IMG" || el.tagName === "VIDEO") return "photo";
      // layers come top to bottom: the first one with its own solid background decides
      const bg = getComputedStyle(el).backgroundColor;
      const m = bg.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/);
      if (m && (m[4] === undefined || parseFloat(m[4]) > 0.5)) {
        const l = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
        return l < 0.5 ? "dark" : "light";
      }
    }
    return "light";
  };

  // Scrolled: one soft bar in the tone of the section below. At the very top: no bar, and each part of the nav
  // (name, label, links) picks a solid colour for whatever is behind it, with a shadow over photos.
  const [bar, setBar] = useState<null | "light" | "dark">(null);
  const [parts, setParts] = useState<{ l: Tone; c: Tone; r: Tone }>({ l: "light", c: "light", r: "light" });
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const header = document.querySelector<HTMLElement>("header[data-nav]");
      if (window.scrollY > 24) {
        const y = (header?.offsetHeight ?? 80) + 2;
        const t = toneAt(window.innerWidth / 2, y);
        setBar(t === "dark" ? "dark" : "light");
        return;
      }
      setBar(null);
      const pick = (sel: string): Tone => {
        const el = Array.from(header?.querySelectorAll<HTMLElement>(sel) ?? []).find((n) => n.offsetParent !== null);
        if (!el) return "light";
        const r = el.getBoundingClientRect();
        // sample along the text: a photo anywhere wins, otherwise the majority tone
        const ts = [0.05, 0.3, 0.5, 0.7, 0.95].map((f) => toneAt(r.left + r.width * f, r.top + r.height / 2));
        if (ts.includes("photo")) return "photo";
        return ts.filter((x) => x === "dark").length > ts.length / 2 ? "dark" : "light";
      };
      setParts({ l: pick("[data-part=l]"), c: pick("[data-part=c]"), r: pick("[data-part=r]") });
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); };
    on();
    // sections animate in on load; look again once they have settled
    const timers = [300, 1200, 2600, 4000].map((ms) => window.setTimeout(on, ms));
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  const partStyle = (tn: Tone): React.CSSProperties => (bar ? {} : {
    color: tn === "light" ? "var(--ink)" : "var(--on-dark)",
    transition: "color .35s",
    // over a photo: a soft dark pill behind the text so every word reads
    ...(tn === "photo" ? { background: "rgba(20,20,20,.42)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", padding: `${u(6)} ${u(14)}`, margin: `${u(-6)} ${u(-14)}`, borderRadius: 99 } : {}),
  });

  // middle label follows the section in view, like the Figma frames
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-label]"));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setLabel(e.target.getAttribute("data-label") || "")),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    setLabel(els[0]?.getAttribute("data-label") || "");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  // step aside over the contact section, which has its own top row (as in Figma)
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(false);
    const c = document.getElementById("contact");
    if (!c) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { rootMargin: "0px 0px -92% 0px" });
    io.observe(c);
    return () => io.disconnect();
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* at the top: white text + difference blend (ink on light, light on dark). Scrolled: a soft bar in the tone of the section below */}
      <header data-nav
        style={{
          position: "fixed", inset: "0 0 auto 0", zIndex: 50, pointerEvents: "none",
          color: bar === "dark" ? "var(--on-dark)" : "var(--ink)",
          background: bar === "dark" ? "rgba(20,20,20,.86)" : bar === "light" ? "rgba(238,235,228,.88)" : "transparent",
          backdropFilter: bar ? "blur(14px)" : "none", WebkitBackdropFilter: bar ? "blur(14px)" : "none",
          borderBottom: `1px solid ${bar === "dark" ? "rgba(255,255,255,.08)" : bar === "light" ? "rgba(20,20,20,.08)" : "transparent"}`,
          opacity: hide ? 0 : 1, visibility: hide ? "hidden" : "visible",
          transition: "opacity .35s, visibility .35s, background-color .35s, color .35s, border-color .35s",
        }}
      >
        {/* desktop */}
        <div className="only-d mono" style={{ position: "relative", height: u(96) }}>
          <Link href="/" data-part="l" style={{ ...t(12, 1.4), position: "absolute", left: `calc(var(--gx) + ${u(56)})`, top: u(36), pointerEvents: "auto", ...partStyle(parts.l) }}>
            DAVIDA DZATO®<br />PRODUCT DESIGN · PM · ANALYSIS · AI
          </Link>
          <p data-part="c" style={{ ...t(12), position: "absolute", left: "50%", top: u(36), transform: "translateX(-50%)", ...partStyle(parts.c) }} className="nowrap">{label}</p>
          <nav data-part="r" style={{ position: "absolute", right: `calc(var(--gx) + ${u(56)})`, top: u(36), display: "flex", gap: u(28), pointerEvents: "auto", ...partStyle(parts.r) }} aria-label="Main">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="navlink" style={t(12)}>{l.label}</Link>
            ))}
          </nav>
        </div>
        {/* tablet */}
        <div className="only-t mono" style={{ position: "relative", height: u(66) }}>
          <Link href="/" data-part="l" style={{ ...t(10, 1.5, 0.3), position: "absolute", left: u(40), top: u(20), pointerEvents: "auto", ...partStyle(parts.l) }}>
            DAVIDA DZATO®<br />PRODUCT DESIGN · PM · ANALYSIS · AI
          </Link>
          <nav data-part="r" style={{ position: "absolute", right: u(40), top: u(27), display: "flex", gap: u(22), pointerEvents: "auto", ...partStyle(parts.r) }} aria-label="Main">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="navlink" style={t(11, 1.5, 0.33)}>{l.label}</Link>
            ))}
          </nav>
        </div>
        {/* mobile: name only (menu button sits outside the blend) */}
        <div className="only-m mono" style={{ position: "relative", height: u(71) }}>
          <Link href="/" data-part="l" style={{ ...t(10, 1.5, 0.3), position: "absolute", left: u(20), top: u(23), pointerEvents: "auto", ...partStyle(parts.l) }}>
            DAVIDA DZATO®<br />PRODUCT DESIGN · PM · ANALYSIS · AI
          </Link>
        </div>
      </header>

      <div className="only-m">
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu"
          className="mono"
          style={{ position: "fixed", zIndex: 51, top: u(20), right: u(20), width: u(72), height: u(35), borderRadius: 99, background: "var(--ink)", color: "var(--on-dark)", display: "flex", alignItems: "center", justifyContent: "center", gap: u(8), ...t(11, 1.5, 0.33) }}
        >
          MENU <span style={{ width: u(8), height: u(8), borderRadius: "50%", background: "var(--laterite)" }} />
        </button>
      </div>

      {open && (
        <div id="menu" role="dialog" aria-modal="true" aria-label="Menu"
          style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--ink)", color: "var(--on-dark)", padding: `${u(20)} ${u(20)}` }}>
          <div className="mono" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <p style={t(10, 1.5, 0.3)}>DAVIDA DZATO®<br />PRODUCT DESIGN · PM · ANALYSIS · AI</p>
            <button onClick={() => setOpen(false)} className="mono"
              style={{ height: u(35), padding: `0 ${u(16)}`, borderRadius: 99, background: "var(--bone)", color: "var(--ink)", ...t(11, 1.5, 0.33) }}>
              CLOSE ✕
            </button>
          </div>
          <nav aria-label="Menu" style={{ marginTop: u(64), display: "grid", gap: u(6) }}>
            {[{ href: "/", label: "Index" }, { href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/lab", label: "Lab" }, { href: "/#contact", label: "Contact" }].map((l, i) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid #3a3a37", padding: `${u(10)} 0`, ...t(44, 1.05, -1.3) }}>
                <span>{l.label}</span><span className="mono" style={t(11)}>0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mono" style={{ position: "absolute", left: u(20), right: u(20), bottom: u(28), display: "flex", justifyContent: "space-between", ...t(11, 1.6, 0.33) }}>
            <a href="mailto:davidadzato45@gmail.com">DAVIDADZATO45@GMAIL.COM</a>
            <span><a href="https://www.linkedin.com/in/davida-dzato-b870021a0/" target="_blank" rel="noopener">LINKEDIN</a> · <a href="https://github.com/dave-vic" target="_blank" rel="noopener">GITHUB</a></span>
          </div>
        </div>
      )}
      <style>{`.navlink{background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;padding-bottom:3px;transition:background-size .35s cubic-bezier(.2,.7,.1,1)}.navlink:hover{background-size:100% 1px}`}</style>
    </>
  );
}
