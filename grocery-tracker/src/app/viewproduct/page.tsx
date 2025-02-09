"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { Product } from "../interfaces/product";

export default function ViewProduct() {
  const categories = [
    "Fresh Food",
    "Frozen",
    "Dairy",
    "Bread",
    "Drink",
    "Liquor",
    "Household",
    "Pet Food",
    "Snack",
    "Cooking",
  ];
  const newProductList = [
    {
      productId: 1,
      productName: "Apple",
      bestBefore: new Date("2025/03/02"),
      quantity: 200,
      productImage: "",
      category: "Fresh Food",
    },
    {
      productId: 2,
      productName: "Milk",
      bestBefore: new Date("2025/02/22"),
      quantity: 20,
      productImage: "",
      category: "Dairy",
    },
    {
      productId: 3,
      productName: "Juicy",
      bestBefore: new Date("2025/02/10"),
      quantity: 0,
      productImage: "",
      category: "Drink",
    },
    {
      productId: 4,
      productName: "Chips",
      bestBefore: new Date("2025/03/10"),
      quantity: 40,
      productImage: "",
      category: "Snack",
    },
  ];
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    setProductList(newProductList);
  }, []);

  const [expand, setExpand] = useState<{ [key: string]: boolean }>({
    categories: false,
    bestbefore: false,
    quantity: false,
  });
  const [filters, setFilters] = useState({
    categories: [] as string[],
    bestBefore: [null, null] as [Date | null, Date | null],
    quantity: [0, 500] as number[],
  });

  const toggleExpand = (filter: string) => {
    setExpand((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };
  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const from = e.target.value ? new Date(e.target.value) : null;
    if (from) {
      setFilters((prev) => ({
        ...prev,
        bestBefore: [from, prev.bestBefore[1]],
      }));
    }
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const to = e.target.value ? new Date(e.target.value) : null;
    if (to) {
      setFilters((prev) => ({
        ...prev,
        bestBefore: [prev.bestBefore[0], to],
      }));
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < filters.quantity[1] && value >= 0) {
      setFilters((prev) => ({
        ...prev,
        quantity: [value, prev.quantity[1]],
      }));
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > filters.quantity[0] && value <= 500) {
      setFilters((prev) => ({
        ...prev,
        quantity: [prev.quantity[0], value],
      }));
    }
  };
  const handleCancelFilter = () => {
    setFilters({
      categories: [] as string[],
      bestBefore: [null, null] as [Date | null, Date | null],
      quantity: [0, 500] as number[],
    });
  };

  const handleApplyFilter = () => {
    let filteredList = newProductList;
    if (filters.categories.length > 0) {
      filteredList = filteredList.filter((list) =>
        filters.categories.includes(list.category)
      );
    }
    if (filters.bestBefore[0]) {
      filteredList = filteredList.filter(
        (list) => list.bestBefore > new Date(filters.bestBefore[0]!)
      );
    }
    if (filters.bestBefore[1]) {
      filteredList = filteredList.filter(
        (list) => list.bestBefore < new Date(filters.bestBefore[1]!)
      );
    }
    if (filters.quantity[0] > 0 || filters.quantity[1] < 500) {
      filteredList = filteredList.filter(
        (list) =>
          filters.quantity[1] > list.quantity &&
          list.quantity > filters.quantity[0]
      );
    }
    setProductList(filteredList);
  };

  return (
    <>
      <Navbar />
      <div className="flex grid grid-cols-5 px-8">
        <div className="col-span-1 my-12 mr-6">
          <div>
            <div className="bg-[#00B207] rounded-full text-white w-[120px] mb-4 ml-6">
              <div className="flex items-center gap-1 px-6">
                <h1 className="text-[18px] py-1">Filter</h1>
                <span className="">
                  <CiCircleList className="w-6 h-6" />
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-4 mb-1 justify-between"
              onClick={() => toggleExpand("categories")}
            >
              <h1 className="text-[18px] font-[500]">All Categories</h1>
              <span>
                {expand.categories ? (
                  <MdOutlineExpandLess className="w-8 h-8" />
                ) : (
                  <MdOutlineExpandMore className="w-8 h-8" />
                )}
              </span>
            </div>
            {expand.categories && (
              <div className="space-y-1 ml-2">
                {categories.map((category, index) => (
                  <label
                    htmlFor={category}
                    key={index}
                    className="block space-x-1"
                  >
                    <input
                      type="checkbox"
                      id={category}
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="appearance-none h-4 w-4 border-2 border-[#00B207] rounded-full checked:bg-[#00B207]  hover:bg-gray-400 hover:border-gray-400"
                    />
                    <span
                      className={`${
                        filters.categories.includes(category)
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                    >
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <hr className="my-4" />
          <div
            className="flex items-center gap-4 mb-1 justify-between"
            onClick={() => toggleExpand("bestBefore")}
          >
            <h1 className="text-[18px] font-[500]">Best Before</h1>
            <span>
              {expand.bestBefore ? (
                <MdOutlineExpandLess className="w-8 h-8" />
              ) : (
                <MdOutlineExpandMore className="w-8 h-8" />
              )}
            </span>
          </div>
          {expand.bestBefore && (
            <div className="mr-6 mx-2 mt-4 space-y-4">
              <div className="grid grid-cols-7">
                <label htmlFor="from" className="text-gray-500 col-span-2">
                  From:
                </label>
                <input
                  type="date"
                  id="from"
                  onChange={handleFromChange}
                  className="border rounded py-0.5 px-1 col-span-5 "
                />
              </div>
              <div className="grid grid-cols-7">
                <label htmlFor="to" className="text-gray-500 col-span-2">
                  To:
                </label>
                <input
                  type="date"
                  id="from"
                  onChange={handleToChange}
                  className="border rounded py-0.5 px-1 col-span-5"
                />
              </div>
            </div>
          )}
          <hr className="my-4" />
          <div
            className="flex items-center gap-4 mb-1 justify-between"
            onClick={() => toggleExpand("quantity")}
          >
            <h1 className="text-[18px] font-[500]">Quantity</h1>
            <span>
              {expand.quantity ? (
                <MdOutlineExpandLess className="w-8 h-8" />
              ) : (
                <MdOutlineExpandMore className="w-8 h-8" />
              )}
            </span>
          </div>
          {expand.quantity && (
            <div className="w-full max-w-md mx-auto p-4">
              <div className="relative mb-8">
                <div className="absolute h-2 w-full bg-gray-300 rounded"></div>
                <div
                  className="absolute h-2 bg-[#00B207] rounded"
                  style={{
                    left: `${(filters.quantity[0] / 500) * 100}%`,
                    right: `${100 - (filters.quantity[1] / 500) * 100}%`,
                  }}
                ></div>

                <div className="relative w-full">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step={10}
                    value={filters.quantity[0]}
                    onChange={handleMinChange}
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:outline [&::-webkit-slider-thumb]:outline-[#00B207] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:outline [&::-moz-range-thumb]:outline-[#00B207] [&::-moz-range-thumb]:appearance-none"
                  />

                  <input
                    type="range"
                    min="0"
                    max="500"
                    step={10}
                    value={filters.quantity[1]}
                    onChange={handleMaxChange}
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:outline [&::-webkit-slider-thumb]:outline-[#00B207] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:outline [&::-moz-range-thumb]:outline-[#00B207] [&::-moz-range-thumb]:appearance-none"
                  />
                </div>
              </div>

              <div className="">
                <span className="text-sm text-gray-600">
                  Quantity:{" "}
                  <span className=" font-[500] text-black">
                    {filters.quantity[0]} - {filters.quantity[1]}{" "}
                  </span>
                </span>
              </div>
            </div>
          )}
          <div>
            {(expand.categories || expand.bestBefore || expand.quantity) && (
              <div className="flex justify-between mt-4">
                <div>
                  <button
                    onClick={handleCancelFilter}
                    className="w-[80px] py-1.5 rounded-full text-[#00B207] border border-2 border-[#00B207] hover:border-[#3DD243] hover:text-[#3DD243]"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleApplyFilter}
                    className="w-[80px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-4">
          <ProductList productList={productList} />
        </div>
      </div>

      <Footer />
    </>
  );
}
