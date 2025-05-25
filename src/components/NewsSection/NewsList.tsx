"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { News } from "@/types/news";
import NewsCard from "../Card/NewsCard";
import { getVisiblePages } from "@/lib/helper/getVisiblePages";
import { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";
import { AnimatedDiv } from "../Animation";

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
  // Mobile filter sidebar toggle
  const [showMobileFilter, setShowMobileFilter] = useState(false);

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
          <AnimatedDiv
            variant="slideUp"
            staggerChildren={0.2}
            className="hidden md:block md:w-1/5"
          >
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
              <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                Filter by Year
              </h3>
              <ul className="space-y-2 p-4">
                <li>
                  <button
                    onClick={() => handleFilter("")}
                    className={`w-full cursor-pointer rounded-md px-4 py-2 text-left transition ${
                      filterYear === ""
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    All Years
                  </button>
                </li>
                {availableYears.map((year) => (
                  <li key={year}>
                    <button
                      onClick={() => handleFilter(year.toString())}
                      className={`w-full cursor-pointer rounded-md px-4 py-2 text-left transition ${
                        filterYear === year.toString()
                          ? "bg-primary text-white"
                          : "text-body-color hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedDiv>

          {/* Main Content Area */}
          <div className="w-full lg:w-4/5">
            {/* Mobile Search Bar & Filter */}
            <div className="mb-4 flex items-center gap-2 md:hidden">
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="border-primary text-primary hover:bg-primary ml-2 flex h-10 w-10 items-center justify-center rounded-xs border bg-white transition hover:text-white"
                onClick={() => setShowMobileFilter(true)}
                aria-label="Open filter"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 5h18M6 12h12M10 19h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Filter Sidebar */}
            {showMobileFilter && (
              <div className="fixed inset-0 z-[9999] flex md:hidden">
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setShowMobileFilter(false)}
                />
                {/* Sidebar */}
                <AnimatedDiv
                  variant="slideLeft"
                  className="relative ml-auto h-full w-4/5 max-w-xs overflow-y-auto bg-white p-4 shadow-xl dark:bg-[#23272f]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">Filter</span>
                    <button
                      className="hover:text-primary text-2xl text-gray-500"
                      onClick={() => setShowMobileFilter(false)}
                      aria-label="Close filter"
                    >
                      &times;
                    </button>
                  </div>
                </AnimatedDiv>
              </div>
            )}

            {/* Search Bar with Button */}
            <AnimatedDiv
              variant="slideUp"
              staggerChildren={0.2}
              className="mb-8 hidden items-center justify-between md:flex"
            >
              <h2 className="text-dark text-3xl font-bold dark:text-white">
                All News
              </h2>
              <div className="flex w-full max-w-md items-center justify-end">
                <AnimatedDiv variant="slideUp" staggerChildren={0.2}>
                  <div className="flex w-full max-w-md items-center">
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
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                          fill="currentColor"
                        />
                      </svg>
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
                  className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
                >
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
                </AnimatedDiv>

                {/* Pagination (only shown when there are news items) */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  getPageHref={getPaginationHref}
                />
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
