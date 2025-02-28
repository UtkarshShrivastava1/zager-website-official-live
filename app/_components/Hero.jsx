"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import HeroTypewriter from "./Hero-typewriter";

export default function Hero() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="md:mt-8 mt-4 font-times flex flex-col font-bold bg-gradient-to-br from-slate-50 to-slate-300  bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-8xl md:text-"
      >
        <span>ZAGER</span>
        <span className="md:text-4xl ">DIGITAL&nbsp; SERVICES</span>
        <div className="mt-2 bg-white px-4 py-1">
          <HeroTypewriter />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
