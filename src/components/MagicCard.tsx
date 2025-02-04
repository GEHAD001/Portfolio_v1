"use client";
import { useTheme } from "next-themes";
import { MagicCardLayout } from "./ui/magic-card";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function MagicCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <MagicCardLayout
      className={twMerge(
        "cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl",
        className
      )}
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      {children}
    </MagicCardLayout>
  );
}

export default MagicCard;
