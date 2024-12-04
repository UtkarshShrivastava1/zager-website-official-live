import React from "react";

function OurMission({ content }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-white">
      {/* Left Section (Oval with Text) */}
      <div className="bg-black text-white flex items-center justify-center rounded-full w-60 h-96 md:w-72 md:h-96 flex-shrink-0 text-center">
        <div>
          <h2 className="text-xl font-light">OUR</h2>
          <h1 className="text-3xl font-extrabold">MISSION</h1>
        </div>
      </div>

      {/* Right Section (Text Content) */}
      <div className="bg-transparent text-gray-800  border-brand border-2 rounded-lg p-16 rounded-tl-[140px] mt-8 md:mt-0 md:ml-8 max-w-5xl flex-shrink">
        <p className="text-lg text-justify">{content}</p>
      </div>
    </section>
  );
}

export default OurMission;
