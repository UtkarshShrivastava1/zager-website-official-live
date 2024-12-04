import React from "react";
import LandingView from "../_components/LandingView";
import AboutUsG from "../_components/AboutUsG";
import {
  aboutUsOfJK,
  ourMissionOfJK,
  whatWeDoJK,
  ourValuesOfJK,
} from "@/app/constants";
import OurMissionGlobal from "../_components/OurMissionGlobal";
import WhatWeDo from "@/app/_components/WhatWeDo";
import OurValues from "../_components/OurValues";
import EndingPageCard from "../_components/EndingPageCard";
import WhyChooseUs from "../_components/WhyChooseUs";
import { WhyChooseUsJK } from "@/app/constants";

function page() {
  return (
    <div className="overflow-hidden space-y-6  bg-white">
      <LandingView
        heading={"JK WORKS"}
        //  msg={"Clear vision & Pure thoughts"}
        extraWidth={100}

      />
      <AboutUsG content={aboutUsOfJK} />
      <OurMissionGlobal content={ourMissionOfJK} />
      <WhatWeDo services={whatWeDoJK} />
      <div className="bg-brand px-4 md:space-y-14 md:px-14 md:py-10 py-4 space-y-14">
        <OurValues startingFeatures={ourValuesOfJK} />
      </div>
      <WhyChooseUs reasons={WhyChooseUsJK} />

      <div className="py-10">
        <EndingPageCard
          content={
            "Explore our portfolio to see examples of our work and get inspired by our diverse range of projects. Whether you’re planning a new build or a renovation, our portfolio showcases the quality and creativity we bring to every endeavor."
          }
          title={"OUR PORTFOLIO"}
        />{" "}
      </div>
    </div>
  );
}

export default page;
