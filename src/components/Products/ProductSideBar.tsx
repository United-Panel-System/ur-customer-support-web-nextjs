"use client";

import { ProductCategory } from "@/types/products";
import { useRouter, useSearchParams } from "next/navigation";
import slugify from "slugify";

interface CategoryFilterProps {
  categories: ProductCategory[];
  currentCategory?: string;
  searchQuery?: string;
  className?: string;
  title?: string;
  allCategoryText?: string;
}

const ProductSideBar = ({
  categories = [],
  currentCategory = "",
  searchQuery = "",
  className = "",
  title = "Categories",
  allCategoryText = "All Category",
}: CategoryFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const buildQueryString = (params: {
    page?: number;
    search?: string;
    category?: string;
  }) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (params.page) newParams.set("page", params.page.toString());
    if (params.search !== undefined) {
      params.search.trim()
        ? newParams.set("search", params.search.trim())
        : newParams.delete("search");
    }
    if (params.category !== undefined) {
      params.category
        ? newParams.set("category", params.category)
        : newParams.delete("category");
    }
    return newParams.toString();
  };

  const handleCategoryFilter = (category: string) => {
    router.push(
      `/products?${buildQueryString({
        page: 1,
        search: searchQuery,
        category: category ? slugify(category, { lower: true }) : "",
      })}`,
      { scroll: false },
    );
  };

  return (
    <div className={`w-full lg:w-1/5 ${className}`}>
      {categories.length > 0 && (
        <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
          <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
            {title}
          </h3>
          <ul className="space-y-2 p-4">
            <li>
              <button
                onClick={() => handleCategoryFilter("")}
                className={`w-full cursor-pointer rounded-md px-4 py-2 text-left text-base font-medium transition ${
                  !currentCategory
                    ? "bg-primary text-white"
                    : "text-body-color dark:text-body-color-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {allCategoryText}
              </button>
            </li>
            {categories.map((item, index) => (
              <li key={item.id || index}>
                <button
                  onClick={() => handleCategoryFilter(item.name)}
                  className={`w-full cursor-pointer rounded-md px-4 py-2 text-left text-base font-medium transition ${
                    currentCategory === slugify(item.name, { lower: true })
                      ? "bg-primary text-white"
                      : "text-body-color dark:text-body-color-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSideBar;
