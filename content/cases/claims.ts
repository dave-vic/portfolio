import { NEXT } from "./next";
import type { CaseData } from "./types";

const P = "/cases/claims/";
const start = P + "start.webp";

const claims: CaseData = {
  slug: "claims",
  title: "Claims redesign · Case study",
  label: "(CASE 02) CLAIMS REDESIGN",
  description: "An audit and phone-first redesign of a motor insurance claims journey, from “Do I qualify?” to “You’ve been paid”.",
  colors: { brand: "#0869b8", accent: "#a84014", accentInk: "#ffffff", soft: "#d9e8f7", dark: "#081c33", tint: "#d9e8f7", stat: "#a84014", outcome: "#a84014" },
  hero: {
    w1: "CLAIMS",
    w2: "REDESIGN",
    w1w: 823,
    w2w: 1019,
    cards: [
      { x: 44.1, y: 335.1, w: 600, h: 388, rot: -7, r: 10, shadow: 0.22, img: { src: P + "track.webp", alt: "Track your claim screen" } },
      { x: 479, y: 365.5, w: 820, h: 530, rot: 2, r: 10, shadow: 0.22, img: { src: start, alt: "Let’s start your claim screen", crop: [1, 0.9999, 0, 0] } },
      { x: 1321.5, y: 161.1, w: 330, h: 620, rot: 6, r: 10, shadow: 0.22, img: { src: P + "dir-a.webp", alt: "Landing page, direction A", crop: [1, 0.2963, 0, 0] } },
    ],
    sticker: { lines: ["CASE 02", "SELF-", "INITIATED"] },
    meta: [["CLIENT", "ENTERPRISE INSURANCE, GHANA"], ["ROLE", "UX AUDIT · RESEARCH · UX / UI"], ["YEAR", "2026"]],
    stat: "13 DECISIONS · 9 STEPS · 3 PERSONAS",
  },
  overview: {
    lede: "Claimxpress promised same-day payouts, then hid the rules two pop-ups in. I audited the live journey and redesigned it as one phone-first road from “Do I qualify?” to “You’ve been paid”.",
    size: 50,
    ledeW: 1000,
    phone: { x: 1286, y: 75.8, w: 380, h: 760, rot: 4, r: 28, shadow: 0.22, img: { src: P + "dir-c.webp", alt: "Landing page on a phone", crop: [1, 0.4531, 0, 0] } },
    facts: [["ROLE", "UX audit, research, UX / UI, design system"], ["PLATFORMS", "Responsive web, phone first, SMS"], ["DELIVERED", "Audit, 13 UX decisions, 3 personas, journey map, hi-fi flow"]],
  },
  problem: {
    label: "(02) THE PROBLEM",
    h: "What the live portal asked of Kofi.",
    height: 1199,
    tagColor: "#d9e8f7",
    nums: [
      { n: "8", label: "STEPS", color: "#eeebe4" },
      { n: "2", label: "POP-UPS", color: "#a84014" },
      { n: "3", label: "CONTRADICTIONS", color: "#5c9ef2" },
    ],
    notes: [
      { tag: "BEFORE 01", title: "Rules hidden until pop-up 2", body: "Same day was promised on amount alone. Drivable, own damage, documents and the branch visit appeared two clicks later.", x: 360, y: 420 },
      { tag: "BEFORE 02", title: "Sign-in that contradicts itself", body: "The landing page asked for a policy number, sign-in asked for a car registration. Failed lookups gave no help.", x: 920, y: 560 },
      { tag: "BEFORE 03", title: "A form that answers for you", body: "Every Yes / No was pre-ticked, even “Any deaths: No”, across 20 ungrouped fields ending in “Send”.", x: 1450, y: 700 },
    ],
  },
  journey: {
    label: "(03) ONE CLAIM, END TO END",
    h: "Kofi bumps his car at 7:40 am.\nOne road. No pop-ups.",
    hw: 900,
    rows: [
      { t: "07:42", who: "KOFI", title: "Checks he qualifies", body: "All five same-day rules shown before he starts.", tag: "[ I QUALIFY ]" },
      { t: "07:44", who: "KOFI", title: "Starts a claim", body: "“What happened?” in plain words: accident, theft, fire, flood.", tag: "[ MOTOR ACCIDENT ]" },
      { t: "07:45", who: "PORTAL", title: "Finds his policy", body: "Car registration plus an SMS code. No password.", tag: "[ GR 5122-19 ]" },
      { t: "07:47", tc: "#a84014", who: "KOFI", title: "Sends a quick notice", body: "Two minutes, then a reference by SMS. He can stop here.", tag: "[ CXP-2026-004812 ]", tagc: "#a84014" },
      { t: "EVE", who: "KOFI", title: "Finishes the claim", body: "Four short steps that save and resume from the SMS link.", tag: "[ SAVED ]" },
      { t: "DAY 2", who: "BRANCH", title: "Inspects the car", body: "A booked slot at Airport or Kumasi, with hours and a list.", tag: "[ 11:00 BOOKED ]" },
      { t: "PAID", tc: "#0869b8", who: "CLAIMS TEAM", title: "Pays out the same day", body: "The timeline shows every step and the 30-day deadline.", tag: "[ DONE ]" },
    ],
    img: { src: P + "dir-c.webp", alt: "How it works, as Kofi sees it on the page", crop: [1, 0.3982, 0, 0.43] },
    cap: "↑ HOW IT WORKS, AS KOFI SEES IT ON THE PAGE",
  },
  upclose: {
    label: "(04) UP CLOSE",
    h: "Small details that remove doubt.",
    height: 1147,
    main: { x: 56, y: 320, w: 1000, h: 646, r: 14, shadow: 0.14, img: { src: start, alt: "Let’s start your claim screen", cover: true } },
    details: [
      { text: "Five steps, always in view: Details, Incident, Photos, Same day, Submit.", pin: [1120, 320], text_: [1160, 323, 500], onMain: [116, 402.9], zoom: { x: 1120, y: 383, w: 552, h: 63, r: 10, shadow: 0.14, img: { src: start, alt: "The five steps", crop: [0.37, 0.065, 0.074, 0.15] } } },
      { text: "Car registration or mobile number. The same two keys everywhere, never a policy number.", pin: [1120, 502], text_: [1160, 505, 500], onMain: [116, 622.5], zoom: { x: 1120, y: 565, w: 552, h: 152, r: 10, shadow: 0.14, img: { src: start, alt: "Car registration or mobile number fields", crop: [0.3635, 0.155, 0.074, 0.49] } } },
      { text: "“No password needed · About 2 minutes” answers the two worries before they come up.", pin: [1120, 773], text_: [1160, 776, 500], onMain: [532, 761.4], zoom: { x: 1120, y: 836, w: 552, h: 155, r: 10, shadow: 0.14, img: { src: start, alt: "No password needed, about 2 minutes", crop: [0.45, 0.195, 0.49, 0.705] } } },
    ],
  },
  decisions: {
    label: "(05) KEY DECISIONS",
    h: "Four of the thirteen decisions.",
    items: [
      { title: "Show all five same-day rules before the customer starts.", body: "Disappointment comes from a broken promise. The GH₵ 7,500 limit, a drivable car, own damage, documents and the branch visit are all on the page.", chip: { kind: "pill", a: "5 of 5 rules met · Same day", b: "Branch visit · shown up front" }, chipAt: [880, 468] },
      { title: "The quick notice becomes step 1 of the claim.", body: "No more choosing between “Claim Request” and “FNOL” at the most stressful moment. Two minutes in, a reference arrives by SMS.", chip: { kind: "ba", before: "Pick a form  ✕", after: "Ref in 2 min  ✓" }, chipAt: [1383, 574] },
      { title: "No pre-ticked answers.", body: "People in a hurry accept defaults as answers. Every Yes / No, including “Any deaths”, now needs an explicit choice.", chip: { kind: "outline", items: ["Any deaths?   Yes   No", "Required · nothing pre-selected"] }, chipAt: [880, 844] },
      { title: "One status timeline, with a 30-day countdown.", body: "Tracking was explained three different ways and the deadline sat in a guide. Now every claim shows where it is and what is still needed.", chip: { kind: "chain", done: ["Reported", "Documents", "Inspection"], todo: ["Payment", "Paid"] }, chipAt: [880, 1044] },
    ],
  },
  more: {
    label: "(06) THREE DIRECTIONS",
    h: "Three directions for the landing page, from product-led to people-first.",
    word: "3 WAYS IN",
    wordW: 1740,
    cards: [
      { x: 101.8, y: 380, w: 430, h: 900, rot: -6, r: 14, shadow: 0.35, img: { src: P + "dir-a.webp", alt: "Direction A: report it in minutes", crop: [1, 0.3301, 0, 0] }, badge: [480, 330, 90], cap: "REPORT IT IN MINUTES\nPRODUCT CARDS UP FRONT", capAt: [150, 1320, 430] },
      { x: 665.6, y: 292.2, w: 430, h: 900, rot: 2, r: 14, shadow: 0.35, img: { src: P + "dir-b.webp", alt: "Direction B: report your claim in minutes", crop: [1, 0.419, 0, 0] }, badge: [980, 270, 90], cap: "REPORT YOUR CLAIM IN MINUTES\nA CENTURY OF CLAIMS", capAt: [650, 1260, 430] },
      { x: 1195.9, y: 375.1, w: 430, h: 900, rot: 6, r: 14, shadow: 0.35, img: { src: P + "dir-c.webp", alt: "Direction C: report it today", crop: [1, 0.4742, 0, 0] }, badge: [1480, 370, 90], cap: "REPORT IT TODAY\nPEOPLE AND PHOTOGRAPHY FIRST", capAt: [1150, 1360, 430] },
    ],
  },
  outcome: {
    label: "(07) OUTCOME",
    h: "A redesign the claims team can ship in stages, starting with fixes that need no design.",
    nums: [["13", "documented UX decisions"], ["9", "steps from accident to payout"], ["3", "personas to validate"], ["½", "the old landing page length"]],
    learned: "Tying every decision to an audit finding turned design opinions into a list the claims team could act on, starting with same-week developer fixes.",
    next: "Answers from the claims team on SMS codes, branch slots and payout methods, then five interviews with recent claimants to validate the personas.",
  },
  next: NEXT["hr-portal"],
};

export default claims;
