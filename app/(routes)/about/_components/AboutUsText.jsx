"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/app/_components/CustomText";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

const AboutUsText = () => (
  <section className="paddings relative z-10 text-white">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      {/* <TypingText title="| ABOUT US" textStyles="text-center" /> */}
      {/* <SparklesPreview
        name={
          <TypingText
            title={"ABOUT US"}
            textStyles="text-center text-lg"
          />
        }
        height={""}
        extraWidth={20}
        textAlign={" text-center items-center justify-center "}
      /> */}
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-0 font-normal sm:text-[32px] items-center text-justify flex flex-col text-[20px]  text-white text-secondary-white"
      >
        <span className="font-extrabold md:text-4xl pb-4 pt-2 text-4xl  text-white">
          Welcome to Zager Digital Services!
        </span>{" "}
        <span className="font-thin">
          At Zager Digital Services, we believe that exceptional Digital
          Marketing and IT solutions stem from a core commitment to&nbsp;
          <span className="font-normal text-white">
            integrity, innovation, and excellence.
          </span>
          &nbsp;Founded with the mission to empower businesses through
          cutting-edge technology and strategic marketing, we take pride in
          delivering tailored solutions that drive growth and success.
        </span>
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Link
          href="#ourmission"
          className="w-full flex items-center justify-center"
        >
          <Image
            src="/arrow-down.svg"
            width={18}
            height={28}
            alt="arrow down"
            className="object-contain mt-[28px] "
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default AboutUsText;
