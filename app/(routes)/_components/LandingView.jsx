"use client";
import React, { useEffect, useRef, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

function LandingView({ heading, msg, name, height, textAlign, extraWidth }) {
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
    <div
      className={`relative flex flex-row w-full ${textAlign} bg-brand h-[50vh] md:h-[70vh] justify-center items-center px-4 overflow-hidden`}
    >
      {/* Full background sparkles */}
      <div className="w-full absolute inset-0 h-full z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#6082B6"
        />
      </div>

      <div className="relative flex flex-col items-center w-full justify-center rounded-md z-20">
        <h1
          ref={textRef}
          className="text-white text-4xl md:text-5xl lg:text-6xl text-center"
        >
          {heading}
        </h1>

        {/* Animated lines */}
        <div
          className="relative   md:h-16"
          style={{ width: textWidth + "px" }}
        >
          {/* Gradients with animation */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm animated-line animated-line-1" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full animated-line animated-line-2" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm animated-line animated-line-3" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 animated-line animated-line-4" />
        </div>
      </div>
    </div>
  );
}

export default LandingView;
