"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const allImages = [
  // Exclusive
  { src: "/images/partner/bitzer_290.jpeg", alt: "Bitzer", type: "Exclusive" },
  { src: "/images/partner/lu-ve-contardo_290.jpeg", alt: "LU-VE", type: "Exclusive" },

  // Authorised
  { src: "/images/partner/ap-01.png", alt: "Hailiang", type: "Authorised" },
  { src: "/images/partner/ap-02.png", alt: "Grant Ice Systems", type: "Authorised" },
  { src: "/images/partner/ap-03.png", alt: "FERMOD", type: "Authorised" },
  { src: "/images/partner/ap-04.png", alt: "Danfoss", type: "Authorised" },
  { src: "/images/partner/ap-05.png", alt: "Every Control Group", type: "Authorised" },
  { src: "/images/partner/ap-06.png", alt: "EMERSON Climate Technologies", type: "Authorised" },
  { src: "/images/partner/ap-07.png", alt: "Alco Controls", type: "Authorised" },
  { src: "/images/partner/ap-08.png", alt: "EBMPAPST", type: "Authorised" },
  { src: "/images/partner/ap-09.png", alt: "Embraco", type: "Authorised" },
  { src: "/images/partner/ap-10.png", alt: "Maneurop", type: "Authorised" },
  { src: "/images/partner/ap-11.png", alt: "Castel", type: "Authorised" },
  { src: "/images/partner/ap-12.png", alt: "Guntner", type: "Authorised" },
];

const PartnershipCarousel = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(6);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerSlide(2);
      else if (width < 768) setItemsPerSlide(3);
      else if (width < 1024) setItemsPerSlide(4);
      else if (width < 1280) setItemsPerSlide(5);
      else setItemsPerSlide(6);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  return (
    <section className="bg-slate-700 dark:bg-gray-dark py-10 md:py-16 lg:py-20">
      <div className="container mx-auto">
        {/* <h2 className="mb-8 text-center text-xl md:text-2xl font-bold text-white">
          Our Distributorships
        </h2> */}
        <SectionTitle
          title="Our Distributorships"
          paragraph=""
          center
          mb="40px"
        />

        <Swiper
          modules={[Autoplay]}
          slidesPerView={itemsPerSlide}
          spaceBetween={30}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1000}
        >
          {allImages.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-3"
              >
                {/* Badge */}
                <span
                  className={`mb-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.type === "Exclusive"
                    ? "bg-yellow-500"
                    : "bg-blue-500"
                    }`}
                >
                  {item.type}
                </span>

                {/* Logo */}
                <div className="relative aspect-[2/1] w-full rounded bg-white p-2 shadow-md">
                  <a href="/about/partners">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnershipCarousel;
