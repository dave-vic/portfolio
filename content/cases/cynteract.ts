import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/cynteract/";

const cynteract: CaseData = {
  slug: "cynteract",
  title: "Cynteract website · Case study",
  label: "(PROJECT 18) CYNTERACT WEBSITE",
  description: "The website for Cynteract, a German health-tech company whose glove, strap and cushion turn rehabilitation exercises into games. I built it myself on one.com, alongside my role as PM and Scrum Master.",
  colors: { brand: "#2f7fc4", accent: "#f2a33a", accentInk: "#0f2f52", soft: "#eaf4fc", dark: "#0f2f52", tint: "#cfe4f6", stat: "#2f7fc4" },
  hero: {
    w1: "CYNTERACT",
    w2: "WEBSITE",
    w1w: 1203,
    w2w: 918,
    cards: [
      { x: 44.1, y: 345, w: 600, h: 334, rot: -7, r: 12, shadow: 0.2, img: { src: P + "mission.webp", alt: "Mission: motivational rehabilitation for everyone, with a world map" } },
      { x: 479, y: 365.5, w: 820, h: 456, rot: 2, r: 12, shadow: 0.2, img: { src: P + "welcome.webp", alt: "Home: Blob says welcome to Cynteract" } },
      { x: 1290, y: 160, w: 400, h: 447, rot: 6, r: 12, shadow: 0.2, img: { src: P + "users-p.webp", alt: "Target user groups, from stroke to ADHD" } },
    ],
    sticker: { lines: ["PROJECT 18", "LIVE", "BUILT 2024"] },
    meta: [["CLIENT", "CYNTERACT · GERMANY, REMOTE"], ["ROLE", "BUILT THE WEBSITE · PM · SCRUM MASTER"], ["BUILT WITH", "ONE.COM"]],
    stat: "GLOVE · STRAP · CUSHION · REHABILITATION THAT FEELS LIKE A GAME",
  },
  overview: {
    lede: "Cynteract makes rehabilitation devices that turn exercises into games: a glove for the hand, a strap for the arms and feet, and a cushion for the core, with Blob, their character, cheering people on. Alongside running sprints as PM and Scrum Master, I built the company website myself on one.com: the welcome with Blob, the three products, how they work, who they are for, and the mission to bring motivational rehabilitation to everyone.",
    phone: { x: 1150, y: 120, w: 540, h: 597, rot: 3, r: 14, shadow: 0.3, img: { src: P + "products-p.webp", alt: "Glove, strap and cushion: precise, portable, affordable" } },
    facts: [["ROLE", "Built the website; PM and Scrum Master for the team"], ["PLATFORMS", "Website, built on one.com"], ["DELIVERED", "Home, products, how it works, who it is for, mission"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Explaining a rehab device to patients, clinics and insurers on one page.",
    hw: 960,
    word: "REHAB",
    wordW: 1069,
    height: 1560,
    cards: [
      { x: 30, y: 400, w: 700, h: 390, rot: -5, r: 14, shadow: 0.4, img: { src: P + "products.webp", alt: "Glove, strap and cushion" }, badge: [650, 350, 90], cap: "THE PRODUCTS\nPRECISE, PORTABLE, AFFORDABLE", capAt: [60, 960, 520] },
      { x: 1000, y: 430, w: 700, h: 390, rot: 5, r: 14, shadow: 0.4, img: { src: P + "users.webp", alt: "Target user groups" }, badge: [1630, 400, 90], cap: "WHO IT IS FOR\nNEUROLOGICAL, RHEUMATIC, DEVELOPMENTAL", capAt: [1270, 960, 420] },
      { x: 500, y: 560, w: 740, h: 412, rot: -1, r: 14, shadow: 0.45, img: { src: P + "how.webp", alt: "How does it work: strap, cushion and glove on the body" }, badge: [1175, 520, 90], cap: "HOW IT WORKS\nA STRAP, A CUSHION AND A GLOVE", capAt: [610, 1060, 520] },
    ],
  },
  next: NEXT["talent-hub"],
};

export default cynteract;
