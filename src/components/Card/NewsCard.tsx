"use client";
import { formatDate } from "@/lib/helper/dateformatter";
import { News } from "@/types/news";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsCard = ({ news }: { news: News }) => {
  const { title, imageUrls, date, description } = news;

  const [cleanDescription, setCleanDescription] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCleanDescription(description);
    }
  }, [description]);

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      <Link href="/item-details" className="relative block w-full">
        <img
          src={
            imageUrls != null && imageUrls.length > 0
              ? imageUrls[0]
              : "/images/news/news.jpg"
          }
          alt="news-banner"
          className="h-48 w-full cursor-pointer object-cover"
        />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="/item-details"
            className="mb-4 block text-xl font-bold text-black hover:text-red-500 sm:text-2xl dark:text-white dark:hover:text-red-500"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {formatDate(date)}
        </p>

        {cleanDescription ? (
          <div
            className="text-body-color line-clamp-3 text-base font-medium text-gray-700 dark:border-white/10"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        ) : (
          <p className="text-gray-500 italic">No description available</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
