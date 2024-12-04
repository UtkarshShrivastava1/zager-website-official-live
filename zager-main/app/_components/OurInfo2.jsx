"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import fetchUrlFromFirestore from "@/lib/fetchUrlFromFirestore";
const OurInfo2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const collectionName = "generalImage";  // Define your collection name
  const documentName = "doc";  
  useEffect(() => {
    const getUrl = async () => {

      setError(null); // Reset error before fetching

      try {
        const fetchedUrl = await fetchUrlFromFirestore(collectionName, documentName);
        setUrl(fetchedUrl); // Update URL state with the fetched URL
      } catch (error) {
        setError('Error fetching URL');
      } 
    };

    getUrl(); // Call the async function inside useEffect
  }, [collectionName, documentName]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // Adjust this value based on when you want the animation to start
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="relative w-full lg:h-[450px] md:h-[400px] h-[400px] overflow-hidden">
      <div
        className={cn(
          "absolute top-0 right-0 h-full transition-transform duration-700 ease-in-out",
          isVisible ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: "50%" }}
      >
         {url ? (
          <Image src={url} alt="Sliding Image" layout="fill" objectFit="cover" />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
      <div
        className={cn(
          "absolute text-white top-0 left-0 h-full flex flex-col justify-center items-center p-8 transition-opacity duration-700 ease-in-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ width: "50%" }}
      >
        <h2 className="text-2xl font-bold mb-4">JK WORKS</h2>
        <p className="mb-4 md:w-3/5">Welcome to JK Works, your premier partner in architecture and interior design.</p>
        <Link className="md:mt-4 border-2 rounded-lg border-white text-md px-6 py-2 " href={"/jk-works"}>Know More</Link>

      </div>
    </div>
  );
};

export default OurInfo2;
