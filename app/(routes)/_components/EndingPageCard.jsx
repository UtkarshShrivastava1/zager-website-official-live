"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/app/_components/CustomText";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

const EndingPageCard = ({ content, title }) => (
  <section className="paddings relative z-10 pb-8 px-4 md:px-8 lg:px-10  text-brand">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      {/* <TypingText title={`| ${title}`} textStyles="text-center" /> */}
      <SparklesPreview
        name={<TypingText title={`| ${title}`} textStyles="" />}
        extraWidth={30}
        textAlign={" text-center text-brand items-center justify-center "}
        sparklesColor={"#051224"}
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal md:text-2xl text-lg text-center text-brand text-secondary-white"
      >
        {content}
      </motion.p>
    </motion.div>
  </section>
);

export default EndingPageCard;
