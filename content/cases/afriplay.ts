import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/afriplay/";

const afriplay: CaseData = {
  slug: "afriplay",
  title: "AfriPlay and Glo TV · Case study",
  label: "(CASE 08) AFRIPLAY AND GLO TV",
  description: "A streaming platform for African film and TV, also released as Glo TV, across web, mobile and tablet.",
  colors: { brand: "#38145c", accent: "#fad61f", accentInk: "#141414", soft: "#ede5f7", dark: "#1a082b", tint: "#d1bfeb", stat: "#38145c" },
  hero: {
    w1: "AFRIPLAY",
    w2: "GLO TV",
    w1w: 989,
    w2w: 726,
    scale: true,
    stickerAt: [1180, 780],
    cards: [
      { x: 110, y: 264.1, w: 270, h: 640, rot: -7, r: 28, shadow: 0.25, img: { src: P + "hero-home.webp", alt: "AfriPlay home on a phone" } },
      { x: 459.2, y: 345.2, w: 840, h: 540, rot: 2, r: 14, shadow: 0.25, img: { src: P + "hero-desk.webp", alt: "AfriPlay home on the web" } },
      { x: 1332.6, y: 172.6, w: 300, h: 640, rot: 6, r: 28, shadow: 0.25, img: { src: P + "hero-prem.webp", alt: "AfriPremiere premiere countdown" } },
    ],
    sticker: { lines: ["CASE 08", "TWO", "BRANDS"] },
    meta: [["CLIENT", "AFRIPLAY · GLO TV"], ["ROLE", "UX · UI · HANDOFF"], ["YEAR", "2025"]],
    stat: "WEB · MOBILE · TABLET · LIVE TV · REELS",
  },
  overview: {
    lede: "AfriPlay is a streaming platform for African film and TV, also released as Glo TV. I designed it across web, mobile and tablet: live TV with a channel guide, short-form reels, premieres and pay-per-view rentals, then handed it over to developers.",
    phone: { x: 1296.8, y: 76.1, w: 370, h: 780, rot: 4, r: 32, shadow: 0.35, img: { src: P + "reels.webp", alt: "AfriShorts reels on a phone" } },
    facts: [["ROLE", "UX, UI, developer handoff"], ["PLATFORMS", "Web, mobile and tablet"], ["DELIVERED", "Home, live TV guide, reels, premieres, player"]],
  },
  upclose: {
    label: "(02) UP CLOSE",
    h: "One home that works for a quick clip or a whole evening.",
    height: 2123,
    textSize: 17,
    main: { x: 56, y: 340, w: 440, h: 880, r: 32, shadow: 0.18, phone: true, cap: "↑ THE HOME SCREEN ON A PHONE", img: { src: P + "home.webp", alt: "The home screen on a phone" } },
    details: [
      { text: "Shorts sit right under the hero, as round thumbnails you can tap through.", pin: [620, 340], text_: [662, 343, 980], zoom: { x: 620, y: 382, w: 1050, h: 423, r: 12, shadow: 0.16, img: { src: P + "desk-1.webp", alt: "Hero and shorts row on the web" } } },
      { text: "Keep watching shows how far you got, so you can pick up where you left off.", pin: [620, 855], text_: [662, 858, 980], zoom: { x: 620, y: 897, w: 1050, h: 254, r: 12, shadow: 0.16, img: { src: P + "desk-2.webp", alt: "Keep watching row with progress" } } },
      { text: "Glo TV gets its own banner in AfriPlay, with app store links and a QR code.", pin: [620, 1201], text_: [662, 1204, 980], zoom: { x: 620, y: 1243, w: 1050, h: 750, r: 12, shadow: 0.16, img: { src: P + "desk-3.webp", alt: "Glo TV banner with app store links and QR code" } } },
    ],
  },
  more: {
    label: "(03) MORE OF THE PRODUCT",
    h: "Live TV, reels, premieres and a player built for thumbs.",
    hw: 930,
    word: "STREAM",
    wordW: 1370,
    cards: [
      { x: 60.4, y: 395.7, w: 340, h: 740, rot: -6, r: 30, shadow: 0.4, img: { src: P + "more-reels.webp", alt: "Reels" }, badge: [360, 354, 80], cap: "REELS\nSHORT-FORM, SWIPE AND LIKE", capAt: [100, 1180, 340] },
      { x: 519.1, y: 310.6, w: 340, h: 740, rot: 3, r: 30, shadow: 0.4, img: { src: P + "more-epg.webp", alt: "Live TV channel guide" }, badge: [760, 294, 80], cap: "LIVE TV\nCHANNEL LIST AND GUIDE", capAt: [500, 1120, 340] },
      { x: 880.4, y: 428.4, w: 340, h: 740, rot: -3, r: 30, shadow: 0.4, img: { src: P + "more-prem.webp", alt: "AfriPremiere premieres and rentals" }, badge: [1160, 394, 80], cap: "AFRIPREMIERE\nPREMIERES AND RENTALS", capAt: [900, 1220, 340] },
      { x: 1337.7, y: 330.2, w: 340, h: 740, rot: 6, r: 30, shadow: 0.4, img: { src: P + "more-play.webp", alt: "Player with double-tap to like" }, badge: [1560, 324, 80], cap: "PLAYER\nDOUBLE-TAP TO LIKE", capAt: [1300, 1150, 340] },
    ],
  },
  next: NEXT["talent-hub"],
};

export default afriplay;
