import { TECH_STACK } from "@/data/techStack";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function TechStack() {
  return (
    <div className="relative flex w-full flex-col gap-8 md:gap-12 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl px-4 md:px-8 py-16 md:py-20">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Tech Stack
      </h1>

      {TECH_STACK.map(({ techName, techInfo, Icon, className }) => (
        <TechLayout key={techName}>
          <TechIcon className={className}>
            <Icon size={30} />
          </TechIcon>
          <TechContent>{techInfo}</TechContent>
        </TechLayout>
      ))}
    </div>
  );
}

function TechLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full max-w-[32rem] border rounded-lg px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {children}
    </div>
  );
}

function TechIcon({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={twMerge(
        "absolute -top-6 -left-3 sm:-left-6 md:-top-10 md:-left-10",
        "bg-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
        "rounded-full border-[1px] flex justify-center items-center z-30",
        "shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

function TechContent({ children }: { children: ReactNode }) {
  return (
    <div className="text-center sm:text-left ml-8 ">
      <p className="text-sm sm:text-base  text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default TechStack;
