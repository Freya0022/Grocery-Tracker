import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RiNumber4, RiEmotionHappyLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <div className="flex items-center justify-center mt-40">
            <RiNumber4 className="size-20 text-[#00B207]"/>
            <RiEmotionHappyLine className="size-20 rotate-180 text-[#00B207]" />
            <RiNumber4 className="size-20 text-[#00B207]"/>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-[20px] font-[500]">Oops! page not found</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
