"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TfiMenu, TfiAngleDown } from "react-icons/tfi";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children,path,activePath }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-white flex flex-row items-center hover:opacity-[0.9] dark:text-white ${path === activePath && "border-b-2 scale-110"}`}
      >
        {item} {activePath ==='/partner' && <TfiAngleDown className="text-lg mr-1 pt-1 font-extrabold"/>}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-brand  dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show border after scrolling half of the screen
      if (scrollPosition > windowHeight / 2) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<nav
  onMouseLeave={() => setActive(null)}
  className={`relative rounded-full w-full border-2 border-white shadow-input flex justify-between items-center space-x-4 md:px-16 px-4  transition-all duration-300 ease-in-out ${
    showBorder ? "border-opacity-100 py-3" : "border-opacity-0 py-3"
  } `} // Ensure mx-4 is applied here
>
  {children}
</nav>

  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-white dark:text-neutral-200 hover:text-slate-200 hover:scale-105 transition ease-in-out"
    >
      {children}
    </Link>
  );
};
