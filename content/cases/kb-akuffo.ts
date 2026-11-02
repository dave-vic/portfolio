import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/kb-akuffo/";

const kbAkuffo: CaseData = {
  slug: "kb-akuffo",
  title: "KB Akuffo & Co. · Case study",
  label: "(PROJECT 12) KB AKUFFO & CO.",
  description: "A website for a Ghanaian law firm: practice areas, partner profiles, case studies, insights and a page to book a consultation.",
  colors: { brand: "#781830", accent: "#e8c9d1", accentInk: "#190f0e", soft: "#f4eff0", dark: "#190f0e", tint: "#f0d9df", stat: "#781830" },
  hero: {
    w1: "KB AKUFFO",
    w2: "& CO.",
    w1w: 1147,
    w2w: 572,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "hero-l.webp", alt: "Consultation page: we’re ready to hear from you" } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: P + "hero-c.webp", alt: "Home page" } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: P + "hero-r.webp", alt: "Our team" } },
    ],
    sticker: { lines: ["PROJECT 12", "LAW FIRM", "WEBSITE"] },
    meta: [["CLIENT", "KB AKUFFO & CO. · GHANA"], ["ROLE", "UX · UI · WEB"], ["YEAR", "2025"]],
    stat: "PRACTICE AREAS · PARTNERS · INSIGHTS · CONSULTATION",
  },
  overview: {
    lede: "KB Akuffo & Co. is a law firm in Ghana. I designed its website: practice areas, partner profiles, case studies, insights and a page to book a consultation, all in the firm’s maroon and black.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 16, shadow: 0.3, img: { src: P + "phone.webp", alt: "Home page section on the firm’s practice" } },
    facts: [["ROLE", "UX, UI, web"], ["PLATFORMS", "Website"], ["DELIVERED", "Home, practice areas, partner profiles, case studies, insights, consultation"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Practice areas, people and insights, each a step from a consultation.",
    hw: 960,
    word: "COUNSEL",
    wordW: 1473,
    cards: [
      { x: 59.3, y: 396.7, w: 360, h: 760, rot: -6, r: 14, shadow: 0.35, img: { src: P + "partner.webp", alt: "Partner profile" }, badge: [360, 354, 80], cap: "PARTNER PROFILE\nBACKGROUND AND PRACTICE FOCUS", capAt: [100, 1200, 360] },
      { x: 519.6, y: 310.1, w: 360, h: 760, rot: 3, r: 14, shadow: 0.35, img: { src: P + "services.webp", alt: "Practice areas" }, badge: [760, 294, 80], cap: "PRACTICE AREAS\nEVERY SERVICE IN ONE LIST", capAt: [500, 1140, 360] },
      { x: 879.9, y: 428.9, w: 360, h: 760, rot: -3, r: 14, shadow: 0.35, img: { src: P + "insights.webp", alt: "Insights" }, badge: [1160, 394, 80], cap: "INSIGHTS\nARTICLES AND UPDATES", capAt: [900, 1240, 360] },
      { x: 1338.7, y: 329.1, w: 360, h: 760, rot: 6, r: 14, shadow: 0.35, img: { src: P + "consult.webp", alt: "Get a consultation" }, badge: [1560, 324, 80], cap: "CONSULTATION\nPICK A SERVICE, SEND A NOTE", capAt: [1300, 1170, 360] },
    ],
  },
  next: NEXT["sway"],
};

export default kbAkuffo;
