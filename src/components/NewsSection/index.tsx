"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import NewsCard from "../Card/NewsCard";
import { News } from "@/types/news";

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
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
}
