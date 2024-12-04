"use client";
import React,{useState,useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/app/_components/CustomText";
import StartSteps from "@/app/_components/StartSteps";
import { staggerContainer, fadeIn, planetVariants } from "@/app/utils/motion";
import { SparklesPreview } from "@/app/_components/SparklesPreview";
import fetchUrlFromFirestore from "@/lib/fetchUrlFromFirestore";

function OurValues({ startingFeatures }) {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const collectionName = "aboutUsPage";  // Define your collection name
  const documentName = "ourValues";  
  useEffect(() => {
    const getUrl = async () => {

      setError(null); // Reset error before fetching

      try {
        const fetchedUrl = await fetchUrlFromFirestore(collectionName, documentName);
        setUrl(fetchedUrl); // Update URL state with the fetched URL
      } catch (error) {
        setError('Error fetching URL');
      } 
    };

    getUrl(); // Call the async function inside useEffect
  }, [collectionName, documentName]); 

  return (
    <section className="paddings relative z-10">
      <div className="gradient-03 z-0" />

      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex-1 flexCenter pt-20"
        >
           {url ? (
          <Image
            src={url}
            width={1000}
            height={1000}
            alt="get-started"
            priority={true}
            className="w-[90%] h-[90%] object-contain"
          />  ) : (
            <p>Loading image...</p>
          )}
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* <TypingText title="| OUR VALUES" /> */}
          <SparklesPreview
            name={<TypingText title={"| OUR VALUES"} textStyles="" />}
            extraWidth={10}
          />

          <TitleText
            title={
              <div className="md:text-5xl text-3xl ">Values That Inspire</div>
            }
          />
          <div className="mt-[31px] flex flex-col max-w-full gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurValues;
