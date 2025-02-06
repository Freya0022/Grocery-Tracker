"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function AddProduct() {
  const handleAddProduct = () => {

  }

  return (
    <>
      <Navbar />
    <ProductCard mode="Add" onAction={handleAddProduct}/>
      <Footer />
    </>
  );
}
