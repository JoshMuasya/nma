import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
}
