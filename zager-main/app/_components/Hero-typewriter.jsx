"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function HeroTypewriter() {
  const words = [
    {
      text: "It's ",
    },
    {
      text: "all ",
    },
    {
      text: "about ",
    },
    {
      text: "values!",
      className: "text-blue-900 dark:text-blue-500",
    },
  
  ];
  return (
    (<div className="flex flex-col items-center justify-center  ">

      <TypewriterEffect words={words} />
 
    </div>)
  );
}
