"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, fadeIn, staggerContainer, textVariant } from "@/app/utils/motion";
import Link from "next/link";
function HowToApply() {
  return (
    <section className="mt-10  md:pt-20 pt-10 ">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1 flex justify-center "
        >
          <article className="rounded-xl border  border-gray-700 bg-gray-800 p-4">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="/logowhite.png"
                className="size-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-medium text-white">HOW TO APPLY</h3>

                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <Link
                        href="https://www.instagram.com/zagerdigitalservices/"
                        target="_blank"
                        className="text-xs font-medium text-gray-300"
                      >
                        {" "}
                        Instagram{" "}
                      </Link>
                    </li>

                    <li className="p-1 leading-none">
                      <Link
                        href="https://www.linkedin.com/company/zager-digital-service/"
                        target="_blank"
                        className="text-xs font-medium text-gray-300"
                      >
                        {" "}
                        LinkedIn{" "}
                      </Link>
                    </li>

                    <li className="p-1 leading-none">
                      <Link
                        href="https://www.facebook.com/zagerdigitalservices"
                        target="_blank"
                        className="text-xs font-medium text-gray-300"
                      >
                        FaceBook
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="mailto: zagerdigitalservices@gmail.com"
                  className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                >
                  <strong className="font-medium text-white">
                    Ready to take the next step in your career?
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Submit your resume to zagerdigitalsservices@gmail.com. Be
                    sure to highlight why you would be a great fit
                    for Zager Digital Services.
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                >
                  <strong className="font-medium text-white">
                    DIVERSITY AND INCLUSION
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    At Zager Digital Services, we celebrate diversity and are
                    committed to creating an inclusive workplace where everyone
                    feels valued and respected. We encourage candidates from all
                    backgrounds to apply.
                  </p>
                </Link>
              </li>
            </ul>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HowToApply;
