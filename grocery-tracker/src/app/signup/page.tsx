import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full my-20">
        <div className="text-center w-1/3 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg ">
          <p className="my-4 text-[24px] font-[500]">Create Account</p>
          <form className="space-y-4 px-6 mb-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="px-2 py-1.5 rounded w-full placeholder:text-gray-400 bg-white border"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="px-2 py-1.5 rounded w-full placeholder:text-gray-400 bg-white border"
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
                className="px-2 py-1.5 rounded w-full placeholder:text-gray-400 bg-white border"
              />
            </div>
   
              <div className="text-[14px] text-left">
                <input type="checkbox" name="accept" id="accept" />{" "}
                <label htmlFor="accept">Accept all terms condition</label>
              </div>

            <button className="w-full py-1.5 rounded-lg text-white bg-[#00B207] hover:bg-[#3DD243]">
              Create Account
            </button>
            <p>
              Already have account?
              <a href="/signin" className="font-[500] hover:text-[#3DD243]">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
