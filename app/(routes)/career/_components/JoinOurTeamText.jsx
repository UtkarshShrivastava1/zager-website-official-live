"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/app/_components/CustomText";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

const JoinOurTeamText = () => (
  <section className="paddings relative z-10 text-white px-4 md:px-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      {/* <TypingText title="| JOIN OUR TEAM" textStyles="text-center" /> */}
      <SparklesPreview
            name={<TypingText title={"| JOIN OUR TEAM"} textStyles="" />}
            extraWidth={20}
        textAlign={" text-center  items-center justify-center "}

          />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal md:text-xl text-lg text-center text-white text-secondary-white"
      >
        <span className="flex flex-col">
          <span className="font-extrabold text-white">
            Are you passionate about digital marketing and IT solutions?
          </span>{" "}
          <span className="">
            At Zager Digital Services, we are always on the lookout for talented
            individuals who are eager to innovate and drive success. As a leader
            in the industry, we offer a dynamic work environment where
            creativity, collaboration, and professional growth are at the
            forefront of everything we do.
          </span>
        </span>
      </motion.p>
      {/* <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
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
      </motion.div> */}
    </motion.div>
  </section>
);

export default JoinOurTeamText;
