import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStatement from "@/components/about/AboutStatement";
import Experience from "@/components/about/Experience";
import HowIWork from "@/components/about/HowIWork";
import Toolbox from "@/components/about/Toolbox";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "About · Davida Dzato",
  description: "Product designer and product manager in Accra, working remotely: experience, how I work and the tools I use.",
};

export default function AboutPage() {
  return (
    <main>
      <h1 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>About Davida Dzato</h1>
      <AboutIntro />
      <AboutStatement />
      <Experience />
      <HowIWork />
      <Toolbox />
      <Contact />
    </main>
  );
}
