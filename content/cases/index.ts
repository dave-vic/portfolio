import type { CaseData } from "./types";
import claims from "./claims";
import talentHub from "./talent-hub";
import hrPortal from "./hr-portal";
import misika from "./misika";
import medshea from "./medshea";
import afriplay from "./afriplay";
import loco from "./loco";
import elysium from "./elysium";
import kbAkuffo from "./kb-akuffo";
import sway from "./sway";
import knowYourMomo from "./know-your-momo";
import blaccbook from "./blaccbook";
import stanbic from "./stanbic-valentines";

export const CASES: Record<string, CaseData> = Object.fromEntries([claims, talentHub, hrPortal, misika, medshea, afriplay, loco, elysium, kbAkuffo, sway, knowYourMomo, blaccbook, stanbic].map((c) => [c.slug, c]));

export const SLUGS = Object.keys(CASES);
