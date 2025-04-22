import Image from "next/image";
import Link from "next/link";

const GeneralCard = ({ item }) => {
  const { title, image, description } = item;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href="/item-details"
          className="relative block aspect-37/22 w-full"
        >
          <Image src={image} alt="image" fill />
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
          <p className="border-body-color/10 text-body-color text-base font-medium dark:border-white/10">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default GeneralCard;
