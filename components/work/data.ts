/** Rows of the Work index, copied from Figma "02 · Work · index" (desktop) and the tablet/mobile meta lines. */
export type Cat = "PRODUCT" | "DESIGN" | "BUSINESS" | "AI";

export type Thumb =
  | { kind: "img"; src: string; pos: "top" | "center" }
  | { kind: "shot"; d: string; t: string; m: string } // composed overlays, exported per breakpoint
  | { kind: "nda" };

export type Project = {
  n: string;
  title: string;
  desc: string;
  sector: string;
  role: string;
  year: string;
  meta: string; // short tablet / mobile line
  href?: string;
  cats: Cat[];
  thumb: Thumb;
};

const shot = (k: string): Thumb => ({ kind: "shot", d: `/work/c-${k}-d.jpg`, t: `/work/c-${k}-t.jpg`, m: `/work/c-${k}-m.jpg` });
const img = (k: string, pos: "top" | "center" = "center"): Thumb => ({ kind: "img", src: `/work/t-${k}.jpg`, pos });

export const FILTERS = ["EVERYTHING", "PRODUCT", "DESIGN", "BUSINESS", "AI"] as const;
export type Filter = (typeof FILTERS)[number];

export const PROJECTS: Project[] = [
  { n: "01", title: "Loco business platform", desc: "A point-of-sale and business management platform for small businesses in Tanzania: web dashboard, mobile admin, tablet POS and storefront.",
    sector: "BUSINESS SAAS", role: "LEAD DESIGNER · WEB · MOBILE · POS", year: "2026 · LIVE", meta: "BUSINESS SAAS · LEAD DESIGNER · 2026 · LIVE",
    href: "/work/loco", cats: ["PRODUCT", "DESIGN", "BUSINESS"], thumb: img("loco", "top") },
  { n: "02", title: "Ghana Talent Hub", desc: "A national platform matching students and graduates with employers: five products, plus a focused mode and a playful mode with streaks, XP and badges.",
    sector: "EDTECH · GOVTECH", role: "LEAD PRODUCT DESIGNER", year: "2025", meta: "EDTECH · GOVTECH · LEAD PRODUCT DESIGNER · 2025",
    href: "/work/talent-hub", cats: ["PRODUCT", "DESIGN", "AI"], thumb: img("talent") },
  { n: "03", title: "Court case management", desc: "Role-based workspaces for nine court roles, from cashier and registrar to bailiff and judge, with a phone version for the field.",
    sector: "GOVTECH · JUSTICE", role: "UX · UI · DESIGN SYSTEM", year: "2026", meta: "GOVTECH · UX · UI · DESIGN SYSTEM · 2026",
    cats: ["PRODUCT", "DESIGN"], thumb: { kind: "nda" } },
  { n: "04", title: "Treasury management system", desc: "One system where tellers, dealers, risk, settlements and finance work on the same live deal. Under NDA: walkthrough available on request.",
    sector: "BANKING · NDA", role: "JOURNEYS · FLOWS · UI · DESIGN SYSTEM", year: "2026", meta: "BANKING · NDA · JOURNEYS · UI · 2026",
    cats: ["PRODUCT", "DESIGN"], thumb: { kind: "nda" } },
  { n: "05", title: "Claims experience redesign", desc: "An audit and redesign of an insurer’s claims journey: 13 documented UX decisions, three personas and a phone-first flow.",
    sector: "INSURANCE · CASE STUDY", role: "UX AUDIT · RESEARCH · UX", year: "2026", meta: "INSURANCE · CASE STUDY · 2026",
    href: "/work/claims", cats: ["DESIGN", "PRODUCT"], thumb: img("claims") },
  { n: "06", title: "Ninani HR portal", desc: "An HR portal for six roles, from employee to COO: leave approvals, payslips, onboarding and an in-portal AI helper.",
    sector: "HR · ENTERPRISE", role: "UX · UI · AI FEATURE", year: "2025 · LIVE", meta: "HR · ENTERPRISE · UX · UI · 2025 · LIVE",
    href: "/work/hr-portal", cats: ["DESIGN", "AI"], thumb: img("hr") },
  { n: "07", title: "MiSika merchant loan", desc: "A loan merchants apply for on *171#, and the landing page that explains it in plain words.",
    sector: "FINTECH · USSD", role: "PRODUCT · UX · GROWTH", year: "2026 · LIVE", meta: "FINTECH · USSD · PRODUCT · UX · 2026 · LIVE",
    href: "/work/misika", cats: ["PRODUCT", "BUSINESS"], thumb: img("misika", "top") },
  { n: "08", title: "AfriPlay and Glo TV", desc: "One streaming platform in two brands, with live TV, short-form reels and pay-per-view rentals across web, mobile and tablet.",
    sector: "MEDIA · STREAMING", role: "UX · UI · HANDOFF", year: "2025", meta: "MEDIA · STREAMING · UX · UI · 2025",
    href: "/work/afriplay", cats: ["PRODUCT", "DESIGN"], thumb: shot("afriplay") },
  { n: "09", title: "BlaccBook", desc: "A mobile app for finding local businesses: search on a map, business pages, deals, table booking and reorders. Designed end to end, live on the App Store.",
    sector: "LOCAL BUSINESSES · USA", role: "UI/UX · WHOLE APP", year: "2023", meta: "LOCAL BUSINESSES · USA · WHOLE APP · 2023",
    href: "/work/blaccbook", cats: ["DESIGN", "BUSINESS"], thumb: shot("blacc") },
  { n: "10", title: "Elysium Tours", desc: "A travel booking site for Ghana: browse tours, plan a trip and book in a few steps, with a partner portal for tour operators.",
    sector: "TRAVEL · TOURISM", role: "UX · UI · WEB", year: "2025 · LIVE", meta: "TRAVEL · TOURISM · UX · UI · WEB · 2025 · LIVE",
    href: "/work/elysium", cats: ["DESIGN"], thumb: img("elysium", "top") },
  { n: "11", title: "MojoPay layaway", desc: "Layaway for MojoPay: saving towards one item in weekly payments, with on-track and behind-schedule states and reminders that help people catch up.",
    sector: "FINTECH · MOJOPAY", role: "UX · UI · STATES", year: "2026", meta: "FINTECH · MOJOPAY · UX · UI · STATES · 2026",
    cats: ["PRODUCT", "DESIGN"], thumb: shot("mojopay") },
  { n: "12", title: "KB Akuffo & Co.", desc: "A website for a Ghanaian law firm: practice areas, partner profiles, case studies, insights and a page to book a consultation.",
    sector: "LEGAL · WEBSITE", role: "UX · UI · WEB", year: "2025", meta: "LEGAL · WEBSITE · UX · UI · WEB · 2025",
    href: "/work/kb-akuffo", cats: ["DESIGN"], thumb: shot("kbakuffo") },
  { n: "13", title: "Sway", desc: "A mobile app that connects content creators with brand campaigns: sign up with your socials, track deliverables and earnings, and chat with campaign managers.",
    sector: "CREATOR ECONOMY", role: "UX · UI · MOBILE", year: "2026", meta: "CREATOR ECONOMY · UX · UI · MOBILE · 2026",
    href: "/work/sway", cats: ["DESIGN"], thumb: shot("sway") },
  { n: "14", title: "Medshea", desc: "A website for a Ghanaian brand of shea, essential oils and natural repellents: a brand site for everyday customers and a wholesale page with clear minimum orders and an order request form.",
    sector: "CONSUMER GOODS", role: "UX · UI · WEB", year: "2025", meta: "CONSUMER GOODS · UX · UI · WEB · 2025",
    href: "/work/medshea", cats: ["DESIGN", "BUSINESS"], thumb: img("medshea", "top") },
  { n: "15", title: "Know your MoMo", desc: "A mobile quiz for MTN MoMo users: questions about how they use MoMo, a surprise reward halfway through, and a win at the end.",
    sector: "FINTECH · MTN MOMO", role: "UX · UI · MOBILE", year: "2026", meta: "FINTECH · MTN MOMO · UX · UI · MOBILE · 2026",
    href: "/work/know-your-momo", cats: ["DESIGN", "BUSINESS"], thumb: shot("momo") },
  { n: "16", title: "Stanbic Valentine’s game", desc: "A Valentine’s Day game for Stanbic Bank: ten quick questions about how you feel loved, then your love language and a heart profile to share.",
    sector: "BANKING · CAMPAIGN", role: "UX · UI · MOBILE GAME", year: "2026 · LIVE", meta: "BANKING · CAMPAIGN · UX · UI · 2026 · LIVE",
    href: "/work/stanbic-valentines", cats: ["DESIGN", "BUSINESS"], thumb: shot("stanbic") },
  { n: "17", title: "GhIPSS website redesign", desc: "A personal redesign of the homepage for GhIPSS, which runs Ghana’s interbank payments: a clearer promise, the payment products in one place, and entry points for banks, regulators, retailers and developers.",
    sector: "FINTECH · PAYMENTS", role: "UX · UI · WEB · CONCEPT", year: "2026", meta: "FINTECH · PAYMENTS · UX · UI · CONCEPT · 2026",
    href: "/work/ghipss", cats: ["DESIGN", "PRODUCT"], thumb: img("ghipss", "top") },
];
