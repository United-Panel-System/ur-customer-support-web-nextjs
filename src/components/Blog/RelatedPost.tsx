import { formatDate } from "@/lib/helper/dateformatter";
import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <Link
      href={slug}
      className="group flex items-center rounded-md p-2 transition-colors hover:bg-gray-100 lg:block xl:flex dark:hover:bg-gray-800"
    >
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title} fill unoptimized />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <span className="group-hover:text-primary dark:group-hover:text-primary mb-[6px] block text-base leading-snug font-medium text-black transition-colors dark:text-white">
            {title}
          </span>
        </h5>
        <p className="text-body-color text-xs font-medium">
          {formatDate(date)}
        </p>
      </div>
    </Link>
  );
};

export default RelatedPost;
