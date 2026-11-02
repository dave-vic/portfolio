import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/ghipss/";

const ghipss: CaseData = {
  slug: "ghipss",
  title: "GhIPSS website redesign · Case study",
  label: "(PROJECT 17) GHIPSS REDESIGN",
  description: "A personal redesign of the homepage for GhIPSS, which runs Ghana’s interbank payment systems: a clearer promise, the payment products in one place, and entry points for banks, regulators, retailers and developers.",
  colors: { brand: "#123f8c", accent: "#9fc3ff", accentInk: "#0b2456", soft: "#eef2f8", dark: "#0b2456", tint: "#cfdcf3", stat: "#123f8c" },
  hero: {
    w1: "GHIPSS",
    w2: "REDESIGN",
    w1w: 773,
    w2w: 1027,
    cards: [
      { x: 44.1, y: 345, w: 600, h: 338, rot: -7, r: 12, shadow: 0.2, img: { src: P + "ecosystem.webp", alt: "Our thriving ecosystem: GhIPSS Instant Pay, gh-link, e-zwich, GhanaPay, MMI" } },
      { x: 479, y: 365.5, w: 820, h: 475, rot: 2, r: 12, shadow: 0.2, img: { src: P + "hero.webp", alt: "Landing: Powering Ghana’s digital finance" } },
      { x: 1290, y: 160, w: 380, h: 470, rot: 6, r: 12, shadow: 0.2, img: { src: P + "mission-p.webp", alt: "Our mission, with the team" } },
    ],
    sticker: { lines: ["PROJECT 17", "CONCEPT", "REDESIGN"] },
    meta: [["FOR", "GHIPSS · GHANA’S PAYMENT SWITCH"], ["ROLE", "UX · UI · WEB"], ["TYPE", "PERSONAL CASE STUDY · INTERACTIVE DIGITAL"]],
    stat: "TWO HOMEPAGE LAYOUTS · PRODUCTS IN ONE PLACE · AN ENTRY POINT FOR EACH AUDIENCE",
  },
  overview: {
    lede: "GhIPSS runs Ghana’s interbank payment systems: GhIPSS Instant Pay, gh-link, e-zwich, GhanaPay and mobile money interoperability. Its current website repeats itself, hides its FAQs near the bottom and says little about who each service is for. As a personal case study at Interactive Digital, I redesigned the homepage around a clear promise, the numbers that show its scale, the products in one place, and a way in for banks, regulators, retailers and developers.",
    phone: { x: 1150, y: 120, w: 540, h: 597, rot: 3, r: 14, shadow: 0.3, img: { src: P + "access.webp", alt: "Personalized access points for each audience" } },
    facts: [["ROLE", "UX, UI, web"], ["PLATFORMS", "Website, desktop"], ["DELIVERED", "Two homepage layouts: a first version and a rearranged one that brings the mission forward"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "One page that says what GhIPSS does, and who it is for.",
    hw: 960,
    word: "CASH-LITE",
    wordW: 1665,
    height: 1560,
    cards: [
      { x: 30, y: 400, w: 700, h: 472, rot: -5, r: 14, shadow: 0.4, img: { src: P + "backbone.webp", alt: "The backbone of Ghana’s financial space: 120+ institutions, 99.9% uptime" }, badge: [650, 350, 90], cap: "THE NUMBERS\nSCALE, SHOWN NOT TOLD", capAt: [60, 1000, 520] },
      { x: 1000, y: 430, w: 700, h: 438, rot: 5, r: 14, shadow: 0.4, img: { src: P + "cta.webp", alt: "Looking to connect with GhIPSS? Partner with us" }, badge: [1630, 400, 90], cap: "PARTNER WITH US\nONE CLEAR NEXT STEP", capAt: [1270, 960, 420] },
      { x: 500, y: 560, w: 740, h: 456, rot: -1, r: 14, shadow: 0.45, img: { src: P + "initiatives.webp", alt: "Strategic initiatives: digital cedi, ISO 20022, universal QR" }, badge: [1175, 520, 90], cap: "INITIATIVES\nDIGITAL CEDI, ISO 20022, UNIVERSAL QR", capAt: [610, 1080, 520] },
    ],
  },
  next: NEXT["talent-hub"],
};

export default ghipss;
