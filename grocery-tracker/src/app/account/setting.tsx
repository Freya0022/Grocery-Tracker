"use client"

import Link from "next/link";
import { useState } from "react";

export default function Setting(){
    const [storeName, setStoreName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [profileImage, setProfileImage] = useState<string>("");
    const handleChooseImage = (e: any) => {
            const file = e.target.files[0];
            if (file) {
                setProfileImage(URL.createObjectURL(file));
            }
          };
    
    const handleReset = () => {
        setStoreName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
    }
    return (
        <>
        <div className="w-full ">
        <div className="mx-2 py-2  border rounded">
          <h1 className="font-poppins text-[20px] font-[500] py-2 px-4">
          Account Setting:
          </h1>
          <hr className="w-full" />
          <div className="px-6 my-6  grid grid-cols-2 gap-6">
            <div className="space-y-6 ">
              <div className="space-y-1.5">
                <label htmlFor="productName">Store Name:</label>
                <div>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="border rounded-md py-2 px-2 w-full text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="productName">Address:</label>
                <div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border rounded-md py-2 px-2 w-full text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="productName">Email:</label>
                <div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-md py-2 px-2 w-full text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="productName">Phone Number:</label>
                <div>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border rounded-md py-2 px-2 w-full text-gray-600"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
              <button
                  className="w-[72px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  className="w-[72px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                //   onClick={onAction}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-6">
              <div className="w-[140px] h-[140px]  rounded-full  overflow-hidden hover:border-2 hover:border-[#3DD243]">
                <img
                  src={profileImage ? profileImage : '/pop.jpg'}
                  alt="profileImg"
                  className="object-cover w-full h-full "
                />
              </div>
              <button
                className="w-[140px] py-2.5 rounded-full text-[#00B207] border border-2 border-[#00B207] hover:border-[#3DD243] hover:text-[#3DD243]"
                onClick={() => document.getElementById("chooseImage")?.click()}
              >
                Choose Image
              </button>
              <input
                id="chooseImage"
                type="file"
                accept="image/*"
                onChange={handleChooseImage}
                hidden
              />
            </div></div>
          </div>
        </div></>
        )
}