import { AnimatedDiv } from "../Animation";
import GeneralCard from "../Card/GeneralCard";
import SectionTitle from "../Common/SectionTitle";
import ourProductsData from "./ourProductsData";

const OurProducts = () => {
  return (
    <>
      <section id="our-products" className="relative py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Products"
            paragraph="Explore our high-performance insulated panels engineered for industrial and commercial excellence."
            center
          />

          <AnimatedDiv
            variant="slideUp"
            staggerChildren={0.2}
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {ourProductsData.map((product, index) => (
              <AnimatedDiv variant="slideUp" key={index} className="h-full">
                <GeneralCard key={index} item={product} />
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
