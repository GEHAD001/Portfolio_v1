"use client";

import { Props, TECH_STACK } from "@/data/techStack";
import { FunctionComponent } from "react";
import { motion } from "motion/react";

export default function TechStackSection() {
  return (
    <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 w-screen h-screen relative transition-colors duration-300">
      {TECH_STACK.map((technology) => (
        <Tech {...technology} key={technology.name} />
      ))}
      <TechStackWord />
    </section>
  );
}

function Tech({
  name,
  about,
  className,
  Icon,
}: {
  name: string;
  about: string;
  url: string;
  className?: string;
  Icon: FunctionComponent<Props>;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "ease", stiffness: 300 }}
      className={`flex flex-row md:flex-col gap-4 md:py-8 justify-center items-center relative border-b md:border-b-0 md:border-r dark:border-white/10 ${className} transition-all duration-300 hover:bg-gray-50 dark:hover:bg-indigo-950/20`}
    >
      <Icon
        size={120}
        className="md:size-[200px] text-amber-600 dark:text-indigo-300 transition-colors duration-300"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:block text-xl font-medium text-amber-700 dark:text-indigo-200 transition-colors duration-300">
          {name}
        </div>
        <div className="text-center text-xs md:text-base text-amber-800/80 dark:text-slate-300 opacity-80 px-4 transition-colors duration-300">
          {about}
        </div>
      </div>
    </motion.div>
  );
}

function TechStackWord() {
  return (
    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-3xl font-bold text-amber-700 dark:text-indigo-300 transition-colors duration-300">
      Tech Stack
    </div>
  );
}
