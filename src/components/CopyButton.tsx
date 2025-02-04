"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";
import { ReactNode } from "react";

function CopyButton({
  children,
  copyValue,
}: {
  children: ReactNode;
  copyValue: string;
}) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(copyValue)
      .then(() => {
        toast("Email Has Been Copied");
      })
      .catch(() => {
        toast("Failed in Copy Email");
      });
  };

  return (
    <Button variant={"link"} size={"icon"} onClick={handleCopy}>
      {children}
    </Button>
  );
}

export default CopyButton;
