"use client";
import { useScroll, useTransform, motion, useMotionValue } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Mood() {
  const { scrollY: pageScrollProgress } = useScroll();
  const { resolvedTheme } = useTheme();
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  const y = useTransform(
    pageScrollProgress,
    (pageScrollProgress) => pageScrollProgress + screenHeight / 2
  );

  const color = useMotionValue(
    resolvedTheme === "light" ? "#FFD700" : "#89CFF0"
  );

  const scale = useTransform(pageScrollProgress, [0, screenHeight], [2, 1]);

  useEffect(
    function () {
      color.set(resolvedTheme === "light" ? "#FFD700" : "#89CFF0");
    },
    [resolvedTheme, color]
  );

  if (!screenHeight) return;

  return (
    <motion.div
      style={{ y, backgroundColor: color, scale }}
      className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 z-[1] transition-all duration-[600ms] blur-3xl rounded-full left-1/2 -translate-x-1/4 "
    />
  );
}
