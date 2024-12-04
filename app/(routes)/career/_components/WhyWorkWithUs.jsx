"use client";
import PlainCard from "../../_components/PlainCard";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/app/_components/CustomText";
import { staggerContainer, fadeIn } from "@/app/utils/motion";

export default function WhyWorkWithUs() {
  const cards = [
    {
      title: "Innovative Environment",
      description:
        "At Zager Digital Services, we thrive on innovation. Join us and work with cutting-edge technologies and strategies that are shaping the future of digital marketing and IT Solutions.",
      imageUrl: "/path-to-your-image.svg", // replace with correct image
    },
    {
      title: "Professional Growth",
      description:
        "We are committed to your professional development. From mentorship programs to training workshops, we provide resources and opportunities to help you advance your career.",
      imageUrl: "/path-to-your-image.svg", // replace with correct image
    },
    {
      title: "Collaborative Culture",
      description:
        "Our team is our greatest asset. Experience a supportive and collaborative work culture where your ideas are valued and teamwork drives success.",
      imageUrl: "/path-to-your-image.svg", // replace with correct image
    },
    {
      title: "Work-Life Balance",
      description:
        "We understand the importance of maintaining a healthy work-life balance. Enjoy flexible working arrangements and a positive work environment that supports your personal and professional well-being.",
      imageUrl: "/path-to-your-image.svg", // replace with correct image
    },
  ];

  return (
    <section className="paddings relative z-10">
      <div className="z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-lg leading-relaxed text-center text-white text-secondary-white"
        >
          <div className="flex flex-col items-center my-16 px-5">
            <h2 className="text-4xl font-bold text-center text-black mb-8">
              Why <span className="text-indigo-600">Work With Us?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-full">
              {cards.map((card, index) => (
                <div key={index} className="flex justify-center">
                  <PlainCard
                    title={card.title}
                    index={index}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
