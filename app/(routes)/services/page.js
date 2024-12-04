import React from "react";
import LandingView from "../_components/LandingView";
import DigitalMarketing from "./_components/DigitalMarketing";
import DesigningSection from "./_components/DesigningSection";
import {
  DigitalMarketingButtons,
  DigitalMarketingButtons01,
  WebsiteDevelopmentButtons,
  ItSolutionsButtons,
  DesigningButtons,
  ContentCreationButtons,
  MediaProductionButtons,
  ArchitectureButtons
} from "@/app/constants";
function page() {
  return (
    <div className="overflow-hidden  pb-5 md:pb-10 space-y-6  bg-white">
      <LandingView heading={"OUR SERVICES"} 
        extraWidth={150}
        />

      <DigitalMarketing
        imageSrc="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fserviceimages%2FLesson-amico.png?alt=media&token=10a5f361-2474-49d4-927b-a3fca1903d47" // Dynamic image
        title="Digital Marketing" // Dynamic title
        description="The practice of promoting products or services using digital channels like social media, 
        search engines, email, and websites to reach and engage target audiences." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="left"
        id={"digitalMarketing"}
      />
      <DesigningSection
        title="WEBSITE DEVLOPMENT"
        description="The process of building and maintaining websites, involving tasks such as web design, coding, content creation, and server configuration to ensure functionality, user experience, and performance."
        buttons={WebsiteDevelopmentButtons}
        id={"websiteDevelopment"}
        imagePosition="left"
      />

      <DigitalMarketing
        imageSrc="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fserviceimages%2Fpana4.png?alt=media&token=262ec209-20d1-4471-bf88-34ff3135ce96" // Dynamic image
        title="IT SOLUTION AND SEVICES" // Dynamic title
        description="Support and technologies for software, networks, and tech issues to improve efficiency and address challenges." // Dynamic description
        keywords={ItSolutionsButtons} // Dynamic keywords
        imagePosition="right"
        id={"itSolutions&Services"}

      />
      <DesigningSection
        title="Designing"
        description="The process of creating plans, concepts, and aesthetics for various projects, including graphics, products, and user experiences, to meet specific needs and objectives."
        buttons={DesigningButtons}
        id={"designing"}
        imagePosition="right"
      />
      <DigitalMarketing
        imageSrc="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fserviceimages%2Fpana.png?alt=media&token=e8863f7a-8894-4c66-a96c-97193b308d62" // Dynamic image
        title="CONTENT CREATION" // Dynamic title
        description="The process of generating engaging and valuable content in various formats  to attract and retain  audience, support marketing goals, and establish a brand's online presence." // Dynamic description
        keywords={ContentCreationButtons} // Dynamic keywords
        imagePosition="right"
        id={"contentCreation"}

      />
      <DigitalMarketing
        imageSrc="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fserviceimages%2Fpana4.png?alt=media&token=262ec209-20d1-4471-bf88-34ff3135ce96" // Dynamic image
        title="Media Production" // Dynamic title
        description="The process of creating content for various media platforms, encompassing all stages from concept development to final editing and distribution." // Dynamic description
        keywords={MediaProductionButtons} // Dynamic keywords
        imagePosition="left"
        id={"mediaProduction"}

      />
      <DigitalMarketing
        imageSrc="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fserviceimages%2Fpana2.png?alt=media&token=0d95068c-1d2b-419f-9b45-49fad0c8193b" // Dynamic image
        title="ARCHITECTURE" // Dynamic title
        description="The art and science of designing and constructing buildings and other structures, focusing on aesthetics, functionality, and sustainability." // Dynamic description
        keywords={ArchitectureButtons} // Dynamic keywords
        imagePosition="right"
        id={"architecture"}

      />
    </div>
  );
}

export default page;
