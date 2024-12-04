"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { usePathname } from "next/navigation";

const WhyChooseUs = ({ reasons }) => {
  const pathname = usePathname();
  const getTitle = () => {
    if (pathname === "/ira") {
      return "IRA MEDIA AND PRODUCTION";
    } else if (pathname === "/jk-works") {
      return "JK WORKS";
    }
    return "US";
  };
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal md:text-xl text-lg text-center text-brand text-secondary-white"
        >
          <section className="bg-brand lg:px-10 md:px-6 px-2 text-white">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  <span className="font-thin">WHY CHOOSE </span>
                  {getTitle()}
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      {reason.icon}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-start">
                        {reason.title}:
                      </h2>
                      <p className="mt-1 text-sm text-justify text-gray-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
