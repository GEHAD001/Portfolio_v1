"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "motion/react";
import { ReactNode, useRef } from "react";

/*
    Equations:
      - Control on the `speed` of Horizontal Scroll via Height of Parent (that target via motion)
      - Each Layer has fixed size w-screen and h-screen:
        - layer arrange with flex in sticky parent.
        - base on scroll we made translate on x to let see next layer.
    
    Layer Take Translate => 100% / layers
*/

export function HorizontalScroll({
  children,
  speed,
  layers = 3,
}: {
  children: ReactNode;
  layers: number;
  speed?: number;
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(100 / layers) * (layers - 1)}%`]
  );

  return (
    <>
      <section
        ref={targetRef}
        style={{
          height: `${speed ? speed : 100 * layers}dvh`,
        }}
        className={cn("relative bg-neutral-900")}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {children}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function Layer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-screen h-screen bg-neutral-100 dark:bg-neutral-950",
        className
      )}
    >
      {children}
    </div>
  );
}
