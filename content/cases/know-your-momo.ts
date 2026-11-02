import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/know-your-momo/";

const momo: CaseData = {
  slug: "know-your-momo",
  title: "Know your MoMo · Case study",
  label: "(PROJECT 15) KNOW YOUR MOMO",
  description: "A mobile quiz for MTN MoMo users: questions about how they use MoMo, a surprise reward halfway through, and a win at the end.",
  colors: { brand: "#003b55", accent: "#f8c800", accentInk: "#003b55", soft: "#e7eef1", dark: "#062a3b", tint: "#d9e5ea", stat: "#003b55" },
  hero: {
    w1: "KNOW YOUR",
    w2: "MOMO",
    w1w: 1263,
    w2w: 731,
    scale: true,
    stickerAt: [990, 790],
    cards: [
      { x: 170, y: 340, w: 270, h: 585, rot: -7, r: 36, shadow: 0.25, img: { src: P + "start.webp", alt: "Start: share your MoMo experience and win" } },
      { x: 700, y: 330, w: 300, h: 650, rot: 2, r: 40, shadow: 0.25, img: { src: P + "hype.webp", alt: "Halfway there: a surprise awaits" } },
      { x: 1250, y: 190, w: 280, h: 606, rot: 6, r: 36, shadow: 0.25, img: { src: P + "win.webp", alt: "Boom, you actually did it" } },
    ],
    sticker: { lines: ["PROJECT 15", "QUIZ", "+ REWARD"] },
    meta: [["FOR", "MTN MOMO USERS"], ["ROLE", "UX · UI · MOBILE"], ["YEAR", "2026"]],
    stat: "10 QUESTIONS · A SURPRISE HALFWAY · A WIN",
  },
  overview: {
    lede: "Know your MoMo is a mobile quiz for MTN MoMo users. People answer questions about how they use MoMo, get a surprise reward halfway through, and finish with a win.",
    phone: { x: 1306, y: 76, w: 360, h: 780, rot: 4, r: 40, shadow: 0.3, img: { src: P + "question.webp", alt: "A quiz question with four answers" } },
    facts: [["ROLE", "UX, UI, mobile"], ["PLATFORMS", "Mobile"], ["DELIVERED", "Start, questions, tips, halfway reward, win screen"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "A quick quiz with something to look forward to.",
    word: "WIN",
    wordW: 661,
    cards: [
      { x: 60.4, y: 395.7, w: 340, h: 740, rot: -6, r: 30, shadow: 0.4, img: { src: P + "number.webp", alt: "Phone number" }, badge: [360, 354, 80], cap: "START\nYOUR PHONE NUMBER FIRST", capAt: [100, 1180, 340] },
      { x: 519.1, y: 310.6, w: 340, h: 740, rot: 3, r: 30, shadow: 0.4, img: { src: P + "answer.webp", alt: "A selected answer" }, badge: [760, 294, 80], cap: "QUESTIONS\nONE TAP TO ANSWER", capAt: [500, 1120, 340] },
      { x: 880.4, y: 428.4, w: 340, h: 740, rot: -3, r: 30, shadow: 0.4, img: { src: P + "tip.webp", alt: "Did you know: a tip about the MoMo app" }, badge: [1160, 394, 80], cap: "DID YOU KNOW\nTIPS ABOUT THE MOMO APP", capAt: [900, 1220, 340] },
      { x: 1337.7, y: 330.2, w: 340, h: 740, rot: 6, r: 30, shadow: 0.4, img: { src: P + "hype.webp", alt: "Halfway: a surprise awaits" }, badge: [1560, 324, 80], cap: "HALFWAY\nA SURPRISE REWARD", capAt: [1300, 1150, 340] },
    ],
  },
  next: NEXT["blaccbook"],
};

export default momo;
