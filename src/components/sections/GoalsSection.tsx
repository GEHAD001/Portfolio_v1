"use client";
import { goals, GoalType } from "@/data/goals";
import { motion } from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function GoalsSection() {
  return (
    <section className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h2 className="text-3xl font-bold text-amber-600 dark:text-indigo-300 mb-6 transition-colors duration-300">
          My Goals
        </h2>
        {goals.map((goal, i) => (
          <Goal zIndex={999 - i} {...goal} key={goal.name} />
        ))}
      </div>
    </section>
  );
}

function Goal({
  name,
  why,
  zIndex,
}: GoalType & {
  zIndex: number;
}) {
  return (
    <motion.div
      style={{ zIndex }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-6 md:p-8 
                 bg-amber-50 dark:bg-indigo-950/80 
                 border border-amber-600/20 dark:border-indigo-300/20 
                 rounded-lg gap-4 shadow-md 
                 transition-all duration-300"
    >
      <DotPattern className="opacity-10" />
      <div className="text-xl md:text-2xl font-bold text-amber-700 dark:text-indigo-200 transition-colors duration-300">
        {name}
      </div>
      <div className="text-sm md:text-base text-amber-800/80 dark:text-slate-300/90 transition-colors duration-300">
        {why}
      </div>
    </motion.div>
  );
}
