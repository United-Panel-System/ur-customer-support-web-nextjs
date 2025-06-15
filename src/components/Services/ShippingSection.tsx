"use client";
import { FiPackage } from "react-icons/fi";
import { AnimatedDiv } from "../Animation";
import { Truck, CheckCircle, Globe } from "lucide-react";

export const ShippingSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28 dark:bg-gray-950">
      <div className="container">
        <AnimatedDiv className="mx-auto max-w-4xl text-center">
          <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-red-300 mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium border dark:border-red-500/30">
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
            with reliable logistics.
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
              Global Coverage
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              We deliver worldwide with strong support for U.S. shipments.
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
              End-to-End Service
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              From warehouse to doorstep, we handle every step for a smooth and stress-free delivery.
            </p>
          </AnimatedDiv>

          <AnimatedDiv
            variant="slideUp"
            className="group hover:border-primary/30 dark:hover:border-primary/50 rounded-lg border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
              <FiPackage size={20} />
            </div>
            <h3 className="text-dark mb-2 text-lg font-semibold dark:text-gray-100">
              Safe & Reliable Delivery
            </h3>
            <p className="text-body-color text-sm dark:text-gray-400">
              We ensure your orders arrive safely and on time.
            </p>

          </AnimatedDiv>
        </div>

      </div>
    </section>
  );
};
