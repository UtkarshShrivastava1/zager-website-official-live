import React from "react";
import About from "./_components/About";
import Hero from "./_components/Hero";
import AboutUsText from "./_components/AboutUsText";
import OurMissionText from "./_components/OurMissionText";
import OurValues from "../_components/OurValues";
import WhatWeDo from "../../_components/WhatWeDo";
import WhatsNew from "./_components/WhatWeDo";
import Insights from "./_components/Insights";
import { startingFeatures } from "@/app/constants";
import LandingView from "../_components/LandingView";
function page() {
  return (
    <main className="bg-primary-black pb-5 md:pb-10 overflow-hidden flex flex-col gap-14">
      {/* <Hero /> */}
      <LandingView heading={"ABOUT US"} 
        extraWidth={100}
      height={0}
      />
      <div className="px-8 md:px-10">
        <AboutUsText />
      </div>
      <div className="pt-16 px-8 md:px-14" id="ourmission">
        <OurMissionText />
      </div>

      <div className="pt-16 px-8 md:px-14 relative " id="ourvalues">
        <OurValues startingFeatures={startingFeatures} />
      </div>
      <div className="pt-16 px-8 md:px-14 relative " id="what-we-do">
        <WhatsNew />
      </div>
      <div className="pt-16 px-8 md:px-14 mb-10 relative " id="insights">
        <Insights />
      </div>
    </main>
  );
}

export default page;
