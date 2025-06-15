"use client";

import { useEffect, useRef, useState } from "react";
import { ProductCategory, Products } from "@/types/products";
import slugify from "slugify";
import ProductSideBar from "./ProductSideBar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type SwiperCore from "swiper";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedDiv, AnimatedLink } from "../Animation";
import { ImageGallery } from "../Common/ImageGallery";

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
                  <ImageGallery
                    images={product.imageUrls}
                    itemName={product.name}
                    variant={"product"}
                  />
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
                        className="text-body-color dark:text-body-color-dark text-justify"
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
                        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-primary px-8 py-4 font-bold text-white shadow-lg hover:bg-primary hover:shadow-xl"
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
