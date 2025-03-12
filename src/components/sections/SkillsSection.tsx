"use client";

import { skills, SkillType } from "@/data/skills";
import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { DotPattern } from "../ui/dot-pattern";

export default function SkillsSection() {
  const skillSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillSectionRef,
    offset: ["start end", "center center"],
  });

  const opacities = [
    useTransform(scrollYProgress, [0.0, 0.5], [0.1, 1]),
    useTransform(scrollYProgress, [0.0, 0.5], [0.1, 1]),
    useTransform(scrollYProgress, [0.75, 1.0], [0.1, 1]),
    useTransform(scrollYProgress, [0.75, 1.0], [0.1, 1]),
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 px-4"
      ref={skillSectionRef}
    >
      {skills.map((skill, i) => (
        <Skill opacity={opacities.at(i)!} {...skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({
  name,
  about,
  opacity,
}: SkillType & { opacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity }}
      className="relative flex flex-col gap-2 py-6 px-4 justify-center items-center border border-amber-600/20 dark:border-white/10 rounded-md transition-colors hover:bg-amber-50/10 dark:hover:bg-indigo-950/20"
    >
      <DotPattern className="opacity-20" />
      <div className="text-base sm:text-xl font-medium text-amber-600 dark:text-indigo-300">
        {name}
      </div>
      <div className="text-xs text-center sm:text-sm md:text-base text-amber-700/80 dark:text-slate-200 opacity-80">
        {about}
      </div>
    </motion.div>
  );
}
