"use client";
import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { storage } from "@/lib/firebase";

const CompaniesScroll = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyImages = async () => {
      try {
        const folderRef = ref(storage, "companiesImages/");
        const imageList = await listAll(folderRef);

        // Fetch the URLs for each image
        const imagePromises = imageList.items.map(async (imageRef) => {
          const url = await getDownloadURL(imageRef);
          return { src: url, alt: imageRef.name }; // Return image with URL and alt text
        });

        const images = await Promise.all(imagePromises); // Resolve all promises
        setCompanies(images); // Update state with the image URLs
        setLoading(false);
      } catch (error) {
        console.error("Error fetching company images:", error);
        setLoading(false);
      }
    };

    fetchCompanyImages(); // Fetch images when component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while images are being fetched
  }
  return (
    <div className="relative w-full overflow-hidden border-b-8 border-b-brand bg-gray-300">
      <InfiniteMovingCards
        items={companies}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="my-custom-class"
      />
    </div>
  );
};

export default CompaniesScroll;
