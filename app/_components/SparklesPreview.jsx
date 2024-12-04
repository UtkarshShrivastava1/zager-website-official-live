"use client";
import React, { useEffect, useRef, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview({ name, height, textAlign, extraWidth, sparklesColor }) {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
    if (extraWidth) {
      setTextWidth(textRef.current.offsetWidth + extraWidth);
    }
  }, [name]);

  return (
    <div className={`flex flex-row w-full ${textAlign}`}>
      <div className=" w-max  flex flex-col items- justify-center  rounded-md">
        <h1 ref={textRef} className="  relative z-20">
          {name}
        </h1>

        <div
          className="relative h-8"
          style={{ width: textWidth + "px", height: height }}
        >
          {/* Gradients */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={1}
            particleDensity={1600}
            className="w-full h-full"
            particleColor={sparklesColor || "#FFFFFF"}
          />

          {/* Radial Gradient */}
          {/* <div
          className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
        ></div> */}
        </div>
      </div>
    </div>
  );
}
