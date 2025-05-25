"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import NewsCard from "../Card/NewsCard";
import { News } from "@/types/news";
import { AnimatedDiv } from "../Animation";

interface NewsSectionProps {
  newsData: News[];
}

export default function NewsSection({ newsData = [] }: NewsSectionProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="News & Updates"
          paragraph="Keep up with our latest projects, innovations, and milestones."
          center
          mb="80px"
        />
        <AnimatedDiv
          variant="slideUp"
          staggerChildren={0.2}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {newsData.map((news, index) => (
            <AnimatedDiv
              variant="slideUp"
              whileHover={{
                scale: 1.05,
                rotate: -1,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="h-full"
            >
              <NewsCard key={index} news={news} />
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
}
