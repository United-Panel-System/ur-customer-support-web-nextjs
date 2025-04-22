import GeneralIconCard from "../Card/GeneralIconCard";
import SectionTitle from "../Common/SectionTitle";
import ourServicesData from "./ourServicesData";

const ServiceSection = () => {
  return (
    <>
      <section id="service-section" className="pt-8 md:pt-12 lg:pt-20">
        <div className="container">
          {/* <SectionTitle
            title="Our Services"
            paragraph="Explore our high-performance insulated panels engineered for industrial and commercial excellence."
            center
          /> */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ourServicesData.map((service, index) => (
              <GeneralIconCard key={index} item={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
