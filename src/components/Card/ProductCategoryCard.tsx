"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProductCategoryCardProps {
  name: string;
  image: string;
  href: string;
}

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  name,
  image,
  href,
}) => {
  return (
    <Link
      href={href}
      className="drop-shadow-three relative mx-auto block w-full max-w-xs transform overflow-hidden rounded-lg transition-transform hover:scale-102 dark:block dark:drop-shadow-none"
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="h-[200px] w-full rounded-lg object-cover"
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-black/50 p-3">
        <h5 className="text-lg font-semibold text-white">{name}</h5>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
