import React from "react";

function ValuesSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 ">
      <h2 className="text-2xl font-light text-gray-600 mb-4">OUR</h2>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">VALUES</h1>
      <div className="flex flex-col md:flex-row items-start justify-center md:gap-12 gap-6 w-full h-full ">
        {/* Left Column (Values Titles) */}
        <div className="bg-brand  text-white flex md:flex-col gap-3 md:gap-28 lg:gap-20 flex-wrap justify-around h-full md:text-right text-xl font-semibold p-8 rounded-r-lg md:w-1/3 w-full">
          <div className=" ">Engagement</div>
          <div className="">Innovation</div>
          <div className="">Integrity</div>
        </div>

        {/* Right Column (Descriptions) */}
        <div className="flex flex-col justify-around md:w-2/3 w-full gap-6">
          <div className="bg-gray-200 p-6  shadow-md text-gray-700 text-lg rounded-tr-3xl rounded-bl-3xl">
            We value our community and strive to create content that sparks
            meaningful conversations and connections.{" "}
          </div>
          <div className="bg-gray-200 p-6  shadow-md text-gray-700 text-lg rounded-tr-3xl rounded-bl-3xl">
            We embrace new ideas and formats to deliver fresh and engaging
            content that meets the evolving needs of our audience.{" "}
          </div>
          <div className="bg-gray-200 p-6  shadow-md text-gray-700 text-lg rounded-tr-3xl rounded-bl-3xl">
            We are committed to providing accurate and reliable content,
            maintaining the highest standards of journalistic integrity.{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
