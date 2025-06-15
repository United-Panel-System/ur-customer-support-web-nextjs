"use client";
import { formatDate } from "@/lib/helper/dateformatter";
import { News } from "@/types/news";
import Link from "next/link";
import slugify from "slugify";
import SafeHtml from "../Common/SafeHtml";

const NewsCard = ({ news }: { news: News }) => {
  const { title, imageUrls, date, description } = news;

  const imageUrl =
    imageUrls && imageUrls.length > 0
      ? imageUrls[0]
      : "/images/news/news.jpg";

  const slug = `/news/${slugify(title, { lower: true })}-${news.id}`;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full overflow-hidden rounded-md bg-white duration-300">
      <Link href={slug} className="relative block w-full">
        <img
          src={imageUrl}
          alt={title || "News Image"}
          className="h-48 w-full cursor-pointer object-cover"
        />

        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="hover:text-primary dark:hover:text-primary mb-4 text-xl font-bold text-black sm:text-2xl dark:text-white line-clamp-2">
            {title}
          </h3>

          <p className="dark:text-body-color-dark mb-4 text-sm text-gray-500">
            {formatDate(date)}
          </p>

          {description ? (
            <SafeHtml html={description} />
          ) : (
            <p className="text-gray-500 italic">No description available</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
