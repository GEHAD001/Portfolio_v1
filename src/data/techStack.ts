import {
  BunOriginal,
  GitOriginal,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { FunctionComponent } from "react";

export interface Props extends React.SVGProps<SVGElement> {
  size?: number | string;
}

export const TECH_STACK: {
  techName: string;
  techInfo: string;
  techURL: string;
  className: string;
  Icon: FunctionComponent<Props>;
}[] = [
  {
    techName: "React",
    techInfo:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    techURL: "https://react.dev/",
    className: "border-blue-200",
    Icon: ReactOriginal,
  },
  {
    techName: "Next",
    techInfo:
      "The React Framework for the Web, Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    techURL: "https://react.dev/",
    className: "border-black/30",
    Icon: NextjsOriginal,
  },
  {
    techName: "Tailwind",
    techInfo:
      "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    techURL: "https://react.dev/",
    className: "border-blue-200",
    Icon: TailwindcssOriginal,
  },
  {
    techName: "TS",
    techInfo:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    techURL: "https://react.dev/",
    className: "border-blue-200",
    Icon: TypescriptOriginal,
  },
  {
    techName: "Bun",
    techInfo:
      "Develop, test, run, and bundle JavaScript & TypeScript projects—all with Bun. Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager. Bun aims for 100% Node.js compatibility.",
    techURL: "https://react.dev/",
    className: "border-stale-100",
    Icon: BunOriginal,
  },
  {
    techName: "Git",
    techInfo:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    techURL: "https://react.dev/",
    className: "border-red-200",
    Icon: GitOriginal,
  },
] as const;
