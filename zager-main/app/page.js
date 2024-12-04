import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import OurService from "./_components/OurService";
import OurInfo from "./_components/OurInfo";
import OurInfo2 from "./_components/OurInfo2";
import OurInfo3 from "./_components/OurInfo3";
import CompaniesScroll from "./_components/CompaniesScroll";
import ContactUs from "./_components/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OurService />
      <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 pb-10" >
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Platforms</h2>
      <OurInfo />
      <OurInfo2 />
      <OurInfo3 />
      {/* <OurInfo4 /> */}
      </div>
      <div className="pt-16">
      <CompaniesScroll />
      </div>
      <ContactUs  />
    </div>
  );
}
