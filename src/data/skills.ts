import { Code2Icon, LucideProps, SearchCode } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface SkillType {
  name: string;
  about: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const skills: SkillType[] = [
  {
    name: "Programming",
    about:
      "Programming is one of the skills I have acquired, and I am proficient in writing code in multiple languages such as TypeScript, Python, and Dart, among others. I am also capable of developing projects using various frameworks.",
    Icon: Code2Icon,
  },
  {
    name: "Research",
    about:
      "Research is one of my key traits. Whenever I need to make a decision, I thoroughly explore the best possible options. Similarly, when I encounter a problem, I seek solutions from multiple sources.",
    Icon: SearchCode,
  },
  {
    name: "Communication",
    about:
      "I excel in communication, which is one of the most essential soft skills in our era. Effective communication fosters a positive environment and facilitates understanding among people, enabling them to reach the best possible solutions.",
    Icon: Code2Icon,
  },
  {
    name: "Versatile",
    about:
      "I am adaptable when transitioning between the fundamentals of this field, whether switching from one programming language to another or moving between different frameworks. This flexibility stems from my focus on core principles, such as understanding execution mechanisms in programming languages and grasping the overarching concepts within each specialization.",
    Icon: Code2Icon,
  },
];
