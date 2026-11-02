/** Data model for the case-study template. Desktop coordinates are Figma pixels in the 1728 frame. */

/** An image fill. `crop` is Figma's CROP image transform [scaleX, scaleY, offsetX, offsetY]
 *  (the visible part of the source, as fractions of it). `cover` = Figma FILL mode. */
export type Img = { src: string; alt?: string; crop?: [number, number, number, number]; cover?: boolean; alpha?: boolean };

/** A placed screen. x/y/w/h are the unrotated box, rot is Figma's rotation (counter-clockwise degrees). */
export type Shot = { x: number; y: number; w: number; h: number; rot?: number; r: number; img: Img; shadow?: number };

export type Chip =
  | { kind: "pill"; a: string; b: string }
  | { kind: "ba"; before: string; after: string }
  | { kind: "outline"; items: string[] }
  | { kind: "chain"; done: string[]; todo: string[] };

export type CaseData = {
  slug: string;
  title: string; // page title
  label: string; // "(CASE 03) GHANA TALENT HUB"
  description: string;
  colors: {
    brand: string; // overview band / outcome
    accent: string; // sticker, card badges, big word
    accentInk: string; // text on accent
    soft: string; // up-close background
    dark: string; // more-of-the-product background
    tint: string; // light text on brand / dark (fact labels, captions)
    stat: string; // hero stat line
    outcome?: string; // outcome background when it differs from brand
    decision?: string; // decision numbers
  };
  hero: {
    w1: string;
    w2: string;
    w1w: number; // rendered widths at 300px (Figma), used to fit the words on tablet / mobile
    w2w: number;
    scale?: boolean; // tablet / mobile collage = the desktop collage scaled (for non-standard screen shapes)
    stickerAt?: [number, number];
    cards: [Shot, Shot, Shot]; // left, centre, right (painting order: left, right, centre)
    sticker: { lines: string[]; y?: number };
    meta: [string, string][];
    stat: string;
  };
  overview: { lede: string; size?: number; ledeW?: number; phone: Shot; facts: [string, string][] };
  problem?: {
    label: string;
    h: string;
    nums: { n: string; label: string; color: string }[];
    notes: { tag: string; title: string; body: string; x: number; y: number; w?: number }[];
    tagColor: string;
    height: number;
  };
  journey?: {
    label: string;
    h: string; // use \n for line breaks
    hw?: number;
    rows: { t: string; tc?: string; who: string; title: string; body: string; tag: string; tagc?: string }[];
    img: Img;
    cap: string;
  };
  upclose?: {
    label: string;
    h: string;
    height: number;
    main: Shot & { cap?: string; phone?: boolean };
    textSize?: number;
    details: { text: string; pin: [number, number]; text_: [number, number, number]; zoom: Shot; onMain?: [number, number] }[];
  };
  decisions?: {
    label: string;
    h: string;
    items: { title: string; body: string; chip: Chip; chipAt: [number, number] }[];
  };
  more: {
    label: string;
    h: string;
    hw?: number;
    word: string;
    wordW: number; // rendered width at 460px
    cards: (Shot & { badge: [number, number, number]; cap: string; capAt: [number, number, number] })[];
  };
  outcome?: {
    label: string;
    h: string;
    nums: [string, string][];
    learned?: string; // omitted when still a placeholder
    next?: string;
  };
  next: { num: string; title: string[]; desc: string; href: string; img?: Shot };
};
