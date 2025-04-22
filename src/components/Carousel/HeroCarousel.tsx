"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  {
    image: "/images/banner/banner1.png",
    alt: "banner1",
    link: "/products",
    title: "ASEAN's First & Only PIR Double Belt Continuous Line",
  },
  {
    image: "/images/banner/banner2.png",
    alt: "banner2",
    link: "/products",
  },
  {
    image: "/images/banner/banner3.png",
    alt: "banner3",
    link: "/services",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px] lg:h-[550px]">
      {banners.map((banner, index) => (
        <Link
          href={banner.link}
          key={index}
          className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
          {/* Optional banner text */}
          {banner.title && (
            <div
              className={`absolute bottom-0 left-0 flex transform flex-col items-start justify-start bg-gradient-to-r from-black to-transparent p-6 transition-all duration-1000 ease-out sm:w-3/5 sm:px-8 lg:px-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="mx-3 my-3 text-left font-bold text-white sm:!mx-6 sm:!my-10 sm:text-xl md:text-3xl lg:text-4xl">
                {banner.title}
              </h1>
            </div>
          )}
        </Link>
      ))}

      {/* Dots indicator (optional) */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
