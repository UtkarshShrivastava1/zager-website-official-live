"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
const DigitalMarketing = ({
  imageSrc,
  title,
  description,
  keywords,
  imagePosition,
  id
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="paddings relative z-10 bg-brand pt-10" id={id} >
      <div className="gradient-02 z-0 " />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=""
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between p-8 gap-12 ${
              isImageLeft ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Left Side: Illustration */}
            <div
              className={`w-full lg:w-5/12 flex justify-center ${
                isImageLeft ? "lg:justify-end" : "lg:justify-start"
              }`}
            >
              <img
                src={imageSrc}
                alt="Digital Marketing Illustration"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side: Text Content */}
            <div
              className={`w-full lg:w-7/12 p-6 shadow-md rounded-lg text-gray-200 p-6 text-left`}
            >
              <h2 className="text-4xl font-bold  mb-4">{title}</h2>
              <p className="text-lg  mb-8 leading-relaxed">{description}</p>

              {/* Keywords Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {keywords.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    className="text-gray-200 bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-center transition-colors duration-300 hover:bg-gray-600"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DigitalMarketing;
