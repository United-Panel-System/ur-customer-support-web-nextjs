"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { News } from "@/types/news";
import NewsCard from "../Card/NewsCard";
import { getVisiblePages } from "@/lib/helper/getVisiblePages";
import { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";
import { AnimatedDiv } from "../Animation";
import { IoSearch } from "react-icons/io5";
import NewsSideBar from "./NewsSideBar";
import NewsMobileFilter from "./NewsMobileFilter";

interface NewsListProps {
  newsData: News[];
  currentPage: number;
  pageSize: number;
  totalCount?: number;
  searchQuery?: string;
  filterYear?: string;
}

export default function NewsList({
  newsData = [],
  currentPage = 1,
  pageSize = 10,
  totalCount = 1,
  searchQuery = "",
  filterYear = "",
}: NewsListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const totalPages = Math.ceil(totalCount / pageSize);

  const currentYear = new Date().getFullYear();
  const availableYears = Array.from(
    { length: currentYear - 2019 },
    (_, i) => currentYear - i,
  );

  const buildQueryString = (params: {
    page?: number;
    search?: string;
    year?: string;
  }) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (params.page) newParams.set("page", params.page.toString());
    if (params.search !== undefined) {
      params.search.trim()
        ? newParams.set("search", params.search.trim())
        : newParams.delete("search");
    }
    if (params.year !== undefined) {
      params.year
        ? newParams.set("year", params.year)
        : newParams.delete("year");
    }
    return newParams.toString();
  };

  const handleSearch = (query: string) => {
    router.push(
      `/news?${buildQueryString({ page: 1, search: query, year: filterYear })}`,
      { scroll: false },
    );
  };

  const handleFilter = (year: string) => {
    router.push(
      `/news?${buildQueryString({ page: 1, search: searchQuery, year })}`,
      { scroll: false },
    );
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  };

  // Sync local search query with URL search query
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(localSearchQuery);
    }
  };

  // Generate pagination href safely
  const getPaginationHref = (page: number) => {
    return `/news?${buildQueryString({ page, search: searchQuery, year: filterYear })}`;
  };

  return (
    <section className="pt-[50px] pb-[120px]">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Year Selection Sidebar */}
          <AnimatedDiv className="hidden lg:block lg:w-1/5">
            <NewsSideBar
              availableYears={availableYears}
              filterYear={filterYear}
              handleFilter={handleFilter}
            />
          </AnimatedDiv>

          {/* Main Content Area */}
          <div className="w-full lg:w-4/5">
            {/* Mobile Search Bar & Filter */}
            <AnimatedDiv>
              <div className="mb-4 flex items-center gap-2 lg:hidden">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-4 py-2 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                  />
                </div>
                <button
                  onClick={() => handleSearch(localSearchQuery)}
                  aria-label="search button"
                  className="bg-primary hover:bg-primary/90 ml-2 flex h-10 w-10 items-center justify-center rounded-xs text-white transition"
                >
                  <IoSearch size={20} />
                </button>
                <div className="lg:hidden">
                  <NewsMobileFilter
                    availableYears={availableYears}
                    filterYear={filterYear}
                    handleFilter={handleFilter}
                  />
                </div>
              </div>
            </AnimatedDiv>

            {/* Desktop Search Bar */}
            <AnimatedDiv className="mb-8 hidden items-center justify-between lg:flex">
              <h2 className="text-dark text-3xl font-bold dark:text-white">
                All News
              </h2>
              <div className="flex w-full max-w-lg items-center justify-end">
                <AnimatedDiv variant="slideUp" staggerChildren={0.2}>
                  <div className="flex w-full max-w-lg items-center">
                    <input
                      type="text"
                      placeholder="Search here..."
                      value={localSearchQuery}
                      onChange={(e) => setLocalSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary mr-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                    <button
                      onClick={() => handleSearch(localSearchQuery)}
                      aria-label="search button"
                      className="bg-primary hover:bg-primary/90 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xs text-white transition"
                    >
                      <IoSearch size={20} />
                    </button>
                  </div>
                </AnimatedDiv>
              </div>
            </AnimatedDiv>

            {/* News Cards or Not Found Message */}
            {newsData.length > 0 ? (
              <>
                <AnimatedDiv
                  key={`${currentPage}-${filterYear}-${searchQuery}`}
                  variant="slideUp"
                  staggerChildren={0.2}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((news, index) => (
                      <AnimatedDiv
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        key={index}
                        className="h-full"
                      >
                        <NewsCard key={index} news={news} />
                      </AnimatedDiv>
                    ))}
                  </div>

                  {/* Pagination (only shown when there are news items) */}

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    getPageHref={getPaginationHref}
                  />
                </AnimatedDiv>
              </>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center">
                <div className="text-body-color dark:text-body-color-dark text-center text-xl font-medium">
                  No news articles found
                </div>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-center">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
