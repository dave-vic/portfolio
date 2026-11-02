import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/medshea/";
const home = P + "home.webp", ws = P + "wholesale.webp";

const medshea: CaseData = {
  slug: "medshea",
  title: "Medshea · Case study",
  label: "(CASE 14) MEDSHEA",
  description: "A brand and wholesale website for a Ghanaian shea butter, essential oil and plant-based repellent maker.",
  colors: { brand: "#214d21", accent: "#fabf33", accentInk: "#141414", soft: "#eef3e8", dark: "#121f0f", tint: "#d9ebcc", stat: "#8c660d" },
  hero: {
    w1: "MEDSHEA",
    w2: "NATURE",
    w1w: 1035,
    w2w: 804,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: ws, alt: "Wholesale page", crop: [1, 0.1748, 0, 0] } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: home, alt: "Medshea home page", crop: [1, 0.1756, 0, 0] } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: ws, alt: "Wholesale ordering steps", crop: [1, 0.5078, 0, 0.4922] } },
    ],
    sticker: { lines: ["CASE 14", "BRAND", "+ WHOLESALE"] },
    meta: [["CLIENT", "MEDSHEA · NORTHSTONE, GHANA"], ["ROLE", "UX · UI · WEB"], ["YEAR", "2025"]],
    stat: "2 AUDIENCES · 4-STEP ORDERING · ORDER FORM",
  },
  overview: {
    lede: "Medshea makes shea butter, essential oils and plant-based repellents from farmland in Ghana. The site has two jobs: tell everyday customers what the products are and why they can trust them, and give wholesale buyers clear minimum orders and a simple way to request an order.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 28, shadow: 0.3, img: { src: home, alt: "Home page on a phone", crop: [1, 0.5435, 0, 0.22] } },
    facts: [["ROLE", "UX, UI, web"], ["PLATFORMS", "Website"], ["DELIVERED", "Home page, wholesale page, order request form"]],
  },
  more: {
    label: "(02) BOTH PAGES",
    h: "One brand, two audiences: everyday customers and wholesale buyers.",
    word: "ROOTED",
    wordW: 1265,
    cards: [
      { x: 101.8, y: 380, w: 430, h: 900, rot: -6, r: 14, shadow: 0.35, img: { src: home, alt: "Home: rooted in nature, made for you", crop: [1, 0.5687, 0, 0] }, badge: [480, 334, 80], cap: "HOME\nROOTED IN NATURE, MADE FOR YOU", capAt: [150, 1320, 430] },
      { x: 665.6, y: 292.2, w: 430, h: 900, rot: 2, r: 14, shadow: 0.35, img: { src: ws, alt: "Wholesale products with clear minimum orders", crop: [1, 0.5657, 0, 0] }, badge: [980, 274, 80], cap: "WHOLESALE\nPRODUCTS WITH CLEAR MOQS", capAt: [650, 1260, 430] },
      { x: 1195.9, y: 375.1, w: 430, h: 900, rot: 6, r: 14, shadow: 0.35, img: { src: ws, alt: "Ordering: four steps, then one form", crop: [1, 0.5657, 0, 0.4343] }, badge: [1480, 374, 80], cap: "ORDERING\nFOUR STEPS, THEN ONE FORM", capAt: [1150, 1360, 430] },
    ],
  },
  next: NEXT["afriplay"],
};

export default medshea;
