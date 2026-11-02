/** "Next case study" cards. The cases run in a loop:
 *  Talent Hub → Claims → HR portal → MiSika → Medshea → AfriPlay → Talent Hub */
const box = { x: 1173.7, y: 41.1, w: 520, h: 640, rot: 4, r: 16, shadow: 0.25 };
type Crop = [number, number, number, number];

export const NEXT = {
  claims: { num: "05", title: ["Claims", "redesign  →"], href: "/work/claims",
    desc: "An audit and phone-first redesign of a motor insurance claims journey, with 13 documented UX decisions.",
    img: { ...box, img: { src: "/cases/claims/start.webp", alt: "Claims redesign start screen", crop: [0.525, 1, 0, 0] as Crop } } },
  "hr-portal": { num: "06", title: ["Ninani", "HR portal  →"], href: "/work/hr-portal",
    desc: "An HR portal for six roles, from employee to COO, with an AI helper on hand.",
    img: { ...box, img: { src: "/cases/hr-portal/home.webp", alt: "Ninani HR portal home", crop: [0.525, 1, 0, 0] as Crop } } },
  misika: { num: "07", title: ["MiSika", "merchant loan  →"], href: "/work/misika",
    desc: "A loan merchants apply for on *171#, and the landing page that explains it.",
    img: { ...box, img: { src: "/cases/misika/landing.webp", alt: "MiSika landing page", crop: [1, 0.2686, 0, 0] as Crop } } },
  medshea: { num: "14", title: ["Medshea", "brand + wholesale  →"], href: "/work/medshea",
    desc: "A brand and wholesale website for a Ghanaian maker of shea butter, essential oils and natural repellents.",
    img: { ...box, img: { src: "/cases/medshea/home.webp", alt: "Medshea home page", crop: [1, 0.3345, 0, 0] as Crop } } },
  afriplay: { num: "08", title: ["AfriPlay", "and Glo TV  →"], href: "/work/afriplay",
    desc: "One streaming platform in two brands, with live TV, reels and pay-per-view rentals.",
    img: { ...box, img: { src: "/cases/afriplay/hero-desk.webp", alt: "AfriPlay home on desktop", crop: [0.522, 1, 0, 0] as Crop } } },
  "talent-hub": { num: "02", title: ["Ghana", "Talent Hub  →"], href: "/work/talent-hub",
    desc: "A national platform matching students and graduates with employers, in a focused mode and a playful one.",
    img: { ...box, img: { src: "/cases/talent-hub/welcome.webp", alt: "Ghana Talent Hub welcome screen", crop: [0.525, 1, 0, 0] as Crop } } },
};
