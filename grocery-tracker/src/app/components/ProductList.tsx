import { Product } from "../interfaces/product";
import dayjs from "dayjs";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

interface ProductListProps {
  productList: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
    const [sortBy, setSortBy] = useState("");
    const sortedProductList = [...productList].sort((a,b) => {
        if (sortBy === "bestBeforeAsc") {
            return new Date(a.bestBefore).getTime() - new Date(b.bestBefore).getTime();
          } else if (sortBy === "bestBeforeDesc") {
            return new Date(b.bestBefore).getTime() - new Date(a.bestBefore).getTime();
          } else if (sortBy === "quantityAsc") {
            return a.quantity - b.quantity;
          } else if (sortBy === "quantityDesc") {
            return b.quantity - a.quantity;
          }
          return 0;
    })
    
  return (
    <>
    <div className="my-12">
    <div className="flex items-center justify-between text-gray-500 mb-4">
        <div>
            <label htmlFor="sortBy">Sort By:</label>
            <select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border ml-2 rounded py-1 text-black">
                <option value="bestBeforeAsc">Best before(Soonest)</option>
                <option value="bestBeforeDesc">Best before(Farthest)</option>
                <option value="quantityAsc">Quantity Low To High</option>
                <option value="quantityDesc">Quantity High To Low</option>
            </select>
        </div>
        <div><p><span className="text-black font-[500] pr-1">{productList.length}</span> Results Found</p></div>
    </div>
      <div className=" py-2  border rounded">
        <div className="flex grid grid-cols-5 pl-4 py-2 text-gray-500">
          <div className="col-span-2 pl-6">
            <h2>PRODUCT</h2>
          </div>
          <h2>BEST BEFORE</h2>
          <h2>QUANTITY</h2>
          <h2>ACTION</h2>
        </div>
        <hr className="w-full" />
        <div>
          {sortedProductList.map((product) => (
            <div key={product.productId}>
              <div className="flex grid grid-cols-5 gap-2 pl-4 py-2 items-center">
                <div className="w-[100px] h-[100px] rounded-lg  overflow-hidden hover:border-2 hover:border-[#3DD243]">
                  {product.productImage ? (
                    <img
                      src={product.productImage}
                      alt="addImage"
                      className="object-cover w-full h-full "
                    />
                  ) : (
                    <img
                      src="pop.jpg"
                      alt="addImage"
                      className="object-cover w-full h-full "
                    />
                  )}
                </div>
                <div>{product?.productName}</div>
                <div>
                  {product?.bestBefore
                    ? dayjs(product.bestBefore).format("DD/MM/YYYY")
                    : "N/A"}
                </div>
                <div
                  className={`px-2 w-fit rounded py-1 ${
                    product?.quantity > 30
                      ? "bg-green-500"
                      : product?.quantity > 3
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {product?.quantity ? product?.quantity : "OUT OF STOCK"}
                </div>
                <div className="flex items-center gap-2">
                  <BiSolidEdit className="w-8 h-8 hover:text-[#00B207]" />
                  <RiDeleteBin5Line className="w-8 h-8 hover:text-[#00B207]"/>
                </div>
              </div>
              <div className="px-4">
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div></div>
    </>
  );
};

export default ProductList;
