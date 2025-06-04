"use client";
import { AnimatedDiv } from "../Animation";
import { Truck, CheckCircle, Globe } from "lucide-react";

export const ShippingSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28 dark:bg-gray-950">
      <div className="container">
        <AnimatedDiv className="mx-auto max-w-4xl text-center">
          <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-white-300 mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium">
            <Globe className="mr-2" size={18} />
            INTERNATIONAL SHIPPING
          </div>
          <h2 className="mb-4 text-3xl !leading-tight font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
            Now Available for{" "}
            <span className="text-primary dark:text-primary-400">
              US Delivery
            </span>
          </h2>
          <p className="text-body-color mx-auto mb-12 max-w-[600px] text-base md:text-lg dark:text-gray-300">
            We offer shipping to different countries including United States
            with competitive rates and reliable logistics.
          </p>
        </AnimatedDiv>

        <div className="grid gap-8 sm:grid-cols-3">
          <AnimatedDiv
            variant="slideUp"
            className="group hover:border-primary/30 dark:hover:border-primary/50 rounded-lg border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
              <Truck size={20} />
            </div>
            <h3 className="text-dark mb-2 text-lg font-semibold dark:text-gray-100">
              Nationwide Coverage
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              Serving all U.S. states including Alaska and Hawaii
            </p>
          </AnimatedDiv>

          <AnimatedDiv
            variant="slideUp"
            className="group hover:border-primary/30 dark:hover:border-primary/50 rounded-lg border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
              <CheckCircle size={20} />
            </div>
            <h3 className="text-dark mb-2 text-lg font-semibold dark:text-gray-100">
              Customs Cleared
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              Hassle-free documentation and customs processing
            </p>
          </AnimatedDiv>

          <AnimatedDiv
            variant="slideUp"
            className="group hover:border-primary/30 dark:hover:border-primary/50 rounded-lg border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                <path d="M8.5 8.5v.01"></path>
                <path d="M16 15.5v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M11 17v.01"></path>
                <path d="M7 14v.01"></path>
              </svg>
            </div>
            <h3 className="text-dark mb-2 text-lg font-semibold dark:text-gray-100">
              Competitive Rates
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              Affordable shipping options with volume discounts
            </p>
          </AnimatedDiv>
        </div>

      </div>
    </section>
  );
};
