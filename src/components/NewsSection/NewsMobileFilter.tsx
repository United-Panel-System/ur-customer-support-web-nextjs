"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";

interface YearFilterProps {
  availableYears: number[];
  filterYear: string;
  handleFilter: (year: string) => void;
  title?: string;
  allYearsText?: string;
}

const NewsMobileFilter = ({
  availableYears,
  filterYear,
  handleFilter,
  title = "Filters",
  allYearsText = "All Years",
}: YearFilterProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative ml-2">
          <button
            className="border-primary text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-xs border bg-white transition hover:text-white"
            aria-label="Open filters"
          >
            <Filter className="h-4 w-4" />
          </button>
          {filterYear && (
            <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-white">
              1
            </Badge>
          )}
        </div>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85vw] max-w-sm">
        <div className="flex h-full flex-col">
          <SheetHeader className="sm:text-center">
            <SheetTitle className="text-center text-xl">{title}</SheetTitle>
            <SheetDescription>Select filter options</SheetDescription>
          </SheetHeader>

          <Separator className="my-3" />

          <ScrollArea className="flex-1">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-medium">Years</h3>
                <ul className="space-y-2">
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
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewsMobileFilter;
