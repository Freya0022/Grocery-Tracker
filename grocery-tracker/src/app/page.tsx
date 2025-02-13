import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="space-y-10 px-4 md:px-20 lg:px-72 my-20 w-full mx-auto">
      <div className="flex flex-col ">
        <p className="font-poppins text-[20px] font-[500]">Categories:</p>
        <div className="flex grid grid-cols-5 mt-8 gap-x-4 md:gap-x-8 gap-y-8 ">
          {categories.map((category, index) => (
            <div key={index}>
              <Link href={`/productlist/${category}`}>
                <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
                  <img
                    src={`${category}.jpg`}
                    alt={category}
                    className="h-24 w-24"
                  />
                  <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                    {category}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-poppins text-[20px] font-[500]">Features:</p>
        <div className="grid grid-cols-3 mt-8 gap-x-8 gap-y-8 ">
          <div
            className="group relative h-72 w-56 md:h-88 md:w-64 rounded text-center flex flex-col items-center hover:ring "
            style={{
              backgroundImage: "url('/time.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="mt-4 font-poppins text-[24px] font-[500]">
              Expiry Alert
            </h2>
            <h2 className="font-poppins text-[16px] font-[400] ">
              00 &nbsp;: &nbsp;15
            </h2>
            <h5 className="font-poppins text-[8px] font-[400] pr-2">
              MONTHS &nbsp;&nbsp;&nbsp;&nbsp; DAYS
            </h5>
            <Link href={"/subhomepage"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Learn More →
              </button>
            </Link>
          </div>
          <div
            className="group relative h-72 w-56 md:h-88 md:w-64 rounded text-center flex flex-col items-center hover:ring"
            style={{
              backgroundImage: "url('/bag1.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="mt-4 font-poppins text-[24px] font-[500]">
              Stock Check
            </h2>
            <div className="flex items-center py-2">
              <h2 className="font-poppins text-[12px] font-[400] ">
                Less than
              </h2>
              <h2 className="font-poppins text-[12px] font-[500] text-red-500 pl-2">
                10 or 20?
              </h2>
            </div>
            <Link href={"/subhomepage"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Learn More →
              </button>
            </Link>
          </div>
          <div
            className="group relative h-72 w-56 md:h-88 md:w-64 rounded text-center flex flex-col items-center hover:ring"
            style={{
              backgroundImage: "url('/more.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="mt-4 mb-8 font-poppins text-[24px] font-[500]">
              More Features
            </h2>

            <Link href={"/subhomepage"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Explore →
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
