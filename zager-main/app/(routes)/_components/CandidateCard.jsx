"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/app/utils/motion";

const CandidateCard = ({
  title,
  content,
  id,
  imgUrl,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[2.5] flex-[8]" : "lg:flex-[1] flex-[2.5]"
      } flexCenter min-w-2.5 md:h-[450px] h-full mt-3 transition-all duration-[1.0s] ease-in-out cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        fill={true}
        alt={title}
        priority={true}
        unoptimized
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold text-blue-700  sm:text-lg text-[18px] rounded-md md:text-brand text-center bg-white md:bg-white md:bg-opacity-80 px-3 absolute  z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
          {title}
        </h3>
      ) : (
        <div className="md:absolute relative bottom-0 p-8 justify-start w-full flex flex-col md:bg-[rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.8)]  md:rounded-t-none rounded-b-[23px] rounded-[23px]">
          {/* <div className="flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
        <Image
          src="/headset.svg"
          width={1000}
          height={1000}
          alt="headset"
          className="w-1/2 h-1/2 object-contain"
        />
      </div> */}
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            {content}
          </p>
          <h2 className="mt-[24px] font-semibold md:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default CandidateCard;
