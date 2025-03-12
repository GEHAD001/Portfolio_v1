import {
  GitOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { FunctionComponent } from "react";

export interface Props extends React.SVGProps<SVGElement> {
  size?: number | string;
}

export const TECH_STACK: {
  name: string;
  about: string;
  url: string;
  className: string;
  Icon: FunctionComponent<Props>;
}[] = [
  {
    name: "Next",
    about:
      "The React Framework for the Web, Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    url: "https://nextjs.org/",
    className: "border-black/30",
    Icon: NextjsOriginal,
  },
  {
    name: "Tailwind",
    about:
      "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    url: "https://tailwindcss.com/",
    className: "border-blue-200",
    Icon: TailwindcssOriginal,
  },
  {
    name: "TypeScript",
    about:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    url: "https://www.typescriptlang.org/",
    className: "border-blue-200",
    Icon: TypescriptOriginal,
  },
  {
    name: "Git",
    about:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    url: "https://git-scm.com/",
    className: "border-red-200",
    Icon: GitOriginal,
  },
] as const;
