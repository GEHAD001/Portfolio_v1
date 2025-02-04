import { Hero } from "@/components/Hero";
import Journey from "@/components/Journey";
import TechStack from "@/components/TechStack";

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
    <div className="relative min-w-4 h-14 bg-gray-500/30 rounded-sm"></div>
  );
}
