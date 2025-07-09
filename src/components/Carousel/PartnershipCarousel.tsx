"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
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
    "/images/partner/ap-04.png",
    "/images/partner/ap-05.png",
    "/images/partner/ap-06.png",
    "/images/partner/ap-07.png",
    "/images/partner/ap-08.png",
    "/images/partner/ap-09.png",
    "/images/partner/ap-10.png",
    "/images/partner/ap-11.png",
    "/images/partner/ap-12.png",
    "/images/partner/bitzer_290.jpeg",
    "/images/partner/csc.png",
    "/images/partner/cubigel_290.png",
    "/images/partner/henry_290.jpeg",
    "/images/partner/invotech_290.jpeg",
    "/images/partner/lu-ve-contardo_290.jpeg",
    "/images/partner/partmer-ap-01.png",
    "/images/partner/partmer-ap-03.png",
    "/images/partner/partmer-ap-11.png",
    "/images/partner/partmer-ap-12.png",
    "/images/partner/partmer-ap-14.png",
    "/images/partner/partmer-ap-15.png",
    "/images/partner/partmer-ap-16.png",
    "/images/partner/partmer-ap-19.png",
    "/images/partner/partmer-ap-20.png",
    "/images/partner/partmer-ap-23.png",
    "/images/partner/partmer-ap-24.png",
    "/images/partner/partmer-ap-25.png",
    "/images/partner/partmer-ap-26.png",
    "/images/partner/partmer-ap-27.png",
    "/images/partner/partmer-ap-28.png",
    "/images/partner/partmer-ap-29.png",
    "/images/partner/partmer-ap-30.png",
    "/images/partner/partmer-ap-31.png",
    "/images/partner/partmer-ap-32.png",
    "/images/partner/partmer-ap-33.png",
    "/images/partner/partmer-ap-34.png",
    "/images/partner/partmer-ap-35.png",
    "/images/partner/partmer-ap-36.png",
    "/images/partner/partmer-ap-37.png",
    "/images/partner/partmer-ap-38.png",
    "/images/partner/partmer-ap-39.png",
    "/images/partner/partmer-ap-40.png",
    "/images/partner/partmer-ap-41.png",
    "/images/partner/partmer-ap-42.png",
    "/images/partner/toyo_290.jpeg",
    "/images/partner/ap-01.png",
    "/images/partner/ap-02.png",
    "/images/partner/ap-03.png",
  ];

  return (
    <section className="dark:bg-gray-dark flex bg-slate-700 py-8 md:py-12 lg:py-20">
      <div className="relative mx-auto flex w-full items-center justify-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={itemsPerSlide}
          spaceBetween={30}
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
              <div className="flex h-full items-center justify-center overflow-visible px-2 py-2">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                    zIndex: 6,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <div className="relative aspect-[2/1] w-full">
                    <Image
                      src={src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-fit rounded shadow-md"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnershipCarousel;
