"use client";
import { AnimatedDiv } from "../Animation";
import GeneralIconCard from "../Card/GeneralIconCard";
import SectionTitle from "../Common/SectionTitle";
import ourServicesData from "./ourServicesData";

const ServiceSection = () => {
  return (
    <>
      <section id="service-section" className="pt-8 md:pt-12 lg:pt-20">
        <div className="container">
          <AnimatedDiv
            variant="slideUp"
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {ourServicesData.map((service, index) => (
              <AnimatedDiv variant="slideUp" staggerChildren={0.2}>
                <GeneralIconCard key={index} item={service} />
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
