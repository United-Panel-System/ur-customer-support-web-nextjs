"use client";
import { Products } from "@/types/products";
import Link from "next/link";
import slugify from "slugify";

const ProductCard = ({ product }: { product: Products }) => {
  const { name, imageUrls, manufacturer, description } = product;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      <Link
        href={`/product/${slugify(product.name, { lower: true })}-${product.id}`}
        className="relative block w-full"
      >
        <img
          src={
            imageUrls != null && imageUrls.length > 0
              ? imageUrls[0]
              : "/images/product/product.jpg"
          }
          alt="product-banner"
          className="h-48 w-full cursor-pointer object-cover"
        />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={`/product/${slugify(product.name, { lower: true })}-${product.id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-red-500 sm:text-2xl dark:text-white dark:hover:text-red-500"
          >
            {name}
          </Link>
        </h3>

        {description ? (
          <div
            className="text-body-color line-clamp-3 text-base font-medium text-gray-700 dark:border-white/10"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        ) : (
          <p className="text-gray-500 italic"></p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
