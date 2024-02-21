import Link from "next/link";
import { Player,Controls } from "@lottiefiles/react-lottie-player";

const NoDataFound = (prop) => {

  return (
    <>
      <section className="container mx-auto flex flex-col justify-center items-center pb-12 lg:pb-0">
        <div className="w-[30%]">
          <Player src={'/images/data_not_found.json'} autoplay loop></Player>
        </div>
        <p className="text-16 lg:text-26 text-gray-400">আপনার অনুসন্ধান টি পাওয়া যায় নি।</p>
        <button
          onClick={() => prop?.action()}
          className="cursor-pointer bg-white border border-green1 px-2 py-1 text-green1 rounded-full text-[15px] "
        >
          পুনরায় সেট করুন
        </button>
      </section>
    </>
  );
};

export default NoDataFound;
