import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import MapSection from "@/components/home/MapSection";
import Slider from "@/components/home/Slider";
import Process from "@/components/home/Process";
import LabGallery from "@/components/home/LabGallery";
import Statement from "@/components/home/Statement";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MapSection />
      <Slider />
      <Process />
      <LabGallery />
      <Statement />
      <Contact />
    </main>
  );
}
