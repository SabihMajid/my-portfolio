"use client";

import React from "react";
import Title from "./Title";
import  HoverEffect  from "@/components/ui/card-hover-effect";
import {
  FaStripe,
  FaNodeJs,
} from "react-icons/fa6";
import { Github } from "lucide-react";
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiSanity,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiJavascript } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

interface Skill {
  text: string;
  Icon: React.ComponentType;
}

const skills: Skill[] = [
  {
    text: "Nextjs",
    Icon: RiNextjsFill,
  },
  {
    text: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    text: "CSS",
    Icon: SiCss3,
  },
  {
    text: "HTML",
    Icon: SiHtml5,
  },
  {
    text: "Typescript",
    Icon: SiTypescript,
  },
  {
    text: "Stripe",
    Icon: FaStripe,
  },
  {
    text: "Nodejs",
    Icon: FaNodeJs,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Sanity",
    Icon: SiSanity,
  },
  {
    text: "Vercel",
    Icon: SiVercel,
  },
  {
    text: "Figma",
    Icon: FiFigma,
  },
  {
    text: "Shadcn",
    Icon: SiShadcnui,
  },
  {
    text: "JavaScript",
    Icon: DiJavascript,
  },
  {
    text: "Github",
    Icon: Github,
  },
];

const Skills = () => {
  return (
    <div className="max-w-full mx-auto px-8 py-20">
      <Title text="Skills🧠" className="flex flex-col items-center justify-center -hue-rotate-30" />
      <HoverEffect products={skills} />
    </div>
  );
};

export default Skills;