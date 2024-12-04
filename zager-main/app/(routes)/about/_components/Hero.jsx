"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/app/utils/motion";
import About from "./About";

const Hero = () => (
  <section className="yPaddings pt-2 bg-brand">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <About />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
