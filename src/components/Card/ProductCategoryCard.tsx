import Link from "next/link";
import Image from "next/image";
import { AnimatedDiv } from "../Animation";

interface ProductCategoryCardProps {
  name: string;
  image: string;
  href: string;
}

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  name,
  image,
  href,
}) => (
  <AnimatedDiv
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.1 }}
    className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full overflow-hidden rounded-md bg-white duration-300"
  >
    <Link
      href={href}
      className="drop-shadow-three relative block w-full overflow-hidden rounded-md"
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="h-[200px] w-full rounded-md object-cover"
        unoptimized
      />
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-black/50 p-3">
        <h5 className="text-lg font-semibold text-white">{name}</h5>
      </div>
    </Link>
  </AnimatedDiv>
);

export default ProductCategoryCard;
