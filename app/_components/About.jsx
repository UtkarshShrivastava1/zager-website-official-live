"use client";
import React from "react";
import AboutImageCarousel from "./About-Image-Carousel";
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  staggerContainer,
  textVariant,
} from "@/app/utils/motion";
import Link from "next/link";

const About = () => (
  <section className="bg-white bg-opacity-5 overflow-x-hidden pt-2">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative  justify-items-center h-56 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-min lg:col-span-1">
          <AboutImageCarousel />
        </div>
        <motion.div
          variants={staggerContainer(0.25, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <div className=" lg:col-span-1 flex flex-col justify-between  text-white">
              <h2 className="text-4xl font-bold sm:text-5xl">About Us</h2>

              <p className="mt-6 text-white text-lg md:text-xl font-thin  text-justify">
                At Zager Digital Services, we believe that exceptional Digital
                Marketing and IT Solutions stem from a core commitment to
                integrity, innovation, and excellence. Founded with the mission
                to empower businesses through cutting-edge technology and
                strategic marketing, we take pride in delivering tailored
                solutions that drive growth and success.
              </p>

              <Link href={"/about"} className="border-4 mt-5 w-max px-10 text-lg hover:border-brand hover:bg-white hover:text-brand transition ease-in-out py-2 rounded-lg">
                Know More
              </Link >
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
