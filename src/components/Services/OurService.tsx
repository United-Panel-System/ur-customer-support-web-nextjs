import { AnimatedDiv } from "../Animation";
import GeneralIconCard from "../Card/GeneralIconCard";
import SectionTitle from "../Common/SectionTitle";
import ourServicesData from "./ourServicesData";

const OurServices = () => {
  return (
    <>
      <section id="our-services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Explore our high-performance insulated panels engineered for industrial and commercial excellence."
            center
          />

          <AnimatedDiv
            variant="slideUp"
            staggerChildren={0.2}
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {ourServicesData.map((service, index) => (
              <AnimatedDiv variant="slideUp" key={index} className="h-full">
                <GeneralIconCard key={index} item={service} />
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
};

export default OurServices;
