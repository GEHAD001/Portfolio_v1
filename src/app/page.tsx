import { Hero } from "@/components/Hero";
import Journey from "@/components/Journey";
import TechStack from "@/components/TechStack";
import { Grab, Hand } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center">
      <Hero />
      <SectionConnector />
      <Journey />
      <SectionConnector />
      <TechStack />
    </main>
  );
}

function SectionConnector() {
  return (
    <div className="relative min-w-4 h-14 bg-gray-500/30 rounded-sm">
      <div className="absolute -top-[30] -left-[0.6rem]">
        <Hand className="size-8 stroke-[1px]" />
      </div>
      <div className="absolute -bottom-[30] -left-2  z-20 rotate-180">
        <Grab className="size-8 stroke-[1px]" />
      </div>
    </div>
  );
}
