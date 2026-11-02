import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/blaccbook/";
const ph = (n: string, alt: string) => ({ src: P + n + ".webp", alt, alpha: true });

const blaccbook: CaseData = {
  slug: "blaccbook",
  title: "BlaccBook · Case study",
  label: "(PROJECT 09) BLACCBOOK",
  description: "A mobile app for discovering local businesses, with map search, business pages, deals, table booking and recommendations. Live on the App Store.",
  colors: { brand: "#3b73e3", accent: "#3b73e3", accentInk: "#ffffff", soft: "#eaf0fc", dark: "#0f1b3d", tint: "#d3e0fa", stat: "#2a5bc4" },
  hero: {
    w1: "BLACC",
    w2: "BOOK",
    w1w: 682,
    w2w: 569,
    scale: true,
    stickerAt: [990, 790],
    cards: [
      { x: 170, y: 340, w: 270, h: 585, rot: -7, r: 0, shadow: 0.25, img: ph("business", "Business page: The Gourmet Hub") },
      { x: 700, y: 330, w: 300, h: 650, rot: 2, r: 0, shadow: 0.25, img: ph("home", "Home: discover local businesses") },
      { x: 1250, y: 190, w: 280, h: 606, rot: 6, r: 0, shadow: 0.25, img: ph("map", "Search on a map") },
    ],
    sticker: { lines: ["PROJECT 09", "LIVE ON", "APP STORE"] },
    meta: [["STUDIO", "IOTA DIGITAL LAB · USA, REMOTE"], ["ROLE", "UI/UX · WHOLE APP"], ["YEAR", "2022–2023"]],
    stat: "MAP SEARCH · DEALS · BOOKING · LIVE ON THE APP STORE",
  },
  overview: {
    lede: "BlaccBook is a mobile app for discovering local businesses, from restaurants and health to cleaning, barbers and hotels. I designed it end to end at Iota Digital Lab: map search, business pages, deals, table booking, order history and recommendations based on what you like. It is live on the App Store.",
    phone: { x: 1306, y: 76, w: 360, h: 782, rot: 4, r: 0, shadow: 0.3, img: ph("explore", "Explore: categories, deals and places to try") },
    facts: [["ROLE", "UI/UX, the whole app"], ["PLATFORMS", "Mobile app, live on the App Store"], ["DELIVERED", "Search and map, business pages, deals, booking, activity, preferences"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "Find a place, book a table, and come back for more.",
    word: "DISCOVER",
    wordW: 1610,
    cards: [
      { x: 180, y: 400, w: 340, h: 738, rot: -6, r: 0, shadow: 0.4, img: ph("preferences", "Preferences: see more of what you love"), badge: [470, 360, 80], cap: "PREFERENCES\nSEE MORE OF WHAT YOU LOVE", capAt: [200, 1200, 340] },
      { x: 694, y: 310, w: 340, h: 738, rot: 2, r: 0, shadow: 0.4, img: ph("booking", "Booking confirmed"), badge: [985, 290, 80], cap: "BOOKING\nCONFIRMED, WITH ID AND GUESTS", capAt: [700, 1110, 340] },
      { x: 1208, y: 400, w: 340, h: 738, rot: 6, r: 0, shadow: 0.4, img: ph("activity", "Activity with rate and reorder"), badge: [1500, 370, 80], cap: "ACTIVITY\nRATE AND REORDER", capAt: [1220, 1210, 340] },
    ],
  },
  next: NEXT["stanbic-valentines"],
};

export default blaccbook;
