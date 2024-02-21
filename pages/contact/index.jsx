"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { relativeImagePath } from "@/helper/helper";

const Index = () => {
  return (
    <>
      <Layout>
        <div className="bg-[#F4FFEC] w-full h-24"></div>
        <section className="container mx-auto px-[2vw] flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-[47px] py-10">
          <div className="flex flex-col space-y-[15px] lg:space-y-0 lg:flex-row lg:space-x-[15px]">
            <div className="flex flex-col  items-center space-y-[5px] bg-[#FAFFFA] rounded-md border shadow-md shadow-[#017F284F] w-[15.5em] p-3">
              <div>
                <Image
                  className="w-[4.0625em]"
                  src={relativeImagePath("contact_phone.png")}
                  height={1000}
                  width={1000}
                  alt="image alt"
                />
              </div>
              <div>
                <h3 className="text-center font-medium text-green1 text-18 leading-[18px] lg:text-24 lg:leading-[24px]">
                  মোবাইল:
                </h3>
                <div className="flex flex-col text-[#757575] text-16 lg:text-[19px]">
                  <Link href={"tel:01958633203"}>০১৯৫৮৬৩৩২০৩</Link>
                  <Link href={"tel:01958633205"}>০১৯৫৮৬৩৩২০৫</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center space-y-[5px] bg-[#FAFFFA] rounded-md border shadow-md shadow-[#017F284F] w-[15.5em] p-3">
              <div>
                <Image
                  className="w-[4.0625em]"
                  src={relativeImagePath("contact_mail.png")}
                  height={1000}
                  width={1000}
                  alt="image alt"
                />
              </div>
              <div>
                <h3 className="text-center font-medium text-green1 text-18 leading-[18px] lg:text-24 lg:leading-[24px]">
                  ইমেইল:
                </h3>
                <div className="text-[#757575] text-16 lg:text-[19px]">
                  <Link
                    className="underline"
                    href={"mailto:support@vumiseba.com.bd"}
                  >
                    support@vumiseba.com.bd
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center space-y-[5px] bg-[#FAFFFA] rounded-md border shadow-md shadow-[#017F284F] w-[15.5em] p-3">
              <div>
                <Image
                  className="w-[4.0625em]"
                  src={relativeImagePath("contact_location.png")}
                  height={1000}
                  width={1000}
                  alt="image alt"
                />
              </div>
              <div>
                <h3 className="text-center font-medium text-green1 text-18 leading-[18px] lg:text-24 lg:leading-[24px] lg:pb-[6px]">
                  যোগাযোগ:
                </h3>
                <div className="text-[#757575] text-16 lg:text-[19px] lg:leading-[20px]">
                  <p className="text-center">
                    রাইসা ও শিকদার টাওয়ার, লেভেল-৫, ৩/৮, কামাল সরণি রোড,
                    ঢাকা-১২১৬
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={relativeImagePath("contact_phone_person.png")}
              height={1000}
              width={1000}
              alt="image alt"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
