"use client";

import { useEffect, useRef, useState } from "react";
import { ProductCategory, Products } from "@/types/products";
import slugify from "slugify";
import ProductSideBar from "./ProductSideBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type SwiperCore from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedDiv, AnimatedLink } from "../Animation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductDetailsProps {
  product: Products;
  categories?: ProductCategory[];
  searchQuery?: string;
  filterCategory?: string;
}

export default function ProductDetails({
  product,
  categories = [],
  searchQuery = "",
  filterCategory = "",
}: ProductDetailsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const swiperRef = useRef<SwiperCore>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const buildQueryString = (params: {
    page?: number;
    search?: string;
    category?: string;
  }) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (params.page) newParams.set("page", params.page.toString());
    if (params.search !== undefined) {
      params.search.trim()
        ? newParams.set("search", params.search.trim())
        : newParams.delete("search");
    }
    if (params.category !== undefined) {
      params.category
        ? newParams.set("category", params.category)
        : newParams.delete("category");
    }
    return newParams.toString();
  };

  const handleCategoryFilter = (category: string) => {
    router.push(
      `/products?${buildQueryString({
        page: 1,
        search: searchQuery,
        category: category ? slugify(category, { lower: true }) : "",
      })}`,
      { scroll: false },
    );
    // Close the sheet after selection
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  };

  const handleThumbnailClick = (index: number) => {
    if (!swiperRef.current) {
      console.error("Swiper instance not found");
      return;
    }
    swiperRef.current.slideTo(index);
  };

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    const onSlideChange = () => {
      setActiveIndex(swiper.realIndex);
    };
    swiper.on("slideChange", onSlideChange);
    setActiveIndex(swiper.realIndex || 0);
    return () => {
      swiper.off("slideChange", onSlideChange);
    };
  }, []);

  return (
    <section className="pt-[50px] pb-[120px]">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductSideBar
            categories={categories}
            currentCategory={filterCategory}
            handleCategoryFilter={handleCategoryFilter}
            className="hidden lg:block lg:w-1/5"
            title="Product Categories"
            allCategoryText="Show All"
          />

          {/* Main Content Area */}
          <div className="w-full lg:w-4/5">
            {product ? (
              <AnimatedDiv
                variant="slideUp"
                staggerChildren={0.2}
                className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main Swiper */}
                  <div className="group relative overflow-hidden rounded-md shadow-lg dark:shadow-gray-800/50">
                    <Swiper
                      spaceBetween={10}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                      }}
                      className="main-swiper rounded-md"
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setActiveIndex(swiper.realIndex || 0);
                      }}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                    >
                      {product.imageUrls.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative aspect-square w-full">
                            <img
                              src={imgUrl}
                              alt={`${product.name} - ${index + 1}`}
                              className="h-full w-full object-cover"
                              loading={index === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    {product.imageUrls.length > 1 && (
                      <>
                        <button className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/80">
                          <ChevronLeft />
                        </button>
                        <button className="swiper-button-next-custom absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/80">
                          <ChevronRight />
                        </button>
                      </>
                    )}

                    {/* Page/Total Tag */}
                    <span className="absolute right-2 bottom-2 z-[10] rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                      {activeIndex + 1}/{product.imageUrls.length}
                    </span>
                  </div>

                  {/* Thumbnail Swiper */}
                  {product.imageUrls.length > 1 && (
                    <div className="relative">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        navigation={{
                          nextEl: ".thumbs-button-next",
                          prevEl: ".thumbs-button-prev",
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbs-swiper"
                      >
                        {product.imageUrls.map((imgUrl, index) => (
                          <SwiperSlide key={index}>
                            <button
                              className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                                index === activeIndex
                                  ? "border-primary ring-primary/20 ring-2"
                                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                              }`}
                            >
                              <img
                                src={imgUrl}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                              {/* Active indicator overlay */}
                              {index === activeIndex && (
                                <div className="bg-primary/10 absolute inset-0" />
                              )}
                            </button>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div className="border-b py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose dark:prose-invert max-w-none">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                      Product Details
                    </h2>
                    {product.description ? (
                      <div
                        className="text-body-color dark:text-body-color-dark"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    ) : (
                      <p className="text-body-color dark:text-body-color-dark italic dark:text-gray-400">
                        No description available
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <AnimatedDiv variant="slideUp" className="w-full">
                      <AnimatedLink
                        href="/contact#enquiry"
                        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-red-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-red-600 hover:shadow-xl"
                      >
                        <span className="relative">Get Quote</span>
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </AnimatedLink>
                    </AnimatedDiv>
                  </div>
                </div>
              </AnimatedDiv>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center">
                <div className="text-body-color dark:text-body-color-dark text-center text-xl font-medium">
                  No products found
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
