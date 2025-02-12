"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  startIndex: number;
  endIndex: number;
  handlePaginate: (page: number) => void;
}
export default function Pagination({
  currentPage,
  pageSize,
  totalCount,
  startIndex,
  endIndex,
  handlePaginate,
}: PaginationProps) {
  const paginationCount = Math.ceil(totalCount / pageSize);
  const [expand, setExpand] = useState<boolean>(false);
  const maxVisiblePages = 10;

  const calculatedPageNumbers = () => {
    let pages: (number | string)[] = [];
    if (paginationCount < 6) {
      return Array.from({ length: paginationCount }, (_, index) => index + 1);
    }
    if (paginationCount <= maxVisiblePages) {
      if (!expand && (currentPage <= 2 || currentPage >= paginationCount - 1)) {
        pages = [1, 2, "...", paginationCount - 1, paginationCount];
      } else {
        pages = Array.from(
          { length: paginationCount },
          (_, index) => index + 1
        );
      }
    } else {
      if (!expand && currentPage <= 2) {
        pages = [1, 2, "...", paginationCount - 1, paginationCount];
      } else {
        let rangeStart = Math.max(1, currentPage - 8);
        let rangeEnd = Math.max(maxVisiblePages - 1, currentPage);

        if (rangeStart > 1) {
          pages.push("...");
        }
        pages = [
          ...pages,
          ...Array.from(
            { length: rangeEnd - rangeStart + 1 },
            (_, index) => rangeStart + index
          ),
        ];
        if (rangeEnd < paginationCount) {
          pages.push("...");
        }
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between px-2 py-3 sm:px-6 mt-4">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">{endIndex}</span> of{" "}
            <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          >
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePaginate(currentPage - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </button>
            {calculatedPageNumbers().map((page, index) =>
              page === "..." ? (
                <span
                  key={index}
                  onClick={() => setExpand(true)}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0 cursor-pointer"
                >
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePaginate(page as number)}
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === page
                      ? "bg-[#00B207] text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2"
                      : "text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              disabled={currentPage >= paginationCount}
              onClick={() => handlePaginate(currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
