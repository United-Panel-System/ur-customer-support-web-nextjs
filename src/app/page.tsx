import { getNews, getProducts, getProjects } from "@/api/api";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import PartnershipCarousel from "@/components/Carousel/PartnershipCarousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LandingHero from "@/components/Hero/LandingHero";
import NewsSection from "@/components/NewsSection";
import OurProducts from "@/components/Products";
import OurProject from "@/components/Projects";
import OurServices from "@/components/OurService";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "United-Panel System (M) Sdn. Bhd. Home Page",
  description: "This is Home for United-Panel System (M) Sdn. Bhd. website",
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
    </>
  );
}

export const revalidate = 600;
