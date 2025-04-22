"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const PartnershipCarousel = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerSlide(2);
      else if (width < 768) setItemsPerSlide(3);
      else if (width < 1024) setItemsPerSlide(4);
      else setItemsPerSlide(5);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const images = [
    "/images/partner/ap-01.png",
    "/images/partner/ap-02.png",
    "/images/partner/ap-03.png",
    "/images/partner/ap-04.png",
    "/images/partner/ap-05.png",
    "/images/partner/ap-06.png",
    "/images/partner/ap-07.png",
  ];

  return (
    <section className="bg-gray-light dark:bg-gray-dark flex py-16">
      <div className="relative mx-auto flex w-1/2 w-full items-center justify-center px-5 py-[15px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={itemsPerSlide}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          className="partner-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full items-center justify-center">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={100}
                  className="h-auto w-full max-w-[160px] rounded object-contain shadow-md transition-transform duration-300 hover:scale-105 sm:max-w-[180px] md:max-w-[220px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnershipCarousel;
