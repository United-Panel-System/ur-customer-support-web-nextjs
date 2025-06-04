"use client";
import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv } from "../Animation";

const ServiceCTA = () => {
  return (
    <section id="serviceCTA" className="mt-24 py-8 md:py-12 lg:py-20">
      <div className="container">
        <WobbleCard className="to-primary-50 relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 px-6 py-12 shadow-xl sm:px-10 lg:px-16 dark:from-gray-700 dark:to-gray-900">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10"></div>

          <div className="relative z-10 md:flex md:items-center md:justify-between md:gap-8">
            {/* Text Content */}
            <AnimatedDiv className="mb-10 text-center md:mb-0 md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                Your <span className="text-primary">One Stop</span>{" "}
                Refrigeration Solution
              </h3>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                Premium cold system services for industrial and commercial needs
                with 24/7 support.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Link
                  href="/contact#enquiry"
                  className="group bg-primary hover:bg-primary/90 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  <span className="relative">Get Quote</span>
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedDiv>

            {/* Image */}
            <AnimatedDiv className="mx-auto w-full max-w-xs md:mx-0 md:max-w-md">
              <Image
                src="/images/banner/support.png"
                width={500}
                height={500}
                alt="Refrigeration Support Team"
                className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </AnimatedDiv>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default ServiceCTA;
