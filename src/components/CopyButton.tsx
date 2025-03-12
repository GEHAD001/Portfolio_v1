"use client";
import { toast } from "sonner";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

function CopyButton({
  children,
  copyValue,
  message = "Copied",
  className = "",
}: {
  children: ReactNode;
  copyValue: string;
  message: string;
  className?: string;
}) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(copyValue)
      .then(() => {
        toast(message);
      })
      .catch(() => {
        toast("Failed in Copy");
      });
  };

  return (
    <button className={cn("cursor-copy", className)} onClick={handleCopy}>
      {children}
    </button>
  );
}

export default CopyButton;
