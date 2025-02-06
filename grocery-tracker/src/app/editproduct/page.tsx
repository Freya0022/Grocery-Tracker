"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function EditProduct() {
  const handleEditProduct = () => {

  }
  const product = {productId:1, productName:"Apple", bestBefore:new Date("2025/03/02"), quantity:200, productImage: ""}

  return (
    <>
      <Navbar />
    <ProductCard product={product} mode="Submit" onAction={handleEditProduct}/>
      <Footer />
    </>
  );
}
