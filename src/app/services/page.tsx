import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import ServiceCTA from "@/components/CTA/serviceCTA";
import ServiceSection from "@/components/Services/ServiceSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our high-performance insulated panels engineered for industrial and commercial excellence.",
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
