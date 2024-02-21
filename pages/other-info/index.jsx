import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { relativeImagePath } from "@/helper/helper";

const Index = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F4FFEC] w-full h-24"></div>
        <section className="container mx-auto px-[2vw] flex flex-col lg:flex-row justify-center items-center lg:justify-evenly space-y-4 lg:space-y-0 py-12 lg:h-[50vh]">
          <div className="flex flex-col  items-center space-y-[5px] bg-[#FAFFFA] rounded-md border shadow-md shadow-[#017F284F] w-[15.5em] p-3">
            <h3 className="text-center font-medium text-white bg-green1 text-18 leading-[18px] lg:text-24 lg:leading-[24px] p-3 rounded-md">টিন নাম্বার</h3>
            <p className="text-[#757575] text-16 lg:text-[19px]">১৭০৭৩২৬৬৪২৫৪</p>
          </div>
          <div className="flex flex-col  items-center space-y-[5px] bg-[#FAFFFA] rounded-md border shadow-md shadow-[#017F284F] w-[15.5em] p-3">
            <h3 className="text-center font-medium text-white bg-green1 text-18 leading-[18px] lg:text-24 lg:leading-[24px] p-3 rounded-md">বিন নাম্বার</h3>
            <p className="text-[#757575] text-16 lg:text-[19px]">০০২০২০০৭১-০৪০২</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
