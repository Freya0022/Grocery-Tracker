"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";

export default function ContactUs() {
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const [message, setMessage] = useState<string>("");
  const [isAnomyous, setIsAnonymous] = useState<boolean>(false);
  const handleSend = () => {
    if (!isAnomyous) {
      console.log(message, firstName, lastName);
    } else {
      console.log(message);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <div className="grid grid-cols-3 mr-40">
            <div className="col-span-2 mt-20 text-center">
              <h1 className="text-[32px] font-[500]">
                Welcome to Our Grocery Tracker!
              </h1>
              <h1 className="text-[28px] font-[500]">
                Have any thoughts? <br />
                Leave us a message here!
              </h1>
              <p className=" text-gray-500">
                Want new features or have any complaints? <br />
                Feel free to reach out to us!
              </p>
              <div className="mx-44 mt-4">
                <textarea
                  id="message"
                  value={message}
                  className="border rounded w-full p-4"
                  placeholder="Type your message here"
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
                <div className="text-end text-gray-700 my-1">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnomyous}
                    onChange={() => setIsAnonymous(!isAnomyous)}
                  />{" "}
                  <label htmlFor="anonymous">Anonymous</label>
                </div>
                <div className="text-start">
                  <button
                    className="w-[90px] py-1.5 rounded-full text-white bg-[#00B207] hover:bg-[#3DD243]"
                    onClick={handleSend}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 w-[560px] h-[560px] mt-20">
              <img src="/contact1.jpg" alt="contactUsImage" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
