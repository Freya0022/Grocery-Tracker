"use client";

import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

export default function Security() {
  const currentPassword = "abc123";
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const handleSubmit = () => {
    if (password === currentPassword && newPassword === confirmedPassword) {
      currentPassword;
    }
  };
   const handleReset =() => {
    setPassword("");
    setNewPassword("");
    setConfirmedPassword("");
   }
  return (
    <>
      <div className="w-full ">
        <div className="mx-2 py-2  border rounded">
          <h1 className="font-poppins text-[20px] font-[500] py-2 px-4">
            Change Password:
          </h1>
          <hr className="w-full" />
          <div className="px-6 my-6 space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="productName">Current Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text": "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded-md py-2 px-2 w-full text-gray-600"
                />
                <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <PiEyeClosedBold className="w-5 h-5 text-gray-500" />
                ) : (
                    <PiEyeBold className="w-5 h-5 text-gray-500" />
                )}
              </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 w-full">
                <label htmlFor="productName">New Password:</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text": "password"}
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border rounded-md py-2 pl-2 w-full text-gray-600"
                  />
                  <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <PiEyeClosedBold className="w-5 h-5 text-gray-500" />
                ) : (
                    <PiEyeBold className="w-5 h-5 text-gray-500" />
                )}
              </button>
                </div>
              </div>
              <div className="space-y-1.5 w-full">
                <label htmlFor="productName">Confirm Password:</label>
                <div className="relative">
                  <input
                    type={showConfirmedPassword ? "text": "password"}
                    id="confirmedPassword"
                    name="confirmedPassword"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    className="border rounded-md py-2 pl-2 w-full text-gray-600"
                  />
                  <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
              >
                {showConfirmedPassword ? (
                  <PiEyeClosedBold className="w-5 h-5 text-gray-500" />
                ) : (
                    <PiEyeBold className="w-5 h-5 text-gray-500" />
                )}
              </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                  className="w-[80px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  className="w-[80px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
