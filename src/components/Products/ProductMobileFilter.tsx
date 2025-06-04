"use client";

import { ProductCategory } from "@/types/products";
import slugify from "slugify";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Filter, X } from "lucide-react";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface MobileFilterProps {
  categories: ProductCategory[];
  currentCategory?: string;
  handleCategoryFilter: (category: string) => void;
  title?: string;
  allCategoryText?: string;
}

const ProductMobileFilter = ({
  categories = [],
  currentCategory = "",
  handleCategoryFilter,
  title = "Filters",
  allCategoryText = "All Categories",
}: MobileFilterProps) => {
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
          {currentCategory && (
            <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-white">
              1
            </Badge>
          )}
        </div>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85vw] max-w-sm">
        <SheetHeader className="sm:text-center">
          <SheetTitle className="text-xl">{title}</SheetTitle>
          <SheetDescription>Select filter options</SheetDescription>
        </SheetHeader>

        <Separator className="my-3" />

        <ScrollArea className="flex-1">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium">Categories</h3>
              <div className="space-y-2">
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

                {categories.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryFilter(item.name)}
                    className={`w-full cursor-pointer rounded-md px-4 py-2 text-left text-base font-medium transition ${
                      currentCategory === slugify(item.name, { lower: true })
                        ? "bg-primary text-white"
                        : "text-body-color dark:text-body-color-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ProductMobileFilter;
