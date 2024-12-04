"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import { firestore } from "@/lib/firebase";
// const images = [
//   "/aboutimg4.png",
//   "/aboutimg3.png",
//   "/aboutimg2.png",
//   "/aboutimg1.png",
// ];

function AboutImageCarousel() {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [error, setError] = React.useState(null); 
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "aboutImageCarousel")
        );
        const urls = querySnapshot.docs.map((doc) => doc.data().url); // Assuming each document has a 'url' field
        setImageUrls(urls);
      } catch (err) {
        console.error("Error fetching image URLs:", err);
        setError("Failed to load images");
      } finally {

      }
    };

    fetchImages();
  }, []);



  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {imageUrls.map((image, index) => (
          <CarouselItem key={index} className="flex-[1_0_100%]">
            <div className="p-0">
              <div className="flex aspect-square items-center justify-center w-full h-96">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default AboutImageCarousel;
