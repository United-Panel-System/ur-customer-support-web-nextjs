"use client";
import { Products } from "@/types/products";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image"; // Using Next.js Image component for better performance

const ProductCard = ({ product }: { product: Products }) => {
  const { name, imageUrls, manufacturer, description } = product;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full cursor-pointer overflow-hidden rounded-xs bg-white duration-300 transition-shadow">
      <Link
        href={`/products/${slugify(product.name, { lower: true })}-${product.id}`}
        className="relative block w-full"
      >
        {/* Image Section - Responsive */}
        <div className="relative h-40 w-full sm:h-48">
          <Image
            src={
              imageUrls != null && imageUrls.length > 0
                ? imageUrls[0]
                : "/images/product/product.jpg"
            }
            alt={name || "Product image"}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Content Section - Responsive */}
        <div className="p-4 sm:p-6 md:p-5 lg:p-6">
          <h3>
            <div className="hover:text-primary dark:hover:text-primary mb-3 block text-lg font-bold text-black sm:mb-4 sm:text-2xl dark:text-white line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}>
              {name}
            </div>
          </h3>

          {description ? (
            <div className="hidden sm:block">
              <div
                className="text-body-color dark:text-body-color-dark line-clamp-3 text-sm font-medium sm:text-base dark:border-white/10"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                }}
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              /></div>
          ) : (
            <p className="text-gray-500 italic text-sm sm:text-base">
              No description available
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;