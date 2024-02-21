import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useLang } from "@/hooks";
import Contact from "@/components/Contact";
import Accordion from "../components/Accordion";
import { IFaq, IFaqApi } from "../models/Faq";
import { fetchFaqs } from "../http";

const Faq: NextPage = () => {
  const router = useRouter();

  const [nagorik, setNagorik] = useState([]);
  const [poramorsok, setPoramorsok] = useState([]);

  useEffect(() => {
    const getFaq = async () => {
      const { data } = await fetchFaqs();

      const citizen = data?.data?.filter((i) => i.category_name == "citizen");
      setNagorik(citizen);

      const consultants = data?.data?.filter(
        (i) => i.category_name == "consultant"
      );
      setPoramorsok(consultants);
    };

    getFaq();
  }, []);

  const { LangInfo, HandleChange } = useLang();
  const { lang } = LangInfo;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Layout>
      <Image
        className="w-full"
        src={"/images/faq_header_image.png"}
        height={1000}
        width={1000}
        alt="img"
      />
      <div className="container mx-auto px-[4vw] lg:px-[2vw] flex justify-center items-center"></div>
      <section className="lg:-mt-20 pb-[27px] lg:pb-[44px]">
        <div className="mx-auto">
          <div className="lists text-center">
            <div className="flex flex-wrap flex-col mx-auto">
              <div className=" ">
                {lang === "eng " ? (
                  <h4 className="theme_h1_green  ">
                    Frequently Asked Questions
                  </h4>
                ) : (
                  <h4 className="font-medium text-24 lg:text-36">
                    সাধারণ জিজ্ঞাসা
                  </h4>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6 mt-3 w-[100%] m-auto  text-center cursor-pointer  ">
            <ul className="flex justify-center ">
              <li
                className={`px-6 py-2 rounded-full ${
                  toggleState === 1
                    ? " bg-[#008521] text-white   "
                    : "bg-[#F4FFEC]"
                } `}
                onClick={() => toggleTab(1)}
              >
                নাগরিক
              </li>
              <li
                className={`px-6 py-2 rounded-full ${
                  toggleState === 2
                    ? " bg-[#008521] text-white   "
                    : "bg-[#F4FFEC]"
                } `}
                onClick={() => toggleTab(2)}
              >
                পরামর্শক
              </li>
            </ul>
          </div>

          <div
            className={`container mx-auto px-[4vw] lg:px-[12vw] ${
              toggleState === 1 ? " sm:grid sm:grid-cols-3 " : " hidden"
            } `}
          >
            <div className="col-span-4">
              <div className="acdionlist2">
                <div className="accordion grid gap-4" id="">
                  {nagorik && <Accordion values={nagorik} />}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`container mx-auto px-[4vw] lg:px-[12vw] ${
              toggleState === 2 ? " sm:grid sm:grid-cols-3" : " hidden"
            } `}
          >
            <div className="col-span-4">
              <div className="acdionlist2">
                <div className="accordion grid gap-4" id="">
                  {poramorsok && <Accordion values={poramorsok} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4FFEC] mb-[6px] lg:mb-[12px]">
        <div className="container mx-auto px-[4vw] lg:px-[2vw] py-5 flex flex-col lg:flex-row lg:justify-center lg:items-center">
          <div>
            {/* image */}
            <div>
              <h3 className="font-medium text-16 leading-[18.38px] lg:text-24 lg:leading-[27.5px] pb-[10px] lg:pb-[3px]">
                ভূমিসেবা সেবা সম্পর্কিত
              </h3>
              <h3 className="font-medium text-32 leading-[36.77px] lg:text-48 lg:leading-[55.15px]">
                প্রশ্ন জিজ্ঞাসা করুন
              </h3>
            </div>
            <div className="hidden lg:flex lg:justify-center lg:items-center">
              <Image
                className="w-[70%]"
                src={"/images/faq2.png"}
                height={1000}
                width={1000}
                alt="img"
              />
            </div>
          </div>
          <Contact />
        </div>
      </section>
    </Layout>
  );
};

// export async function getServerSideProps({}) {
//   const { data: faqs } = await fetchFaqs();

//   return {
//     props: {
//       data: faqs,
//     },
//   };
// }

export default Faq;
