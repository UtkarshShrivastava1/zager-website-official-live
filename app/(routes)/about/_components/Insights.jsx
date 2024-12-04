"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/app/_components/CustomText";
import { staggerContainer } from "@/app/utils/motion";
import { insights } from "@/app/constants";
import InsightCard from "@/app/_components/InsightCard";
import { SparklesPreview } from "@/app/_components/SparklesPreview";

const Insights = () => (
  <section className="paddings relative z-10">
    <div className="gradient-03 z-0" />

    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      {/* <TypingText title="| Insights" textStyles="text-center" /> */}
      <SparklesPreview
            name={<TypingText title={"| Insights"} textStyles="" />}
            extraWidth={20}
        textAlign={" text-center  items-center justify-center "}

          />
      {/* <TitleText title="Let Grow Together" textStyles="text-center" /> */}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
