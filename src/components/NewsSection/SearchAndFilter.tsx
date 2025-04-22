"use client";

import { useState, useEffect } from "react";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (year: string) => void;
  availableYears: string[];
  initialSearch?: string;
  initialYear?: string;
}

export default function SearchAndFilter({
  onSearch,
  onFilter,
  availableYears,
  initialSearch = "",
  initialYear = "",
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  useEffect(() => {
    setSearchQuery(initialSearch);
    setSelectedYear(initialYear);
  }, [initialSearch, initialYear]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery); // Apply the search value when the button is clicked
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedYear(value);
    onFilter(value); // Apply the filter immediately when the year is selected
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
      {/* Search Bar */}
      <div className="flex w-full items-center md:w-auto">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full rounded-md border px-4 py-2 md:mr-2"
        />
        <button
          onClick={handleSearchClick}
          className="bg-primary hover:bg-primary-dark rounded-md px-4 py-2 text-white"
        >
          Search
        </button>
      </div>

      {/* Filter by Year */}
      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="mt-4 rounded-md border px-4 py-2 md:mt-0"
      >
        <option value="">All Years</option>
        {availableYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
