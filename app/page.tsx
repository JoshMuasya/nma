import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import ReachSection from "@/components/ReachSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <PracticeAreas />
      <CTASection />
      <ReachSection />
    </div>
  );
}
