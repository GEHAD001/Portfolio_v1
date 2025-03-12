import { AboutMe, Name } from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { Mood } from "@/components/Mood";
import { ModeToggle } from "@/components/ModeToggle";
import { DotPattern } from "@/components/ui/dot-pattern";
import { HorizontalScroll, Layer } from "@/components/HorizontalScroll";
import GoalsSection from "@/components/sections/GoalsSection";
import ContactSection from "@/components/sections/ContactSection";

function HomePage() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999]">
        <ModeToggle />
      </div>
      <Mood />
      <Layer className="relative ">
        <DotPattern className="opacity-20" />
        <Name name="Eng. Jihad" />
      </Layer>

      <HorizontalScroll layers={2} speed={200}>
        <Layer className="flex flex-col gap-12 justify-start items-start py-80 px-4 md:px-40">
          <AboutMe content="I'm Jihad Jadallah Hammad, a software developer born in 2000. I graduated from Omar Al-Mukhtar University, Faculty of Engineering, with a degree in Computer Engineering. I possess extensive general knowledge in technology, including operating systems, networking fundamentals, and a strong proficiency in programming." />
        </Layer>

        <Layer className="px-2">
          <TechStackSection />
        </Layer>
      </HorizontalScroll>

      <Layer className="relative  flex justify-center items-center">
        <SkillsSection />
      </Layer>

      <Layer className=" relative">
        <GoalsSection />
      </Layer>

      <ContactSection />
    </>
  );
}

export default HomePage;
