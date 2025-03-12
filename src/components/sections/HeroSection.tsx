"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function Name({ name }: { name: string }) {
  const { scrollY: pageScrollProgress } = useScroll();
  const [halfScreenSize, setHalfScreenSize] = useState(0);

  useEffect(() => {
    setHalfScreenSize(window.innerHeight / 2);
  }, []);

  const topName = useTransform(
    pageScrollProgress,
    [0, halfScreenSize],
    ["50%", "108%"]
  );

  const scaleName = useTransform(
    pageScrollProgress,
    [0, halfScreenSize],
    [1, 0.8]
  );

  if (!halfScreenSize) return;

  return (
    <motion.p
      initial={{ opacity: 0, x: "-10%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ top: topName, scale: scaleName }}
      className="absolute left-1/2 text-4xl md:text-7xl lg:text-8xl font-serif inline -translate-y-[50%] -translate-x-[50%] z-[99999] text-amber-500 dark:text-indigo-300/80"
    >
      <span>{name.split(".").at(0) + ". "}</span>
      <span>{name.split(".").at(1)}</span>
    </motion.p>
  );
}

export function AboutMe({ content }: { content: string }) {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-serif text-amber-500 dark:text-indigo-200">
        About Me
      </h1>
      <p className="text-amber-600/90 dark:text-indigo-200/80">{content}</p>
    </>
  );
}
