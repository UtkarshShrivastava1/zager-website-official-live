"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/app/_components/CustomText";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

const AboutUsG = ({ content }) => (
  <section className="paddings relative z-10  text-brand px-4 md:px-10 py-10 lg:py-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      {/* <TypingText title="| ABOUT US" textStyles="text-center" /> */}
      <SparklesPreview
            name={<TypingText title={"| ABOUT US"} textStyles="" />}
            extraWidth={20}
        textAlign={" text-center text-brand items-center justify-center "}
sparklesColor={"#051224"}
          />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal md:text-xl text-lg text-center text-brand text-secondary-white"
      >
        <span className="flex flex-col">
          <span className="">{content}</span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default AboutUsG;
