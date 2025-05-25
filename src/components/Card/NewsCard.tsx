"use client";
import { formatDate } from "@/lib/helper/dateformatter";
import { News } from "@/types/news";
import Link from "next/link";
import { useEffect, useState } from "react";
import slugify from "slugify";

const NewsCard = ({ news }: { news: News }) => {
  const { title, imageUrls, date, description } = news;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full overflow-hidden rounded-xs bg-white duration-300">
      <Link
        href={`/news/${slugify(news.title, { lower: true })}-${news.id}`}
        className="relative block w-full"
      >
        <img
          src={
            imageUrls != null && imageUrls.length > 0
              ? imageUrls[0]
              : "/images/news/news.jpg"
          }
          alt="news-banner"
          className="h-48 w-full cursor-pointer object-cover"
        />

        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}
            >
              {title}
            </div>
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            {formatDate(date)}
          </p>

          {description ? (
            <div
              className="text-body-color line-clamp-3 text-base font-medium text-gray-700 dark:border-white/10 dark:text-gray-400"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="text-gray-500 italic">No description available</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
