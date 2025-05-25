import Image from "next/image";
import Link from "next/link";
import { AnimatedDiv } from "../Animation";

const GeneralCard = ({ item }) => {
  const { title, image, description, url } = item;
  return (
    <AnimatedDiv
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full overflow-hidden rounded-xs bg-white duration-300"
    >
      <Link href={url} className="relative block aspect-37/22 w-full">
        <Image src={image} alt="image" fill />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={url}
            className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body-color dark:text-body-color-dark text-base font-medium">
          {description}
        </p>
      </div>
    </AnimatedDiv>
  );
};

export default GeneralCard;
