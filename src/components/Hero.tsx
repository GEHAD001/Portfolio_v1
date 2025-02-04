import { Meteors } from "@/components/ui/meteors";
import MagicCard from "./MagicCard";
import { CodeXml, DraftingCompass } from "lucide-react";

import { Typing } from "./Typing";

export function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background px-4 py-8 md:shadow-xl">
      <Meteors number={30} />

      <div className="relative z-20 flex flex-col items-center text-center">
        <div className="mt-5 sm:mt-0 md:mb-8 lg:mb-12 space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            <span className="block">Hey, I&apos;m Gehad Gadallah</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
              <Typing
                words={[
                  "Front-End Developer",
                  "Simple Designer",
                  "Productivity Enthusiast",
                ]}
              />
            </span>
          </h1>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl px-4"
          suppressHydrationWarning
        >
          <MagicCard className="group relative aspect-square w-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4 sm:gap-4 md:gap-5">
              <div className="w-full flex items-center justify-center  transition-all duration-300 group-hover:scale-110">
                <CodeXml className="size-20 sm:size-14 lg:size-20 text-blue-300" />
              </div>
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-medium italic text-foreground">
                Developer
              </span>
            </div>
          </MagicCard>

          <MagicCard className="group relative aspect-square w-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4 sm:gap-4 md:gap-5">
              <div className="w-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <DraftingCompass className="size-20 sm:size-14 lg:size-20 text-orange-300" />
              </div>
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-medium italic text-foreground">
                Designer
              </span>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}
