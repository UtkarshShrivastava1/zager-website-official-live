"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/utils/motion";

const DesigningSection = ({ buttons, title, description, imagePosition,id }) => {
  const isButtonsLeft = imagePosition === "left";

  return (
    <section className="paddings relative z-10 " id={id} >
      <div className="gradient-03 z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=""
      >
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="">
          <div
            className={`flex flex-col pt-16 lg:flex-row items-start justify-between p-8 gap-12 bg-brand`}
          >
            {/* Left or Right Side: Grid of buttons */}
            <div
              className={`w-full lg:w-6/12 ${
                isButtonsLeft ? "lg:order-1" : "lg:order-2"
              } grid grid-cols-2 lg:grid-cols-3 gap-6`}
            >
              {buttons.map((item) => (
                <button
                  key={item}
                  className="text-gray-200 bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-center transition-colors duration-300 hover:bg-gray-600"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right or Left Side: Text Content */}
            <div
              className={`w-full lg:w-5/12 ${
                isButtonsLeft ? "lg:order-2" : "lg:order-1"
              } bg-gray-700 p-6 shadow-md rounded-lg text-gray-200`}
            >
              <h2 className="text-4xl font-semibold mb-4 uppercase">{title}</h2>
              <p className="text-lg leading-relaxed">{description}</p>
              <div className="mt-6">
                <button className="bg-white text-gray-800 rounded-md px-5 py-2 hover:bg-gray-100 transition-all">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesigningSection;
