import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ServiceCTA from "@/components/CTA/serviceCTA";
import ServiceSection from "@/components/OurService/serviceSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Service",
  description: "Service page description",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Services"
        description="Explore our high-performance insulated panels engineered for industrial and commercial excellence."
        image="/images/banner/img-support.jpg"
      />
      <ServiceSection />

      <ServiceCTA />
    </>
  );
};

export default ServicePage;
