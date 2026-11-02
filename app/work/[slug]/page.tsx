import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/case/CaseStudy";
import Contact from "@/components/home/Contact";
import { CASES, SLUGS } from "@/content/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};
  const img = c.hero.cards[1].img.src;
  return {
    title: `${c.title} · Davida Dzato`,
    description: c.description,
    openGraph: { title: `${c.title} · Davida Dzato`, description: c.description, images: img.endsWith(".webp") ? [img] : undefined },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  return (
    <main>
      <CaseStudy c={c} />
      <Contact />
    </main>
  );
}
