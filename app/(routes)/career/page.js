import React from "react";
import LandingView from "../_components/LandingView";
import JoinOurTeamText from "./_components/JoinOurTeamText";
import WhyWorkWithUs from "./_components/WhyWorkWithUs";
// import CandidateCard from "../_components/CandidateCard";
import Candidate from "./_components/Candidates";
import HowToApply from "./_components/HowToApply";

function page() {
  return (
    <div className="space-y-14  pb-5 md:pb-10 overflow-x-hidden bg-white">
      <LandingView heading={"CAREERS"} 
        extraWidth={100}
      
      />
      <div className="bg-brand py-10">
        <JoinOurTeamText />
      </div>

      <WhyWorkWithUs />
      <div className="px-5 md:px-10 lg:px-14 bg-brand py-10">
        <Candidate />
        <HowToApply />
      </div>

    </div>
  );
}

export default page;
