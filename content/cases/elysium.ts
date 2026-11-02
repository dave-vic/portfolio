import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/elysium/";

const elysium: CaseData = {
  slug: "elysium",
  title: "Elysium Tours · Case study",
  label: "(PROJECT 10) ELYSIUM TOURS",
  description: "A travel booking site for Ghana: browse tours, plan a trip and book in a few steps, with a partner portal for tour operators.",
  colors: { brand: "#6820c8", accent: "#d9c4f5", accentInk: "#241628", soft: "#f3ecf9", dark: "#241628", tint: "#e6d8f7", stat: "#6820c8" },
  hero: {
    w1: "ELYSIUM",
    w2: "TOURS",
    w1w: 923,
    w2w: 677,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "hero-l.webp", alt: "About page: experience, reconnect, belong" } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: P + "hero-c.webp", alt: "Home: discover Ghana with Elysium Tours" } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: P + "hero-r.webp", alt: "A tour page with price and booking box" } },
    ],
    sticker: { lines: ["PROJECT 10", "LIVE", "AND IN USE"] },
    meta: [["CLIENT", "SILVER ROCK TECHNOLOGIES"], ["ROLE", "UX · UI · WEB"], ["YEAR", "2025"]],
    stat: "4 PERSONAS · TOURS · BOOKING · PARTNER PORTAL",
  },
  overview: {
    lede: "Elysium Tours is a travel booking site for Ghana, live and in use. Travellers browse tours, plan a trip and book in a few steps, and tour operators get a partner portal of their own. I started from research: four personas and their journeys.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 16, shadow: 0.3, img: { src: P + "phone.webp", alt: "Tour listings" } },
    facts: [["ROLE", "UX, UI, web"], ["PLATFORMS", "Website and partner portal"], ["DELIVERED", "Personas and journeys, tour pages, booking, sign-in"]],
  },
  more: {
    label: "(02) MORE OF THE PRODUCT",
    h: "From a first look to a booked trip: sign-in, tours and tour pages.",
    hw: 960,
    word: "EXPLORE",
    wordW: 1444,
    cards: [
      { x: 59.3, y: 396.7, w: 360, h: 760, rot: -6, r: 14, shadow: 0.35, img: { src: P + "login.webp", alt: "Log in or sign up" }, badge: [360, 354, 80], cap: "SIGN IN\nGOOGLE, APPLE OR EMAIL", capAt: [100, 1200, 360] },
      { x: 519.6, y: 310.1, w: 360, h: 760, rot: 3, r: 14, shadow: 0.35, img: { src: P + "tours.webp", alt: "Tours to browse" }, badge: [760, 294, 80], cap: "TOURS\nA GRID TO BROWSE AND COMPARE", capAt: [500, 1140, 360] },
      { x: 879.9, y: 428.9, w: 360, h: 760, rot: -3, r: 14, shadow: 0.35, img: { src: P + "tour.webp", alt: "Tour page with itinerary and reviews" }, badge: [1160, 394, 80], cap: "TOUR PAGE\nITINERARY, GUIDE AND REVIEWS", capAt: [900, 1240, 360] },
      { x: 1338.7, y: 329.1, w: 360, h: 760, rot: 6, r: 14, shadow: 0.35, img: { src: P + "about.webp", alt: "About: rooted in culture" }, badge: [1560, 324, 80], cap: "ABOUT\nROOTED IN CULTURE", capAt: [1300, 1170, 360] },
    ],
  },
  next: NEXT["kb-akuffo"],
};

export default elysium;
