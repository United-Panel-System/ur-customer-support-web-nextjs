import { getNews, getProducts, getProjects } from "@/api/api";
import PartnershipCarousel from "@/components/Carousel/PartnershipCarousel";
import ScrollUp from "@/components/Common/ScrollUp";
import LandingHero from "@/components/Hero/LandingHero";
import NewsSection from "@/components/NewsSection/HomeNews";
import OurProducts from "@/components/Products/OurProducts";
import OurProject from "@/components/Projects";
import OurServices from "@/components/Services/OurService";
import { Metadata } from "next";
import { AboutUsStickyScroll } from "@/components/About/AboutUsStickyScroll";

// Metadata for SEO
export const metadata: Metadata = {
  title: "United Panel-System (M) Sdn. Bhd.",
  description:
    "ASEAN's First & Only PIR Double Belt Continuous Line | Solution for your cold storage needs | PIR, PU and PS Panels Malaysia",
};

// SSG: Fetch data at build time using async function
export default async function Home() {
  //const products = await getProducts({ pageSize: 3, isActive: true });
  const projects = await getProjects(
    { isActive: true },
    {
      cache: "no-store",
    },
  );
  const news = await getNews(
    { pageSize: 3, isActive: true },
    {
      cache: "no-store",
    },
  );
  return (
    <>
      <ScrollUp />
      <LandingHero />
      <OurProducts />
      <OurServices />
      <OurProject projectData={projects.data} />
      <PartnershipCarousel />
      <NewsSection newsData={news.data} />
      <AboutUsStickyScroll
        content={[
          {
            title: "Our Story",
            description:
              "UNITED PANEL-SYSTEM (M) SDN. BHD., formerly known as UNITED REFRIGERATOR TRADING SDN. BHD, has been a leader in producing of injection polyurethane (PU), polyisocyanurate (PIR), and polystyrene (PS) insulated panels for walk-in cold rooms and refrigeration/food storage facilities. Since its founding in 1978, we have grown into a reputable company committed to quality and innovation.",
            image: "/images/about/contactUs.png",
          },
          {
            title: "Refrigeration Systems",
            description:
              "UNITED REFRIGERATION SYSTEM (M) SDN. BHD. and UNITED COLD-SYSTEM (M) SDN. BHD. are our arms for refrigeration services, providing top-notch systems for various industrial and commercial applications.",
            image: "/images/about/refrigeration.png",
          },
          {
            title: "Our Manufacturing Plant",
            description:
              "As the largest multi-purpose manufacturing plant in Malaysia, we offer a wide range of products for commercial and industrial refrigeration systems. Our fully automated production line ensures precision and quality.",
            image: "/images/about/manufacturingPlant.png",
          },
        ]}
      />
    </>
  );
}

export const revalidate = 600;
