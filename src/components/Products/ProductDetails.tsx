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
import { useRouter } from "next/navigation";

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
  const swiperRef = useRef<SwiperCore>(null);

  const handleThumbnailClick = (index: number) => {
    if (!swiperRef.current) {
      console.error("Swiper instance not found");
      return;
    }

    swiperRef.current.slideTo(index);
  };

  return (
    <section className="pt-[50px] pb-[120px]">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductSideBar
            categories={categories}
            currentCategory={filterCategory}
            searchQuery={searchQuery}
            className="mb-8 hidden lg:block lg:w-1/5"
            title="Product Categories"
            allCategoryText="Show All"
          />

          {/* Main Content Area */}
          <div className="w-full lg:w-4/5">
            {product ? (
              <>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Image Gallery */}
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800/50">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{
                          clickable: true,
                          bulletClass:
                            "swiper-pagination-bullet !bg-gray-300 dark:!bg-gray-600",
                          bulletActiveClass:
                            "!bg-primary dark:!bg-primary-light",
                        }}
                        loop={true}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => {
                          swiperRef.current = swiper;
                        }}
                        onInit={(swiper) => {
                          swiperRef.current = swiper;
                        }}
                        className="rounded-lg"
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
                    </div>

                    {/* Thumbnail Navigation (optional) */}
                    {product.imageUrls.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {product.imageUrls.map((imgUrl, index) => (
                          <button
                            key={index}
                            className="hover:border-primary relative aspect-square overflow-hidden rounded-md border-2 border-transparent transition-all"
                            onClick={() => handleThumbnailClick(index)}
                          >
                            <img
                              src={imgUrl}
                              alt={`Thumbnail ${index + 1}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            product.isActive
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {product.isActive ? "In Stock" : "Out of Stock"}
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
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      ) : (
                        <p className="text-gray-500 italic dark:text-gray-400">
                          No description available
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                      <button
                        className="bg-primary hover:bg-primary-dark flex-1 cursor-pointer rounded-lg px-6 py-3 font-medium text-white transition-colors"
                        onClick={() => router.push("/contact-us")}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </>
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
