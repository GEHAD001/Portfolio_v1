import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Eng. Jihad Portfolio",
  description: "Jihad's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
