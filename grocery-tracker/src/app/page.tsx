import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col py-8 px-72">
        <p className="font-poppins text-[20px] font-[500]">Categories:</p>
        <div className="grid grid-cols-5 mt-8 gap-x-8 gap-y-8 ">
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/freshfood.jpg" alt="freshfood" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Fresh Food
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/Frozen.png" alt="frozen" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Frozen
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="milk.jpg" alt="milk" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Dairy
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/bread.jpg" alt="bread" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Bread
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/drink.jpg" alt="drink" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Drink
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/Liquor.jpg" alt="liquor" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Liquor
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="household.jpg" alt="household" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Household
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/dogfood.jpg" alt="petfood" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Pet Food
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="snack.jpg" alt="snack" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Snack
              </h2>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="group relative border border-2 rounded px-2 text-center h-36 hover:border-[#36C63F] hover:text-green-500 flex flex-col items-center justify-center">
              <img src="/cooking.jpg" alt="cooking" className="h-24 w-24" />
              <h2 className="mt-4 font-poppins text-[16px] font-[400]">
                Cooking
              </h2>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col py-8 px-72">
        <p className="font-poppins text-[20px] font-[500]">Features:</p>
        <div className="grid grid-cols-3 mt-8 gap-x-8 gap-y-8 ">
          <div
            className="group relative h-88 w-64 rounded text-center flex flex-col items-center "
            style={{
              backgroundImage: "url('/alert.jpg')",
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
            <Link href={"/"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Learn More →
              </button>
            </Link>
          </div>
          <div
            className="group relative h-80 w-64 rounded text-center flex flex-col items-center "
            style={{
              backgroundImage: "url('/stock.jpg')",
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
            <Link href={"/"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Learn More →
              </button>
            </Link>
          </div>
          <div
            className="group relative h-80 w-64 rounded text-center flex flex-col items-center "
            style={{
              backgroundImage: "url('/more.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="mt-4 mb-8 font-poppins text-[24px] font-[500]">
              More Features
            </h2>

            <Link href={"/"}>
              <button className="w-24 mt-2 py-1.5 bg-white text-[10px] text-green-500 rounded-full hover:bg-[#36C63F] hover:text-white">
                Explore →
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
