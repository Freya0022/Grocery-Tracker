"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <div className="mb-16">
        <div className="fixed top-0 left-0 w-full flex z-50 items-center justify-between border bg-[#333333] py-2 px-4 ">
          <div className="flex items-center space-x-4">
            <img src="/gtLogo.png" alt="logo" className="w-10 h-10" />
            <Link href={"/"}>
              <h1 className="font-poppins text-white hover:text-green-500">
                Home
              </h1>
            </Link>
            <Link href={"/"}>
              <h1 className="font-poppins text-[#999999] hover:text-green-500">
                Blog
              </h1>
            </Link>
            <Link href={"/"}>
              <h1 className="font-poppins text-[#999999] hover:text-green-500">
                About Us
              </h1>
            </Link>
            <Link href={"/"}>
              <h1 className="font-poppins text-[#999999] hover:text-green-500">
                Contact Us
              </h1>
            </Link>
          </div>
          {isAuthenticated ? (
            <div>
              <Link href={"/account"}>
                <img
                  src="/pop.jpg"
                  alt="userImg"
                  className="size-8 rounded-full"
                />
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-white">
              <Link href={"/signin"}>
                <p className="font-poppins hover:text-green-500">Sign In</p>
              </Link>
              <p>/</p>
              <Link href={"/signup"}>
                <p className="font-poppins hover:text-green-500 pr-4">
                  Sign Up
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
