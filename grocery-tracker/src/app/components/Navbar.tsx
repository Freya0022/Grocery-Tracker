import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <div className=" flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-2">
            <img src="/gtLogo.png" alt="logo" className="w-12 h-12"/>
            <p className="font-poppins text-[24px] font-[500]">Grocery Tracker</p>
            </div>
            <div className="flex items-center space-x-2">
            <p className="font-poppins hover:text-green-500">Sign In</p>
            <p>/</p>
            <p className="font-poppins hover:text-green-500 pr-4">Sign Up</p>
            </div>           
        </div>
        <div className="flex items-center border bg-[#333333] py-4 px-4 space-x-4">
            <Link href={"/"}><h1 className="font-poppins text-white hover:text-green-500">Home</h1></Link>
            <Link href={"/"}><h1 className="font-poppins text-[#999999] hover:text-green-500">Blog</h1></Link>
            <Link href={"/"}><h1 className="font-poppins text-[#999999] hover:text-green-500">About Us</h1></Link>
            <Link href={"/"}><h1 className="font-poppins text-[#999999] hover:text-green-500">Contact Us</h1></Link>
            
        </div>
        </>
    )
}