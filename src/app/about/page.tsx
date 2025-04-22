import AboutUs1 from "@/components/About/AboutUs1";
import AboutUs2 from "@/components/About/AboutUs2";
import VisionMission from "@/components/About/VisionMission";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";

import { Metadata } from "next";
import { title } from "process";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <BreadcrumbWithBgImg
        pageName="About Us"
        description="Since 1978, UNITED PANEL-SYSTEM (M) SDN. BHD. has been specializing in the production of high-quality insulated panels and refrigeration systems for the industrial sector."
        image="/images/banner/manufacturingPlant.png"
      />
      <AboutUs1
        item={{
          title: "Our Story",
          description:
            "UNITED PANEL-SYSTEM (M) SDN. BHD., formerly known as UNITED REFRIGERATOR TRADING SDN. BHD, has been a leader in producing of injection polyurethane (PU), polyisocyanurate (PIR), and polystyrene (PS) insulated panels for walk-in cold rooms and refrigeration/food storage facilities. Since its founding in 1978, we have grown into a reputable company committed to quality and innovation.",
          image: "/images/about/contactUs.png",
        }}
      />
      <AboutUs2
        item={{
          title: "Refrigeration Systems",
          description:
            "UNITED REFRIGERATION SYSTEM (M) SDN. BHD. and UNITED COLD-SYSTEM (M) SDN. BHD. are our arms for refrigeration services, providing top-notch systems for various industrial and commercial applications.",
          image: "/images/about/refrigeration.png",
        }}
      />
      <AboutUs1
        item={{
          title: "Our Manufacturing Plant",
          description:
            "As the largest multi-purpose manufacturing plant in Malaysia, we offer a wide range of products for commercial and industrial refrigeration systems. Our fully automated production line ensures precision and quality.",
          image: "/images/about/manufacturingPlant.png",
        }}
      />
      <VisionMission />
    </>
  );
};

export default AboutPage;
