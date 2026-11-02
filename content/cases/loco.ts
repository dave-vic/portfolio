import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/loco/";

const loco: CaseData = {
  slug: "loco",
  title: "Loco business platform · Case study",
  label: "(PROJECT 01) LOCO",
  description: "A business platform for merchants in Tanzania: an owner's web dashboard, a mobile admin app, a tablet POS and a customer storefront.",
  colors: { brand: "#6b4ef0", accent: "#9078f8", accentInk: "#ffffff", soft: "#f1eefe", dark: "#24233b", tint: "#ddd5ff", stat: "#6b4ef0" },
  hero: {
    w1: "LOCO",
    w2: "BUSINESS",
    w1w: 545,
    w2w: 1022,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "hero-l.webp", alt: "Stock overview on the web dashboard" } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: P + "hero-c.webp", alt: "Business overview with sales and profit" } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 22, shadow: 0.2, img: { src: P + "hero-r.webp", alt: "The mobile admin app" } },
    ],
    sticker: { lines: ["PROJECT 01", "LIVE", "AND IN USE"] },
    meta: [["CLIENT", "NERDION TECH SOLUTIONS · TANZANIA"], ["ROLE", "LEAD DESIGNER · WEB · MOBILE · POS"], ["YEAR", "2026"]],
    stat: "300+ SCREENS · 4 SURFACES · LIVE",
  },
  overview: {
    lede: "Loco is a business platform for merchants in Tanzania, live and in use. As lead designer I did about 90% of its design: more than 300 screens across an owner’s web dashboard, a mobile admin app, a tablet POS for cashiers and waiters, and a storefront for online orders.",
    phone: { x: 1306, y: 76, w: 360, h: 780, rot: 4, r: 32, shadow: 0.3, img: { src: P + "phone.webp", alt: "Sales summary in the mobile admin app" } },
    facts: [["ROLE", "Lead designer, about 90% of the product’s design"], ["SURFACES", "Web dashboard, mobile admin, tablet POS, storefront"], ["COVERS", "Sales, stock, staff, invoicing, branches, reports, billing"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Terminals, staff and billing, run from one dashboard.",
    word: "MANAGE",
    wordW: 1431,
    height: 1100,
    cards: [
      { x: 60, y: 440, w: 520, h: 371, rot: 5, r: 12, shadow: 0.4, img: { src: P + "pos.webp", alt: "POS fleet monitor" }, badge: [520, 396, 80], cap: "POS FLEET\nEVERY TERMINAL AT A GLANCE", capAt: [80, 890, 440] },
      { x: 604, y: 370, w: 520, h: 371, rot: -2, r: 12, shadow: 0.4, img: { src: P + "team.webp", alt: "Team members" }, badge: [1070, 326, 80], cap: "TEAM\nSTAFF, ROLES AND SHIFTS", capAt: [624, 810, 440] },
      { x: 1148, y: 450, w: 520, h: 371, rot: -5, r: 12, shadow: 0.4, img: { src: P + "billing.webp", alt: "Subscription plans and billing history" }, badge: [1600, 430, 80], cap: "SUBSCRIPTION\nPLANS AND BILLING HISTORY", capAt: [1168, 900, 440] },
    ],
  },
  next: NEXT["elysium"],
};

export default loco;
