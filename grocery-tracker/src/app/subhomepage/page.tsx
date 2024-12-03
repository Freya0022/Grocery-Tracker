import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SubHomepage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col py-12 px-72 space-y-8">
        <div
          className="group relative h-64 w-full rounded flex flex-col items-end justify-center hover:ring"
          style={{
            backgroundImage: "url('/subHomepage1.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="mb-4 font-poppins text-[20px] font-[400] mr-12">
            Got something new?
          </h2>
          <h2 className="mb-4 font-poppins text-[16px] font-[400] mr-8">
            Add your latest products here!
          </h2>

          <Link href={"/"}>
            <button className="w-32 mr-24 py-2 bg-[#36C63F] text-[12px] text-white rounded-full hover:bg-[#36C63F29] hover:text-green-500">
              Add Product →
            </button>
          </Link>
        </div>
        <div
          className="group relative h-64 w-full rounded flex flex-col items-end justify-center hover:ring"
          style={{
            backgroundImage: "url('/subHomepage2.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="mb-4 font-poppins text-[20px] font-[400] mr-8">
            Want to see your inventory?
          </h2>
          <h2 className="mb-4 font-poppins text-[16px] font-[400] mr-12">
            View all your products here!
          </h2>

          <Link href={"/"}>
            <button className="w-32 mr-24 py-2 bg-[#36C63F] text-[12px] text-white rounded-full hover:bg-[#36C63F29] hover:text-green-500">
              View Product →
            </button>
          </Link>
        </div>
        <div
          className="group relative h-64 w-full rounded flex flex-col items-end justify-center hover:ring"
          style={{
            backgroundImage: "url('/subHomepage3.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="mb-4 font-poppins text-[20px] font-[400] mr-8">
            Need to make a quick update?
          </h2>
          <h2 className="mb-4 font-poppins text-[16px] font-[400] mr-12">
            Edit your products details here!
          </h2>

          <Link href={"/"}>
            <button className="w-32 mr-24 py-2 bg-[#36C63F] text-[12px] text-white rounded-full hover:bg-[#36C63F29] hover:text-green-500">
              Edit Product →
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
