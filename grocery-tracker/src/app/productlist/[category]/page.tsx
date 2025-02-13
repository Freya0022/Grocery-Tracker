"use client";
import ProductList from "@/app/components/ProductList";
import { Product } from "@/app/interfaces/product";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ProductListWithCategory() {
  const paramsPromise = useParams();
  const category = useMemo(() => {
    const params = paramsPromise as { category?: string };
    return params?.category ? decodeURIComponent(params.category).trim() : "";
  }, [paramsPromise]);
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    const testProductList = [
      {
        productId: 1,
        productName: "Apple",
        bestBefore: new Date("2025/03/02"),
        quantity: 200,
        productImage: "",
        brand: "farmm",
        category: "Fresh Food",
      },
      {
        productId: 2,
        productName: "Milk",
        bestBefore: new Date("2025/02/22"),
        quantity: 20,
        productImage: "",
        brand: "pura",
        category: "Dairy",
      },
      {
        productId: 3,
        productName: "Juicy",
        bestBefore: new Date("2025/02/10"),
        quantity: 0,
        productImage: "",
        brand: "dailyj",
        category: "Drink",
      },
      {
        productId: 4,
        productName: "Chips",
        bestBefore: new Date("2025/03/10"),
        quantity: 40,
        productImage: "",
        brand: "Smiths",
        category: "Snack",
      },
      {
        productId: 5,
        productName: "Apple",
        bestBefore: new Date("2025/03/02"),
        quantity: 200,
        productImage: "",
        brand: "farmm",
        category: "Fresh Food",
      },
      {
        productId: 6,
        productName: "Milk",
        bestBefore: new Date("2025/02/22"),
        quantity: 20,
        productImage: "",
        brand: "pura",
        category: "Dairy",
      },
      {
        productId: 7,
        productName: "Juicy",
        bestBefore: new Date("2025/02/10"),
        quantity: 0,
        productImage: "",
        brand: "dailyj",
        category: "Drink",
      },
      {
        productId: 8,
        productName: "Cookies",
        bestBefore: new Date("2025/04/10"),
        quantity: 20,
        productImage: "",
        brand: "Arnotts",
        category: "Snack",
      },
    ];

    const filteredList = testProductList.filter(
      (product) => product.category === category
    );

    setProductList(filteredList);
  }, [category]);
  return (
    <>
      <div className="mx-20">
        <ProductList productList={productList} />
      </div>
    </>
  );
}
