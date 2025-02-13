"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiSolidDashboard } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout, MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import Setting from "./setting";
import Dashboard from "./dashboard";
import Security from "./security";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Analysis from "./analysis";

export default function Account() {
  const [session, setSession] = useState<string>("dashboard");
  const router = useRouter();
  const handleLogout= () => {
    Cookies.remove('token');
    router.push('/signin')
  }

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
      <div className="flex m-20">
        <div className="relative w-[25%] mx-8">
          <div className="flex flex-col border rounded space-y-4 text-gray-500 shadow-lg">
            <div
              className={`flex items-center py-3 pl-4 pr-10 gap-4 ${
                session === "dashboard"
                  ? `bg-[#EDF2EE] text-black border-l-2 border-[#00B207]`
                  : ""
              }`}
              onClick={() => setSession("dashboard")}
            >
              <BiSolidDashboard className="size-5" />
              Dashboard
            </div>
            <div
              className={`flex items-center py-3 pl-4 pr-10 gap-4 ${
                session === "analysis"
                  ? `bg-[#EDF2EE] text-black border-l-2 border-[#00B207]`
                  : ""
              }`}
              onClick={() => setSession("analysis")}
            >
              <TbDeviceAnalytics className="size-5" />
              Analysis
            </div>
            <div
              className={`flex items-center py-3 pl-4 pr-10 gap-4 ${
                session === "setting"
                  ? `bg-[#EDF2EE] text-black border-l-2 border-[#00B207]`
                  : ""
              }`}
              onClick={() => setSession("setting")}
            >
              <IoSettingsOutline className="size-5" />
              Setting
            </div>
            <div
              className={`flex items-center py-3 pl-4 pr-10 gap-4 ${
                session === "security"
                  ? `bg-[#EDF2EE] text-black border-l-2 border-[#00B207]`
                  : ""
              }`}
              onClick={() => setSession("security")}
            >
              <MdOutlineSecurity className="size-5" />
              Security
            </div>
            <div
              className={`flex items-center py-3 pl-4 pr-10 gap-4 ${
                session === "logout"
                  ? `bg-[#EDF2EE] text-black border-l-2 border-[#00B207]`
                  : ""
              }`}
              onClick={handleLogout}
            >
              <MdLogout className="size-5" />
              Logout
            </div>
          </div></div>

          <div className="relative w-[75%] mx-8">
            {session === "dashboard" && <Dashboard />}
            {session === "analysis" && <Analysis />}
            {session === "setting" && <Setting />}
            {session === "security" && <Security />}
          </div>
          </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
