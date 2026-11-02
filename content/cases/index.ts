import type { CaseData } from "./types";
import claims from "./claims";
import talentHub from "./talent-hub";
import hrPortal from "./hr-portal";
import misika from "./misika";
import medshea from "./medshea";
import afriplay from "./afriplay";

export const CASES: Record<string, CaseData> = Object.fromEntries([claims, talentHub, hrPortal, misika, medshea, afriplay].map((c) => [c.slug, c]));

export const SLUGS = Object.keys(CASES);
