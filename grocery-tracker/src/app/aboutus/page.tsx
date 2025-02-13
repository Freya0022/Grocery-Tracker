import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-40 py-12">
          <div className="flex items-center gap-8">
            <div className="flex-1 px-10 flex flex-col justify-center">
              <h2 className="mb-2 text-[32px] font-[500]">
                Track Expiring Products
              </h2>
              <p className="text-gray-600">
                Stay ahead by identifying products that are about to expire. Our
                system alerts you so you can take action before it's too late!
              </p>
            </div>
            <div className="w-[500px] h-[500px]">
              <img
                src="/contact2.jpg"
                alt="aboutUsImage1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
            <hr className="self-start w-2/3 border-t-2 border-[#00B207]" />
       
          <div className="flex items-center gap-8">
            <div className="w-[500px] h-[500px]">
              <img
                src="/candy.jpg"
                alt="aboutUsImage1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1  px-20">
              <h2 className="mb-2 text-[32px] font-[500]">
                Manage Stock Efficiently
              </h2>
              <p className="text-gray-600">
                Never run out of essentials! Get notified when stock is low, so
                you can restock before it's too late.
              </p>
            </div>
          </div>
          <hr className="self-end w-2/3 border-t-2 border-[#00B207]" />

          <div className="flex items-center gap-8">
            <div className="flex-1 px-10 flex flex-col justify-center">
              <h2 className="mb-2 text-[32px] font-[500]">
                More Features Coming!
              </h2>
              <p className="text-gray-600">
                We're constantly improving! Expect new features to make store
                management even easier in the future.
              </p>
            </div>
            <div className="flex-1 w-[500px] h-[500px]">
              <img
                src="/contact.jpg"
                alt="aboutUsImage1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
