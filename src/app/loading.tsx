"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Meteors } from "@/components/ui/meteors";
import { useTheme } from "next-themes";

export default function Loading() {
  const [isWindowReady, setIsWindowReady] = useState(false);
  const { resolvedTheme } = useTheme();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Simulate loading progress
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsWindowReady(true);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  // Show loading state until window is ready
  if (!isWindowReady) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-background">
        {/* Background glow effect */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [0.8, 1.2, 0.9, 1.1, 1],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute w-40 h-40 rounded-full blur-3xl ${
            resolvedTheme === "light" ? "bg-amber-300/50" : "bg-indigo-500/30"
          }`}
        />

        {/* Meteors effect in background */}
        <div className="absolute inset-0 overflow-hidden">
          <Meteors number={10} />
        </div>

        {/* Loading text with animation */}
        <motion.h2
          className={`text-4xl font-serif mb-8 z-10 ${
            resolvedTheme === "light" ? "text-amber-600" : "text-indigo-300"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.h2>

        {/* Progress bar */}
        <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden z-10">
          <motion.div
            className={`absolute top-0 left-0 h-full ${
              resolvedTheme === "light" ? "bg-amber-500" : "bg-indigo-400"
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p
          className={`mt-2 text-sm ${
            resolvedTheme === "light" ? "text-amber-700" : "text-indigo-200"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.round(loadingProgress)}%
        </motion.p>
      </div>
    );
  }

  // Once window is ready, render the actual content
  return null; // Return null as this is just a loading component
}
