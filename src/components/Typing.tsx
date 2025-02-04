"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useEffect, useState } from "react";

export function Typing({ words }: { words: string[] }) {
  const [index, setIndex] = useState(1);

  useEffect(function () {
    setInterval(
      () => setIndex((currentIndex) => (currentIndex % words.length) + 1),
      3000
    );
  }, []);

  return (
    <TypingAnimation
      duration={100}
      className="text-lg sm:text-2xl md:text-4xl font-bold tracking-[-0.02em]"
    >
      {words[index - 1]}
    </TypingAnimation>
  );
}
