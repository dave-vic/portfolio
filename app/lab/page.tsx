import type { Metadata } from "next";
import LabHero from "@/components/lab/LabHero";
import Experiments from "@/components/lab/Experiments";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Lab · Davida Dzato",
  description: "AI products I designed and built myself: Signal, VoiceScript, ORAD, and an article about shipping an AI agent.",
};

export default function LabPage() {
  return (
    <main>
      <LabHero />
      <Experiments />
      <Contact />
    </main>
  );
}
