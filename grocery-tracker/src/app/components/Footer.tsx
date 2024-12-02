import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className="py-4 px-24 bg-[#333333]">
      <div className="flex items-center ">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/gtLogo.png" alt="logo" className="w-12 h-12" />
            <p className="font-poppins text-white text-[24px] font-[500]">
              Grocery Tracker
            </p>
          </div>
          <p className="text-[#999999]">
            Track stock, reduce waste, stay in control.
          </p>
          <div className="flex items-center space-x-4">
            <span>
              <FaFacebook className="w-6 h-6 text-[#FFFFFF]" />
            </span>
            <span>
              <FaTwitter className="w-6 h-6 text-[#FFFFFF]" />
            </span>
            <span>
              <FaInstagram className="w-6 h-6 text-[#FFFFFF]" />
            </span>
          </div>
        </div>
        <div className=" ml-24 mt-4 space-y-4 font-poppins text-[#999999] ">
          <p className="hover:text-white">Home</p>
          <p className="hover:text-white">About Us</p>
          <p className="hover:text-white">Contact Us</p>
        </div>
        
      </div>
      <hr className=" mt-8 border border-[#999999]"/>
        <p className="text-center text-[#999999] mt-2 text-[12px]">Grocery Tracker © 2024. All Rights Reserved</p>
      </div>
    </>
  );
}
