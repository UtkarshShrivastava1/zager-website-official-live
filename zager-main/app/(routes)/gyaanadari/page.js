import React from "react";
import LandingView from "../_components/LandingView";
import WhatWeDo from "../../_components/WhatWeDo";
import AboutUsG from "../_components/AboutUsG";
import { whatWeDoGyan } from "@/app/constants";
import OurValues from "../_components/OurValues";
import {
  ourValuesGyan,
  ourMissionOfGyan,
  aboutUsOfGyan,
} from "@/app/constants";
import OurMissionGlobal from "../_components/OurMissionGlobal";
import EndingPageCard from "../_components/EndingPageCard";
function page() {
  return (
    <div className="flex bg-white  space-y-6 overflow-hidden flex-col   ">
      <LandingView heading={"GYAANADRI"} 
        extraWidth={100}
        />
      <AboutUsG content={aboutUsOfGyan} />
      <OurMissionGlobal content={ourMissionOfGyan} />
      <WhatWeDo services={whatWeDoGyan} />

      <div className="bg-brand px-4 md:space-y-14 md:px-14 py-5">
        <OurValues startingFeatures={ourValuesGyan} />
      </div>
      <div className="py-10">
        <EndingPageCard
          content={
            "Explore the world of Gyaanadri and discover a wealth of content designed to enrich your knowledge and entertain your mind. Connect with us through social media, and stay tuned for the latest updates and content releases."
          }
          title={"JOIN US ON OUR JOURNEY"}
        />
      </div>
    </div>
  );
}

export default page;
