"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function AddProduct() {
  const [productImage, setProductImage] = useState<string>();

  const handleChooseImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar />
      <div className="my-12 mx-72 py-2  border rounded">
        <h1 className="font-poppins text-[20px] font-[500] py-2 px-4">
          Product Details
        </h1>
        <hr className="w-full" />
        <div className="px-6 my-6  grid grid-cols-2 gap-6">
          <div className="space-y-6 ">
            <div className="space-y-1.5">
              <label htmlFor="category" className="">
                Category:
              </label>
              <div>
                <select
                  name="category"
                  id="category"
                  className="border rounded-md py-2 px-1 w-full text-gray-600"
                >
                  <option value="">Fresh Food</option>
                  <option value="">Liquor</option>
                  <option value="">Milk</option>
                  <option value="">Drink</option>
                  <option value="">Bread</option>
                  <option value="">Household</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="productName">Product Name:</label>
              <div>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  className="border rounded-md py-2 px-2 w-full text-gray-600"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="bestBefore">Best Before:</label>
              <div>
                <input
                  type="date"
                  id="bestBefore"
                  name="bestBefore"
                  className="border rounded-md py-2 px-2 w-full text-gray-600"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="quantity">Quantity:</label>
              <div>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="border rounded-md py-2 px-2 w-full text-gray-600"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="hover:text-[#3DD243]">←Back</p>
              <button className="w-[72px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]">
                Add
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 mt-6">
            <div className="w-[140px] h-[140px]  rounded-lg  overflow-hidden hover:border-2 hover:border-[#3DD243]">
              {productImage ? (
                <img
                  src={productImage}
                  alt="addImage"
                  className="object-cover w-full h-full "
                />
              ) : (
                <img
                  src="/pop.jpg"
                  alt="addImage"
                  className="object-cover w-full h-full "
                />
              )}
            </div>
            <button
              className="w-[140px] py-2.5 rounded-full text-[#00B207] border border-2 border-[#00B207] hover:border-[#3DD243] hover:text-[#3DD243]"
              onClick={() => document.getElementById("chooseImage")?.click()}
            >
              Choose Image
            </button>
            <input
              id="chooseImage"
              type="file"
              accept="image/*"
              onChange={handleChooseImage}
              hidden
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
