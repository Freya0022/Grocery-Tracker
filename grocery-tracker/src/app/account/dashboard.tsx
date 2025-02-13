"use client";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Dashboard() {
  const user = {
    storeName: "Fri Grocery",
    address: "3 Hall st, Newport, VIC",
    email: "fregro@gocery.com",
    phoneNumber: "012345678",
    profileImage: "",
  };
  return (
    <>
      <div>
        <div className="w-full ">
          <div className="mx-2 py-2  border rounded">
            <h1 className="font-poppins text-[20px] font-[500] py-2 px-4">
              Store Info
            </h1>
            <hr className="w-full" />
            <div className="flex grid-cols py-12 px-28 gap-36">
              <div className="flex flex-col gap-4">
                <div className="w-[140px] h-[140px]  rounded-full  overflow-hidden hover:border-2 hover:border-[#3DD243]">
                  <img
                    src={user.profileImage ? user.profileImage : "/pop.jpg"}
                    alt="profileImage"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-[18px] font-[500]">{user.storeName}</h1>
                </div>
              </div>
              <div className="mt-8 space-y-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="size-5" />
                  <p>{user.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="size-5" />
                  <p>{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaSquarePhone className="size-5" />
                  <p>{user.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
