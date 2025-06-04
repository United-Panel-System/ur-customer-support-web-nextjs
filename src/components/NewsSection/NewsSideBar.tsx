"use client";

interface YearFilterProps {
  availableYears: number[];
  filterYear: string;
  handleFilter: (year: string) => void;
  title?: string;
  allYearsText?: string;
  className?: string;
}

const NewsSideBar = ({
  availableYears,
  filterYear,
  handleFilter,
  title = "Filter by Year",
  allYearsText = "All Years",
  className = "",
}: YearFilterProps) => {
  return (
    <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
      <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-2 p-4">
        <li>
          <button
            onClick={() => handleFilter("")}
            className={`w-full cursor-pointer rounded-lg px-4 py-2 text-left transition ${
              filterYear === ""
                ? "bg-primary text-white"
                : "text-body-color hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {allYearsText}
          </button>
        </li>
        {availableYears.map((year) => (
          <li key={year}>
            <button
              onClick={() => handleFilter(year.toString())}
              className={`w-full cursor-pointer rounded-lg px-4 py-2 text-left transition ${
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
  );
};

export default NewsSideBar;
