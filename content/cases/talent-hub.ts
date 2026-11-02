import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/talent-hub/";
const people = P + "people.webp";

export const MISIKA_NEXT = {
  title: ["MiSika", "merchant loan  →"],
  desc: "A loan merchants apply for on *171#, and the landing page that explains it.",
  href: "/work/misika",
  img: { x: 1173.7, y: 41.1, w: 520, h: 640, rot: 4, r: 16, shadow: 0.25, img: { src: "/cases/misika/landing.webp", alt: "MiSika landing page", crop: [1, 0.2686, 0, 0] as [number, number, number, number] } },
};

const talentHub: CaseData = {
  slug: "talent-hub",
  title: "Ghana Talent Hub · Case study",
  label: "(CASE 03) GHANA TALENT HUB",
  description: "A national platform that matches students and graduates with employers through assessments, verified skills and matched opportunities.",
  colors: { brand: "#215c33", accent: "#f5c738", accentInk: "#141414", soft: "#e3eddb", dark: "#0f291a", tint: "#cce5c7", stat: "#a84014" },
  hero: {
    w1: "TALENT",
    w2: "HUB",
    w1w: 757,
    w2w: 430,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "vibe.webp", alt: "Pick your vibe: avatar set-up in Playful mode", crop: [0.9853, 1, 0, 0] } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: P + "welcome.webp", alt: "Welcome screen: here is what happens next", crop: [1, 0.9999, 0, 0] } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: P + "skills.webp", alt: "Skills Lab dashboard", crop: [0.6655, 1, 0, 0] } },
    ],
    sticker: { lines: ["CASE 03", "LEAD", "DESIGNER"] },
    meta: [["CLIENT", "SILVER ROCK TECHNOLOGIES, GHANA"], ["ROLE", "LEAD PRODUCT DESIGNER"], ["YEAR", "2025 – 2026"]],
    stat: "5 AUDIENCES · 2 MODES · WCAG 2.1 AA",
  },
  overview: {
    lede: "Ghana Talent Hub is a national platform that matches students and graduates with employers through assessments, verified skills and matched opportunities. I lead its design across five products, from a student’s first sign-up to a government dashboard.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 28, shadow: 0.3, img: { src: P + "skills.webp", alt: "Skills Lab on a phone-sized screen", crop: [0.6252, 1, 0, 0] } },
    facts: [["ROLE", "Lead product designer: UX, UI, design system"], ["PLATFORMS", "Web, tablet and mobile, built for low data"], ["DELIVERED", "5 products, 2 modes, design system, accessibility spec"]],
  },
  problem: {
    label: "(02) THE PROBLEM",
    h: "One platform, five very different users.",
    height: 1200,
    tagColor: "#bfbdb5",
    nums: [
      { n: "5", label: "AUDIENCES", color: "#eeebe4" },
      { n: "2", label: "WAYS TRUST HAS TO WORK", color: "#f5c738" },
      { n: "18", label: "THE AGE THAT CHANGES EVERYTHING", color: "#8ccc73" },
    ],
    notes: [
      { tag: "01", title: "Talents start from different places", body: "Some have a CV and a portfolio, some have neither, and some are under 18 and need a parent’s consent before they begin.", x: 360, y: 420 },
      { tag: "02", title: "Trust has to work both ways", body: "Recruiters need skills they can believe. Parents need to see and control what their ward shares.", x: 920, y: 560 },
      { tag: "03", title: "Built for real phones and data", body: "Many users are on older Android phones and mobile data, so every screen has to be light, fast and accessible.", x: 1180, y: 330, w: 300 },
    ],
  },
  journey: {
    label: "(03) ONE TALENT, END TO END",
    h: "Kofi signs up on Monday.\nBy Thursday, he has an interview.",
    rows: [
      { t: "MON", who: "KOFI", title: "Signs up", body: "Picks his role, then a short onboarding in stages.", tag: "[ TALENT · 18+ ]" },
      { t: "MON", who: "KOFI", title: "Builds his profile", body: "Interests, skills, work and a pitch, unlocked with XP.", tag: "[ LEVEL 5 ]" },
      { t: "TUE", who: "CAREER BUDDY", title: "Gets guidance", body: "The AI career guide suggests what to do next.", tag: "[ CAREER BUDDY ]" },
      { t: "TUE", who: "KOFI", title: "Proves a skill", body: "A Skills Lab assessment turns a claim into a verified skill.", tag: "[ REACT · VERIFIED ]" },
      { t: "WED", tc: "#a84014", who: "KOFI", title: "Applies", body: "Roles matched to his verified skills, goals and pitch.", tag: "[ 96% MATCH ]", tagc: "#a84014" },
      { t: "WED", who: "RECRUITER", title: "Shortlists him", body: "Sees verified skills, not just claims on a CV.", tag: "[ SHORTLISTED ]" },
      { t: "THU", tc: "#215c33", who: "KOFI", title: "Gets the interview", body: "Then a mock interview with Career Buddy the night before.", tag: "[ INTERVIEW · THU ]" },
    ],
    img: { src: people, alt: "Find your people: clubs picked from Kofi’s skills", crop: [0.4109, 1, 0, 0] },
    cap: "↑ FIND YOUR PEOPLE · CLUBS PICKED FROM HIS SKILLS",
  },
  upclose: {
    label: "(04) UP CLOSE",
    h: "Small details that keep people coming back.",
    height: 1352,
    main: { x: 56, y: 320, w: 1000, h: 448, r: 14, shadow: 0.14, img: { src: people, alt: "Find your people dashboard", crop: [1, 0.62, 0, 0] } },
    details: [
      { text: "Focused or Playful: one switch in the top bar, next to the streak and XP.", pin: [1120, 320], text_: [1160, 323, 500], onMain: [651, 357.9], zoom: { x: 1120, y: 361, w: 552, h: 51, r: 10, shadow: 0.14, img: { src: people, alt: "Focused and Playful switch in the top bar", crop: [0.45, 0.058, 0.535, 0.058] } } },
      { text: "Profile progress and stats on the left, so the next step is always in view.", pin: [1120, 474], text_: [1160, 477, 500], onMain: [57, 402.7], zoom: { x: 1120, y: 515, w: 252, h: 300, r: 10, shadow: 0.14, img: { src: people, alt: "Profile progress card", crop: [0.2, 0.33, 0.005, 0.12] } } },
      { text: "Clubs picked from your skills, each with its size and how active it is.", pin: [1120, 863], text_: [1160, 866, 500], onMain: [257, 554.5], zoom: { x: 1120, y: 904, w: 340, h: 300, r: 10, shadow: 0.14, img: { src: people, alt: "Club cards picked for you", crop: [0.27, 0.33, 0.205, 0.33] } } },
    ],
  },
  decisions: {
    label: "(05) KEY DECISIONS",
    h: "Four decisions that shaped the platform.",
    items: [
      { title: "Two modes, one product.", body: "Focused mode keeps the dashboard calm. Playful mode adds streaks, badges and XP for users who need a push. Same data, one switch at the top.", chip: { kind: "pill", a: "Focused  ·  Playful", b: "Same layout, one switch" }, chipAt: [880, 468] },
      { title: "Verified skills over self-reported ones.", body: "A skill is marked verified only after a Skills Lab assessment, so recruiters can trust what they see.", chip: { kind: "ba", before: "“I know React”  ✕", after: "React · verified  ✓" }, chipAt: [880, 644] },
      { title: "Parents stay in control for under-18s.", body: "Under-18s sign up with a parent’s details. Parents can link a ward, approve, flag and opt out.", chip: { kind: "outline", items: ["Approve   Flag   Opt out", "Parent consent required"] }, chipAt: [880, 844] },
      { title: "Privacy built into the national dashboard.", body: "Government and partners see anonymised regional data, and any area with too few people is hidden so nobody can be identified.", chip: { kind: "chain", done: ["Region", "Anonymised", "Threshold"], todo: ["Small areas hidden", "Published"] }, chipAt: [880, 1044] },
    ],
  },
  more: {
    label: "(06) MORE OF THE PRODUCT",
    h: "Learning, messages and real opportunities, all in the same place.",
    word: "PLAYFUL",
    wordW: 1403,
    cards: [
      { x: 59.3, y: 396.7, w: 360, h: 760, rot: -6, r: 14, shadow: 0.35, img: { src: P + "skills.webp", alt: "Skills Lab", crop: [0.5922, 1, 0, 0] }, badge: [360, 354, 80], cap: "SKILLS LAB\nPRACTISE AND EARN XP", capAt: [100, 1200, 360] },
      { x: 519.6, y: 310.1, w: 360, h: 760, rot: 3, r: 14, shadow: 0.35, img: { src: P + "msgs.webp", alt: "Messages", crop: [0.3065, 1, 0, 0] }, badge: [760, 294, 80], cap: "MESSAGES\nMENTORS AND YOUR CREW", capAt: [500, 1140, 360] },
      { x: 879.9, y: 428.9, w: 360, h: 760, rot: -3, r: 14, shadow: 0.35, img: { src: P + "learn.webp", alt: "My learning", crop: [0.3062, 1, 0, 0] }, badge: [1160, 394, 80], cap: "MY LEARNING\nCOURSES AND PROGRESS", capAt: [900, 1240, 360] },
      { x: 1338.7, y: 329.1, w: 360, h: 760, rot: 6, r: 14, shadow: 0.35, img: { src: P + "opps.webp", alt: "Opportunities", crop: [0.3062, 1, 0, 0] }, badge: [1560, 324, 80], cap: "OPPORTUNITIES\nMATCHED TO YOU", capAt: [1300, 1170, 360] },
    ],
  },
  outcome: {
    label: "(07) OUTCOME",
    h: "A national platform designed end to end, for five audiences and every kind of phone.",
    nums: [["5", "audiences, each with its own product"], ["2", "modes: Focused and Playful"], ["AA", "WCAG 2.1 accessibility target"], ["1", "AI career guide, Career Buddy"]],
    learned: "Designing for the hardest cases first, under-18s and older phones, made the platform simpler for everyone else.",
    next: "The wallet, clubs and messaging, then usability testing with students and schools.",
  },
  next: NEXT["claims"],
};

export default talentHub;
