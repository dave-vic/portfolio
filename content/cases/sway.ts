import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/sway/";

const sway: CaseData = {
  slug: "sway",
  title: "Sway · Case study",
  label: "(PROJECT 13) SWAY",
  description: "A mobile app that connects content creators with brand campaigns: sign up with your socials, track deliverables and earnings, and chat with campaign managers.",
  colors: { brand: "#c80820", accent: "#e88078", accentInk: "#141414", soft: "#fdecea", dark: "#5f1017", tint: "#fbd9d6", stat: "#c80820" },
  hero: {
    w1: "SWAY",
    w2: "CREATORS",
    w1w: 612,
    w2w: 1076,
    scale: true,
    stickerAt: [990, 790],
    cards: [
      { x: 170, y: 340, w: 270, h: 585, rot: -7, r: 36, shadow: 0.25, img: { src: P + "hero-l.webp", alt: "Sway splash screen" } },
      { x: 700, y: 330, w: 300, h: 650, rot: 2, r: 40, shadow: 0.25, img: { src: P + "hero-c.webp", alt: "Creator home with campaigns and content tasks" } },
      { x: 1250, y: 190, w: 280, h: 606, rot: 6, r: 36, shadow: 0.25, img: { src: P + "hero-r.webp", alt: "Sign up: your influence, amplified" } },
    ],
    sticker: { lines: ["PROJECT 13", "CREATOR", "APP"] },
    meta: [["BUILT AT", "INTERACTIVE DIGITAL"], ["ROLE", "UX · UI · MOBILE"], ["YEAR", "2026"]],
    stat: "SOCIAL SIGN-UP · DELIVERABLES · EARNINGS · CHAT",
  },
  overview: {
    lede: "Sway connects content creators with brand campaigns. Creators sign up with their socials, track deliverables and earnings, and chat with campaign managers, with an AI assistant on hand when they need help.",
    phone: { x: 1306, y: 76, w: 360, h: 780, rot: 4, r: 40, shadow: 0.3, img: { src: P + "phone.webp", alt: "Messages with the AI assistant button" } },
    facts: [["ROLE", "UX, UI, mobile"], ["PLATFORMS", "Mobile app"], ["DELIVERED", "Sign-up, home, campaigns, messages, earnings, AI assistant"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Campaigns, earnings and chat, all in one app.",
    word: "CREATE",
    wordW: 1215,
    cards: [
      { x: 180, y: 400, w: 340, h: 740, rot: -6, r: 30, shadow: 0.4, img: { src: P + "hero-r.webp", alt: "Sign up with email, Google or LinkedIn" }, badge: [470, 360, 80], cap: "SIGN UP\nEMAIL, GOOGLE OR LINKEDIN", capAt: [200, 1200, 340] },
      { x: 694, y: 310, w: 340, h: 740, rot: 2, r: 30, shadow: 0.4, img: { src: P + "home.webp", alt: "Total earnings and profile completion" }, badge: [985, 290, 80], cap: "HOME\nEARNINGS AND PROFILE PROGRESS", capAt: [700, 1110, 340] },
      { x: 1208, y: 400, w: 340, h: 740, rot: 6, r: 30, shadow: 0.4, img: { src: P + "phone.webp", alt: "Messages and the AI assistant" }, badge: [1500, 370, 80], cap: "MESSAGES\nCHAT, PLUS AN AI ASSISTANT", capAt: [1220, 1210, 340] },
    ],
  },
  next: NEXT["know-your-momo"],
};

export default sway;
