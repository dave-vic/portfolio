import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/stanbic/";
type Crop = [number, number, number, number];

const stanbic: CaseData = {
  slug: "stanbic-valentines",
  title: "Stanbic Valentine’s game · Case study",
  label: "(PROJECT 16) STANBIC VALENTINE’S GAME",
  description: "A Valentine’s Day game for Stanbic Bank: ten quick questions about how you feel loved, then your love language and a heart profile to share. Live in February 2026.",
  colors: { brand: "#0033a1", accent: "#f6cdd8", accentInk: "#0a1f8f", soft: "#eef1fb", dark: "#0a1a5c", tint: "#dbe2f6", stat: "#0033a1" },
  hero: {
    w1: "STANBIC",
    w2: "LOVE GAME",
    w1w: 890,
    w2w: 1215,
    scale: true,
    stickerAt: [990, 790],
    cards: [
      { x: 170, y: 340, w: 270, h: 535, rot: -7, r: 36, shadow: 0.25, img: { src: P + "start.webp", alt: "Start: Love looks different on everyone" } },
      { x: 700, y: 330, w: 300, h: 595, rot: 2, r: 40, shadow: 0.25, img: { src: P + "q1a.webp", alt: "A question with an answer picked" } },
      { x: 1250, y: 190, w: 280, h: 555, rot: 6, r: 36, shadow: 0.25, img: { src: P + "result.webp", alt: "Result: your love language is Acts of Service", crop: [1, 0.623, 0, 0] as Crop } },
    ],
    sticker: { lines: ["PROJECT 16", "LIVE", "FEB 2026"] },
    meta: [["CLIENT", "STANBIC BANK · VIA INTERACTIVE DIGITAL"], ["ROLE", "UX · UI · WHOLE GAME"], ["YEAR", "FEB 2026 · LIVE"]],
    stat: "10 QUESTIONS · 7 LOVE LANGUAGES · A HEART PROFILE TO SHARE",
  },
  overview: {
    lede: "A Valentine’s Day game for Stanbic Bank, live in February 2026. People answer ten quick questions about how they feel loved, and the game tells them their love language, with a full heart profile they can share. I designed the whole game at Interactive Digital: the start screen, the questions, the halfway moment and the results.",
    phone: { x: 1306, y: 76, w: 360, h: 714, rot: 4, r: 40, shadow: 0.3, img: { src: P + "q5.webp", alt: "A question with five answers" } },
    facts: [["ROLE", "UX, UI, the whole game"], ["PLATFORMS", "Mobile web"], ["DELIVERED", "Start, ten questions, halfway screen, results and heart profile"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Ten questions, one heart profile.",
    word: "LOVE",
    wordW: 523,
    cards: [
      { x: 60.4, y: 395.7, w: 340, h: 674, rot: -6, r: 30, shadow: 0.4, img: { src: P + "q1.webp", alt: "Question one: you feel loved when someone…" }, badge: [360, 354, 80], cap: "QUESTIONS\nFIVE ANSWERS, ONE TAP", capAt: [100, 1120, 340] },
      { x: 519.1, y: 310.6, w: 340, h: 674, rot: 3, r: 30, shadow: 0.4, img: { src: P + "q1a.webp", alt: "An answer picked, flick left to continue" }, badge: [760, 294, 80], cap: "PICK, THEN FLICK\nSWIPE LEFT TO MOVE ON", capAt: [500, 1050, 340] },
      { x: 880.4, y: 428.4, w: 340, h: 674, rot: -3, r: 30, shadow: 0.4, img: { src: P + "hype.webp", alt: "Halfway: something special is loading, 50%" }, badge: [1160, 394, 80], cap: "HALFWAY\nSOMETHING SPECIAL, 50%", capAt: [900, 1160, 340] },
      { x: 1337.7, y: 330.2, w: 340, h: 674, rot: 6, r: 30, shadow: 0.4, img: { src: P + "result.webp", alt: "Results and a detailed heart profile", crop: [1, 0.623, 0, 0] as Crop }, badge: [1560, 324, 80], cap: "RESULTS\nYOUR LOVE LANGUAGE + PROFILE", capAt: [1300, 1080, 340] },
    ],
  },
  next: NEXT["talent-hub"],
};

export default stanbic;
