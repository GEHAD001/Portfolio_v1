import { Blocks, Goal, GraduationCap } from "lucide-react";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function Journey() {
  return (
    <div className="relative flex w-full flex-col gap-12 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl px-8 py-20">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
      <CardLayout>
        <CardIcon>
          <GraduationCap className="w-full h-full stroke-1 motion-translate-y-loop-[10px] motion-duration-1000" />
        </CardIcon>
        <CardContent
          title="Graduation"
          content="I'm Graduation from OMU (Omar Almokhtar University) from Engineering College, at Computer Engineering, Year 2024."
        />
      </CardLayout>

      <CardLayout>
        <CardIcon>
          <Goal className="w-full h-full stroke-1 motion-translate-y-loop-[10px] motion-duration-1000" />
        </CardIcon>
        <CardContent
          title="Goal"
          content="My goal is to become a Software Engineer that produces high-performance products while maintaining UI & UX Touches."
        />
      </CardLayout>

      <CardLayout>
        <CardIcon>
          <Blocks className="w-full h-full stroke-1 motion-translate-y-loop-[10px] motion-duration-1000" />
        </CardIcon>
        <CardContent
          title="Projects"
          content="All the projects I worked on were learning purposes and needed to convert their environment from React JS to Next JS and then Deploy them."
        />
      </CardLayout>
    </div>
  );
}

function CardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 justify-between items-center border rounded-lg px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {children}
    </div>
  );
}

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex justify-center items-center p-2">
      <div className="relative w-full aspect-square">{children}</div>
    </div>
  );
}

function CardContent({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 text-center sm:text-left">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-gray-800">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default Journey;
