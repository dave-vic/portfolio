import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/misika/";
const cb = P + "callback.webp", land = P + "landing.webp";

const misika: CaseData = {
  slug: "misika",
  title: "MiSika merchant loan · Case study",
  label: "(CASE 07) MISIKA",
  description: "A loan merchants apply for on *171#, and the landing page that explains it.",
  colors: { brand: "#08543d", accent: "#f2c74d", accentInk: "#141414", soft: "#e5f2eb", dark: "#05241a", tint: "#c7ebd6", stat: "#8c6b1a" },
  hero: {
    w1: "MISIKA",
    w2: "*171#",
    w1w: 771,
    w2w: 635,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "ok.webp", alt: "Request received confirmation", alpha: true, crop: [0.7197, 1, 0, 0] } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: cb, alt: "Request a call back form", alpha: true, crop: [1, 0.8447, 0, 0] } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: land, alt: "MiSika landing page", crop: [1, 0.4101, 0, 0] } },
    ],
    sticker: { lines: ["CASE 07", "MERCHANT", "LOAN"] },
    meta: [["CLIENT", "MISIKA, GHANA"], ["ROLE", "PRODUCT · UX · GROWTH"], ["YEAR", "2026"]],
    stat: "LIVE · *171# · 5 STEPS · CALL BACK IN ONE WORKING DAY",
  },
  overview: {
    lede: "MiSika gives eligible mobile money merchants financing when an opportunity comes up. Merchants apply by dialling *171# from an MTN line. I designed the landing page that explains the loan in plain words, and a request-a-call-back path for merchants who want to talk to someone first.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 28, shadow: 0.3, img: { src: land, alt: "Landing page on a phone", crop: [1, 0.4365, 0, 0] } },
    facts: [["ROLE", "Product, UX, growth"], ["PLATFORMS", "USSD *171#, responsive web"], ["DELIVERED", "Landing page, call-back flow, USSD entry"]],
  },
  upclose: {
    label: "(02) UP CLOSE",
    h: "Two ways in: dial *171#, or ask for a call back.",
    height: 1185,
    main: { x: 56, y: 320, w: 1000, h: 765, r: 14, shadow: 0.14, img: { src: cb, alt: "Request a call back form", alpha: true, crop: [1, 1, 0, 0] } },
    details: [
      { text: "“Request a call back · Takes about a minute. No paperwork.” sets expectations before the first field.", pin: [1120, 320], text_: [1160, 323, 500], onMain: [532, 346.6], zoom: { x: 1120, y: 383, w: 552, h: 84, r: 10, shadow: 0.14, img: { src: cb, alt: "Request a call back heading", alpha: true, crop: [0.5, 0.1, 0.48, 0.04] } } },
      { text: "Average MoMo sales per day as four simple ranges, not a number to type.", pin: [1120, 523], text_: [1160, 526, 500], onMain: [532, 721.4], zoom: { x: 1120, y: 586, w: 552, h: 83, r: 10, shadow: 0.14, img: { src: cb, alt: "Average MoMo sales ranges", alpha: true, crop: [0.51, 0.1, 0.47, 0.53] } } },
      { text: "Rather not wait? Dial *171# from any MTN line, right there on the form.", pin: [1120, 769], text_: [1160, 772, 500], onMain: [72, 928], zoom: { x: 1120, y: 810, w: 552, h: 169, r: 10, shadow: 0.14, img: { src: cb, alt: "Dial *171# panel", alpha: true, crop: [0.4, 0.16, 0.02, 0.8] } } },
    ],
  },
  more: {
    label: "(03) THE LANDING PAGE",
    h: "One page that answers the questions merchants actually ask, then gets out of the way.",
    word: "*171#",
    wordW: 992,
    cards: [
      { x: 101.8, y: 380, w: 430, h: 900, rot: -6, r: 14, shadow: 0.35, img: { src: land, alt: "Landing page hero", crop: [1, 0.4568, 0, 0] }, badge: [480, 334, 80], cap: "THE HERO\nFINANCING THAT DAY YOUR SIDE", capAt: [150, 1320, 430] },
      { x: 665.6, y: 292.2, w: 430, h: 900, rot: 2, r: 14, shadow: 0.35, img: { src: land, alt: "How it works and merchant stories", crop: [1, 0.4568, 0, 0.5] }, badge: [980, 274, 80], cap: "HOW IT WORKS\nFIVE STEPS AND MERCHANT STORIES", capAt: [650, 1260, 430] },
      { x: 1195.9, y: 375.1, w: 430, h: 900, rot: 6, r: 14, shadow: 0.35, img: { src: P + "ok.webp", alt: "After the request", alpha: true, crop: [0.2224, 1, 0, 0] }, badge: [1480, 374, 80], cap: "AFTER THE REQUEST\nWE’LL CALL YOU WITHIN ONE WORKING DAY", capAt: [1150, 1360, 430] },
    ],
  },
  next: NEXT["medshea"],
};

export default misika;
