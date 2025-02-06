import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-[450px] ">
        <div className="text-center w-1/3 h-2/3 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg ">
          <p className="my-4 text-[24px] font-[500]">Sign In</p>
          <form className="space-y-4 px-6">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="px-2 py-1.5 rounded w-full placeholder:text-gray-400 bg-white border"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="px-2 py-1.5 rounded w-full placeholder:text-gray-400 bg-white border"
              />
            </div>
            <div className="flex items-center justify-between text-[14px]">
              <div>
                <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <Link href={'/'}><p className="hover:text-[#3DD243]">Forget Password</p></Link>
            </div>
            <button className="w-full py-1.5 rounded-lg text-white bg-[#00B207] hover:bg-[#3DD243]">
              Login
            </button>
            <p>
              Don't have account?{" "}
              <a href="/signup" className="font-[500] hover:text-[#3DD243]">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
