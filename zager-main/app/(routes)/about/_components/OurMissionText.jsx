"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "@/app/_components/CustomText";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

function OurMissionText() {
  return (
    <section className="paddings relative z-10 text-white">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        {/* <TypingText title="| OUR MISSION" textStyles="text-center" /> */}
        <SparklesPreview
          name={
            <TypingText
              title={"| OUR MISSION"}
              textStyles="text-center text-lg "
            />
          }
        textAlign={"  items-center justify-center "}
extraWidth={20}
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-justify text-lg  leading-relaxed     text-white t=ext-secondary-white"
        >
          <span className="font-bold text-4xl">
            {" "}
            Our mission is simple yet profound:
          </span>{" "}
          <span className="font-thin">
            To provide top-notch digital marketing and IT Solutions that help
            our clients achieve their business goals. Whether you are looking to
            enhance your online presence, streamline your IT infrastructure, or
            unlock new growth opportunities, we are here to make it happen with
            quality and dedication.
          </span>
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
          <Link
            href="#ourvalues"
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
}

export default OurMissionText;
