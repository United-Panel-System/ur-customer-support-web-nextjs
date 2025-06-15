"use client";
import { News } from "@/types/news";
import RelatedPost from "../Blog/RelatedPost";
import { formatDate } from "@/lib/helper/dateformatter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import { AnimatedDiv } from "../Animation";
import { FiCalendar } from "react-icons/fi";
import { ImageGallery } from "../Common/ImageGallery";
interface NewsDetailsProps {
  news: News;
  moreNews: News[];
}

export default function NewsDetails({ news, moreNews }: NewsDetailsProps) {
  const { title, imageUrls, date, description } = news;

  const router = useRouter();
  const handleYearSelection = (year: string) => {
    router.push(`/news?year=${year}`);
  };

  return (
    <section className="overflow-hidden pt-16 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <AnimatedDiv staggerChildren={0.2}>
              <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                {title}
              </h1>
              <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <div className="w-full">
                      <span className="text-body-color dark:text-body-color-dark mb-1 text-base font-medium">
                        By <span> United-Panel System (M) Sdn. Bdn.</span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="text-body-color dark:text-body-color-dark mr-5 flex items-center text-base font-medium">
                      <FiCalendar className="mr-3" />
                      {formatDate(date)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <ImageGallery images={imageUrls} itemName={title} showThumbnails={false} variant={"news"} />
              </div>
              <div className="border-body-color/10 mb-12 border-b pb-12 lg:border-0">
                {description ? (
                  <div
                    className="prose prose-sm max-w-none text-body-color dark:text-body-color-dark dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                ) : (
                  <p className="text-body-color dark:text-body-color-dark italic">
                    No description available
                  </p>
                )}
              </div>
            </AnimatedDiv>
          </div>
          <AnimatedDiv staggerChildren={0.2} className="w-full px-4 lg:w-4/12">
            {moreNews && moreNews.length > 0 && (
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  More News
                </h3>
                <ul className="p-8">
                  {moreNews.map((item, index) => (
                    <li
                      key={item.id || index}
                      className={`border-body-color/10 ${index !== moreNews.length - 1 ? "mb-6 border-b pb-6" : ""} dark:border-white/10`}
                    >
                      <RelatedPost
                        title={item.title}
                        image={item.imageUrls[0] || "/images/blog/post-03.jpg"}
                        slug={`/news/${slugify(item.title, { lower: true })}-${item.id}`}
                        date={item.date || "No date"}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
              <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                Year Selection
              </h3>
              <ul className="space-y-2 px-8 py-6">
                {Array.from(
                  { length: 5 },
                  (_, i) => new Date().getFullYear() - i,
                ).map((year) => (
                  <li key={year}>
                    <button
                      onClick={() => handleYearSelection(year.toString())}
                      className="text-body-color hover:text-primary w-full cursor-pointer rounded-md px-2 py-2 text-left text-base font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
