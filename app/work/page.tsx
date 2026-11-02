import type { Metadata } from "next";
import WorkHeader from "@/components/work/WorkHeader";
import WorkIndex from "@/components/work/WorkIndex";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Work · Davida Dzato",
  description: "Fifteen projects from 2022 to 2026: product, UX and UI work across fintech, govtech, HR, media, insurance and more.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkHeader />
      <WorkIndex />
      <Contact />
    </main>
  );
}
