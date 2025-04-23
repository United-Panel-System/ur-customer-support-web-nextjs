"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getPageHref: (page: number) => string;
}

const generatePages = (current: number, total: number): (number | "...")[] => {
  const delta = 2;
  const pages: (number | "...")[] = [];
  const range = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) {
    range.unshift("...");
  }
  if (current + delta < total - 1) {
    range.push("...");
  }

  range.unshift(1);
  if (total > 1) range.push(total);

  return range;
};

const Pagination = ({
  currentPage,
  totalPages,
  getPageHref,
}: PaginationProps) => {
  const pages = generatePages(currentPage, totalPages);

  return (
    <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-16">
          {/* Prev button */}
          <li className="mx-1">
            <Link
              href={getPageHref(Math.max(currentPage - 1, 1))}
              scroll={false}
              className={`${
                totalPages <= 1
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : "hover:bg-primary hover:text-white"
              } bg-body-color/15 text-body-color flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition`}
            >
              Prev
            </Link>
          </li>

          {/* Page numbers */}
          {pages.map((page, i) =>
            page === "..." ? (
              <li key={`ellipsis-${i}`} className="mx-1">
                <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-default items-center justify-center rounded-md px-4 text-sm">
                  ...
                </span>
              </li>
            ) : (
              <li key={page} className="mx-1">
                <Link
                  href={getPageHref(Number(page))}
                  scroll={false}
                  className={`${
                    page === currentPage
                      ? "bg-primary text-white"
                      : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                  } flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition`}
                >
                  {page}
                </Link>
              </li>
            ),
          )}

          {/* Next button */}
          <li className="mx-1">
            <Link
              href={getPageHref(Math.min(currentPage + 1, totalPages))}
              scroll={false}
              className={`${
                totalPages <= 1
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : "hover:bg-primary hover:text-white"
              } bg-body-color/15 text-body-color flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition`}
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
