import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/hr-portal/";
const home = P + "home.webp";

/* Outcome "What I learned" / "What comes next" are still "[Your reflection…]" placeholders in Figma,
   so they are left out until the real text exists. */
const hrPortal: CaseData = {
  slug: "hr-portal",
  title: "Ninani HR portal · Case study",
  label: "(CASE 04) NINANI HR PORTAL",
  description: "An HR portal for six roles, from employee to COO, with Ninani Assist, an AI helper, built in.",
  colors: { brand: "#c72129", accent: "#fa8c80", accentInk: "#141414", soft: "#faebe8", dark: "#290a0d", tint: "#ffd9d4", stat: "#c72129", decision: "#c72129" },
  hero: {
    w1: "HR",
    w2: "PORTAL",
    w1w: 290,
    w2w: 796,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 12, shadow: 0.2, img: { src: P + "leave.webp", alt: "Leave balance and requests", crop: [0.9996, 1, 0, 0] } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 12, shadow: 0.2, img: { src: home, alt: "Employee home with leave status", crop: [1, 0.9999, 0, 0] } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 12, shadow: 0.2, img: { src: P + "tab.webp", alt: "Home on a tablet", crop: [1, 0.722, 0, 0] } },
    ],
    sticker: { lines: ["CASE 04", "SIX", "ROLES"] },
    meta: [["CLIENT", "THE NINANI GROUP · VIA INTERACTIVE DIGITAL"], ["ROLE", "UX · UI · AI FEATURE"], ["YEAR", "2025"]],
    stat: "LIVE · 6 ROLES · WEB · TABLET · MOBILE · AI HELPER",
  },
  overview: {
    lede: "The Ninani Group needed one place for its people to handle HR: leave, payslips, letters, onboarding and offboarding. I designed a portal for six roles, from employee to COO, with Ninani Assist, an AI helper, built in.",
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 28, shadow: 0.3, img: { src: P + "mob.webp", alt: "The portal on a phone", crop: [1, 0.2607, 0, 0] } },
    facts: [["ROLE", "UX / UI, role journeys, AI feature"], ["PLATFORMS", "Web, tablet and mobile"], ["DELIVERED", "Journeys for 6 roles, high-fidelity screens, AI helper"]],
  },
  problem: {
    label: "(02) THE PROBLEM",
    h: "Six roles, one HR process.",
    height: 1200,
    tagColor: "#bfbdb5",
    nums: [
      { n: "6", label: "ROLES", color: "#eeebe4" },
      { n: "3", label: "LEVELS OF APPROVAL", color: "#fa8c80" },
      { n: "3", label: "SCREEN SIZES", color: "#fa8c80" },
    ],
    notes: [
      { tag: "01", title: "Everyone sees HR differently", body: "An employee wants leave approved fast. A line manager, HR and the COO each need a different view of the same request.", x: 360, y: 420 },
      { tag: "02", title: "Approvals have many steps", body: "Leave moves through more than one approver, and everyone needs to see where it is.", x: 920, y: 560 },
      { tag: "03", title: "Private data, many devices", body: "Payslips and letters are personal, and people use the portal on desktop, tablet and phone.", x: 1450, y: 700 },
    ],
  },
  journey: {
    label: "(03) ONE LEAVE REQUEST, END TO END",
    h: "Ama asks for five days off.\nFour roles, one request.",
    rows: [
      { t: "DAY 1", who: "EMPLOYEE", title: "Signs in", body: "Two-step verification, then her own dashboard.", tag: "[ 2-STEP ✓ ]" },
      { t: "DAY 1", who: "EMPLOYEE", title: "Requests leave", body: "Dates and leave type, with her balance shown.", tag: "[ 5 DAYS ]" },
      { t: "DAY 1", tc: "#c72129", who: "NINANI ASSIST", title: "Answers a question", body: "“How many days do I have left?” answered in the portal.", tag: "[ ASK ]", tagc: "#c72129" },
      { t: "DAY 2", who: "LINE MANAGER", title: "Manager approves", body: "First approval, from the line manager.", tag: "[ LEVEL 1 ✓ ]" },
      { t: "DAY 2", who: "HR", title: "HR approves", body: "Second approval, checked against policy.", tag: "[ LEVEL 2 ✓ ]" },
      { t: "DAY 3", who: "COO", title: "Signs off", body: "Final approval where the policy needs it.", tag: "[ SIGNED ]" },
      { t: "DAY 3", tc: "#c72129", who: "EMPLOYEE", title: "Gets the letter", body: "Approval letter and updated balance in her documents.", tag: "[ LETTER ]" },
    ],
    img: { src: P + "tab.webp", alt: "Ama’s home on a tablet", crop: [1, 0.6753, 0, 0] },
    cap: "↑ AMA’S HOME ON A TABLET",
  },
  upclose: {
    label: "(04) UP CLOSE",
    h: "Small details that answer “where is my request?”",
    height: 1387,
    main: { x: 56, y: 320, w: 1000, h: 646, r: 14, shadow: 0.14, img: { src: home, alt: "Employee home", crop: [1, 1, 0, 0] } },
    details: [
      { text: "Waiting on: who has the request now, and a nudge if it stalls.", pin: [1120, 320], text_: [1160, 323, 500], onMain: [827, 519.5], zoom: { x: 1120, y: 361, w: 355, h: 300, r: 10, shadow: 0.14, img: { src: home, alt: "Waiting on card", crop: [0.195, 0.255, 0.775, 0.315] } } },
      { text: "Leave taken, booked, free to book and carried over, in one bar.", pin: [1120, 717], text_: [1160, 720, 500], onMain: [227, 461.4], zoom: { x: 1120, y: 758, w: 552, h: 54, r: 10, shadow: 0.14, img: { src: home, alt: "Leave balance bar", crop: [0.43, 0.065, 0.175, 0.225] } } },
      { text: "Ask for something: leave, letters and payslips, with Ninani Assist one tap away.", pin: [1120, 868], text_: [1160, 871, 500], onMain: [827, 706.8], zoom: { x: 1120, y: 931, w: 263, h: 300, r: 10, shadow: 0.14, img: { src: home, alt: "Ask for something panel", crop: [0.21, 0.37, 0.775, 0.605] } } },
    ],
  },
  decisions: {
    label: "(05) KEY DECISIONS",
    h: "Four decisions behind the portal.",
    items: [
      { title: "One request, a different view for each role.", body: "The employee sees status, the manager sees the team, HR sees policy and the COO sees what needs signing.", chip: { kind: "pill", a: "Employee · Manager · HR · COO", b: "Same request, four views" }, chipAt: [880, 444] },
      { title: "An AI helper inside the portal.", body: "Ninani Assist answers everyday HR questions where people already are, instead of another email to HR.", chip: { kind: "ba", before: "Email HR  ✕", after: "Ask in the portal  ✓" }, chipAt: [880, 644] },
      { title: "Two-step sign-in for private documents.", body: "Payslips and letters are personal, so sign-in asks for a second step.", chip: { kind: "outline", items: ["Password   ·   Code", "Two-step verification"] }, chipAt: [880, 820] },
      { title: "Every approval shows who has it now.", body: "A leave request moves through several approvers, so its status is always visible to the person who asked.", chip: { kind: "chain", done: ["Requested", "Manager", "HR"], todo: ["COO", "Approved"] }, chipAt: [880, 1044] },
    ],
  },
  more: {
    label: "(06) MORE OF THE PRODUCT",
    h: "Sign-in, leave, a profile and a team view, for every role.",
    word: "NINANI",
    wordW: 1120,
    cards: [
      { x: 59.3, y: 396.7, w: 360, h: 760, rot: -6, r: 14, shadow: 0.35, img: { src: P + "login.webp", alt: "Sign in", crop: [0.3062, 1, 0, 0] }, badge: [360, 354, 80], cap: "SIGN IN\nTWO-STEP VERIFICATION", capAt: [100, 1200, 360] },
      { x: 519.6, y: 310.1, w: 360, h: 760, rot: 3, r: 14, shadow: 0.35, img: { src: P + "leave.webp", alt: "Leave", crop: [0.3062, 1, 0, 0] }, badge: [760, 294, 80], cap: "LEAVE\nBALANCE AND REQUESTS", capAt: [500, 1140, 360] },
      { x: 879.9, y: 428.9, w: 360, h: 760, rot: -3, r: 14, shadow: 0.35, img: { src: P + "profile.webp", alt: "My profile", crop: [0.3062, 1, 0, 0] }, badge: [1160, 394, 80], cap: "MY PROFILE\nPERSONAL DETAILS", capAt: [900, 1240, 360] },
      { x: 1338.7, y: 329.1, w: 360, h: 760, rot: 6, r: 14, shadow: 0.35, img: { src: P + "team.webp", alt: "Team view", crop: [0.3062, 1, 0, 0] }, badge: [1560, 324, 80], cap: "TEAM VIEW\nFOR MANAGERS", capAt: [1300, 1170, 360] },
    ],
  },
  outcome: {
    label: "(07) OUTCOME",
    h: "One portal for every HR task, across six roles and three screen sizes.",
    nums: [["6", "roles, each with its own view"], ["6", "core HR journeys"], ["3", "screen sizes: web, tablet, mobile"], ["1", "AI helper, Ninani Assist"]],
    learned: "Designing one leave request for six roles taught me to start from the hand-offs, not the screens. Once every view answered who holds the request now and what they need to decide, each role’s screens got simpler.",
    next: "The portal is now live and in use at The Ninani Group. Next is watching how each role actually uses it, then refining the approval flow and Ninani Assist from what we learn.",
  },
  next: NEXT["misika"],
};

export default hrPortal;
