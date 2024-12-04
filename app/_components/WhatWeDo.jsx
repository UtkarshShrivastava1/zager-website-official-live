"use client";
import Image from "next/image";
import React from "react";
// import services from "./servicesData"; // Import your data from the servicesData.js file
import { motion } from "framer-motion";
import { slideIn, fadeIn, staggerContainer, textVariant } from "@/app/utils/motion";
function WhatWeDo({ services }) {
  return (
    <section className="flex flex-col items-center mb-10 bg-brand justify-center px- py-16 ">
      <h2 className="text-2xl font-light text-gray-200 mb-2">WHAT</h2>
      <h1 className="text-4xl font-extrabold text-gray-300 mb-2">WE DO?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-10">
        {services.map((service, index) => (
          <motion.div
            variants={staggerContainer(0.25, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=""
            key={index}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className=""
            >
              <div
                key={index}
                className="flex bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="w-1/3 flex items-center justify-center">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} Placeholder`}
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
