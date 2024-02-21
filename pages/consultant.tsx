import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Comp1 from "@/components/consultant/Comp1";
import Accordion from "@/components/Accordion";
import Slider from "@/components/Slider";
import SliderWithText from "@/components/SliderWithText";
import { fetchFaqs } from "@/http";
import { ADMIN_PANEL_URL } from "@/config";


export default function Home() {
  const [poramorsok, setPoramorsok] = useState([]);

  const Fcadata = {
    images: [
      {
        image: "/images/consultant_image.jpg",
        alt: "img1",
      },
      {
        image: "/images/c21.jpg",
        alt: "img2",
      },
    ],
    heading: "আপনি ভূমিসেবা একজন কনসালটেন্ট হতে চান?",
    para: "আমাদের সাথে যোগাযোগ করুন এবং আপনার দক্ষতা, অভিজ্ঞতা এবং আপনার সেবা সম্পর্কিত বিশদগুলি সাঝা করুন। আমরা আপনাকে উচ্চ মানের প্রশিক্ষণ দিয়ে প্রয়োজনীয় সমর্থন প্রদান করবো যাতে আপনি আপনার প্রশাসনিক কাজগুলি করতে সময় ও শ্রম সংযোজন করতে পারেন।",
    search: false,
    tags: false,
    buttons: [
      {
        text: "যোগদান করুন",
        url: ADMIN_PANEL_URL+"/citizen-register",
      },
      {
        text: "যোগদানে যা প্রয়োজন",
        url: "#",
      },
    ],
  };
  const Comp1data = {
    card1: {
      avatar: {
        image: "/images/exchange-money-icon.png",
        background_color: "y3",
      },
      body: {
        heading: "আকর্ষণীয় বাড়তি আয়",
        para: "আপনার নির্ভরযোগ্যতা এবং কার্যক্রমের মাধ্যমে লক্ষ্য সম্পন্ন করতে পারবেন। আপনার বাড়তি আয় নিশ্চিত করবে।",
      },
    },
    card2: {
      avatar: {
        image: "/images/project-icon.png",
        background_color: "p1",
      },
      body: {
        heading: "খন্ডকালীন কাজ করার সুযোগ",
        para: "আপনি পরামর্শক হিসাবে স্বাধীনভাবে কাজ করতে পারবেন। আপনি নিজের সময় পরিচালনা করতে পারবেন।",
      },
    },
    card3: {
      avatar: {
        image: "/images/real-estate-agent-icon.png",
        background_color: "b2",
      },
      body: {
        heading: "পছন্দমতো ভূমি সেবা প্রদান",
        para: "আপনার দক্ষতা ও অভিজ্ঞতা অনুযায়ী বিভিন্ন ভূমি সম্পর্কিত সঠিক পরামর্শ প্রদান করতে পারবেন।",
      },
    },
    card4: {
      avatar: {
        image: "/images/safety-icon1.png",
        background_color: "m1",
      },
      body: {
        heading: "অন-টাইম পেমেন্ট",
        para: "আপনার আয়ের একটি উত্তম উপায় হতে পারে ভূমিসেবা যদি আপনি প্রশাসনিক কাজে অভিজ্ঞতা এবং দক্ষতা রাখেন।",
      },
    },
  };
  const review = [
    {
      user: "এ.এফ.এম সাইফুল করিম",
      image: "/images/consultant_reviewer_1.jpg",
      text: "ভূমিসেবা প্লাটফর্মে কাজ করার মাধ্যমে আমি অনেক সাধারণ মানুষের জমি সম্পর্কিত সমস্যার সহজেই সমাধান দিতে পারছি। ভূমিসেবার এই পদক্ষেপকে আমি সাধুবাত জানাই এবং তাদের মাধ্যমে দেশের মানুষের উপকার করতে পেরে আমি খুশি।",
    },
    {
      user: "মোঃ বাবলু আহমেদ",
      image: "/images/consultant_reviewer_2.jpg",
      text: "ভূমিসেবায় আমি একজন খন্ডকালীন পরামর্শক। এই প্লাটফর্মের মাধ্যমে আমি ভূমি সেবা প্রার্থী  সাধারণ মানুষকে সাহায্য করতে পারছি। সবমিলিয়ে আমি ভূমিসেবা প্লাটফর্মের কাছে কৃতজ্ঞ।",
    },
    {
      user: "মাসুমা শারমিন ফেরদৌসী",
      image: "/images/consultant_reviewer_3.jpg",
      text: "ভূমিসেবায় আমি যথেষ্ট সময় দেওয়ার চেষ্টা করি। আমার অভিজ্ঞতা অনুসারে সঠিক পরামর্শ প্রদান করার  চেষ্টা করে চলেছি। ভূমিসেবাকে ধন্যবাদ পরামর্শক হিসেবে আমাকে নির্বাচন  করার জন্যে।",
    },
    {
      user: "মোঃ তারজেল হোসেন",
      image: "/images/consultant_reviewer_4.jpg",
      text: "ভূমিসেবায় আমি একজন পূর্ণ কালিন পরামর্শক হিসেবে নিযুক্ত আছি। অভিজ্ঞতা অনুসারে আমি  ভূমি সংক্রান্ত  সকল বিষয়ের পরামর্শ প্রদান করে থাকি। ভূমিসেবা প্লাটফর্মের জন্য অনেক শুভকামনা ।",
    },
    {
      user: "মোঃ মঈনুল হক",
      image: "/images/consultant_reviewer_5.jpg",
      text: "ভূমিসেবায় আমি একজন পূর্ণ কালিন পরামর্শক হিসেবে রয়েছি। ভূমিসেবার এই উদ্যেগ ভূমি সেবা প্রার্থী  সাধারণ মানুষের জীবনে অভাবনীয় পরিবর্তন নিয়ে আসবে বলে আমি আশা করি। ",
    },
  ];

  

  useEffect(() => {
    const getFaq = async () => {
      const { data } = await fetchFaqs();

      const consultants = data?.data?.filter((i) => i.category_name == "consultant")
      setPoramorsok(consultants)
    }

    getFaq()

  }, [])

  return (
    <Layout>

      <Slider data={Fcadata} />
      <Comp1 data={Comp1data} />

      <section
        id="consulFaq"
        className="container mx-auto px-[4vw] lg:px-[2vw] flex flex-col lg:flex-row lg:space-x-16 lg:items-end pb-[45px]"
      >
        <div className="w-full lg:w-[39%] flex justify-center items-center pb-5 lg:pb-0">
          <Image className="w-[50%] lg:w-full rounded-md" src={"/images/Rectangle4547.png"} height={1000} width={1000} alt="img" />
        </div>
        <div className="flex flex-col lg:w-[50%]">
          <div>
            <h3 className="font-medium text-16 lg:text-24">
              কনসালট্যান্ট/পরামর্শক
            </h3>
            <h3 className="font-medium text-32 lg:text-48">হতে যা প্রয়োজন</h3>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="bg-slate-50 drop-shadow-lg p-3 lg:p-5">
              <div className="flex flex-col lg:flex-row items-center space-x-5">
                <Image className="w-[30%] lg:w-[16%] pb-4 lg:pb-0" src={"/images/item1.png"} height={1000} width={1000} alt="img" />
                <div className="flex flex-col w-[70%] lg:w-[84%]">
                  <h3 className="font-medium text-16 lg:text-24">
                    অবশ্যই কম্পিউটার/অ্যান্ড্রয়েড ফোন থাকতে হবে
                  </h3>
                  <p className="font-medium text-14 lg:text-16">
                    আপনি যদি কনসালটেন্ট হিসাবে কাজ করতে ইচ্ছুক হন, তাহলে অবশ্যই আপনার নিজস্ব একটি কম্পিউটার অথবা অ্যান্ড্রয়েড ফোন থাকতে হবে।
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 drop-shadow-lg p-3 lg:p-5">
              <div className="flex flex-col lg:flex-row items-center space-x-5">
                <Image className="w-[30%] lg:w-[16%] pb-4 lg:pb-0" src={"/images/item2.png"} height={1000} width={1000} alt="img" />
                <div className="flex flex-col w-[70%] lg:w-[84%]">
                  <h3 className="font-medium text-16 lg:text-24">
                    জাতীয় পরিচয়পত্র ও শিক্ষাগত যোগ্যতা
                  </h3>
                  <p className="font-medium text-14 lg:text-16">
                    শিক্ষাগত যোগ্যতা প্রমাণ করার জন্য আপনাকে স্কুল, কলেজ,
                    বিশ্ববিদ্যালয় বা অন্যান্য শিক্ষা প্রতিষ্ঠান থেকে প্রাপ্ত
                    প্রমাণপত্র প্রদান করতে হবে।
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 drop-shadow-lg p-3 lg:p-5">
              <div className="flex flex-col lg:flex-row items-center space-x-5">
                <Image className="w-[30%] lg:w-[16%] pb-4 lg:pb-0" src={"/images/item3.png"} height={1000} width={1000} alt="img" />
                <div className="flex flex-col w-[70%] lg:w-[84%]">
                  <h3 className="font-medium text-16 lg:text-24">
                    ভূমি সংক্রান্ত সেবা প্রদানের পূর্ব অভিজ্ঞতা
                  </h3>
                  <p className="font-medium text-14 lg:text-16">
                    আপনি যদি কনসালটেন্ট হিসাবে যুক্ত হতে চান তাহলে আপনার ভূমি সংক্রান্ত পূর্ব অভিজ্ঞতা থাকতে হবে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[4vw] lg:px-[2vw] pb-[19px] lg:pb-[28px]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-16 lg:text-24">আমাদের ভূমিসেবা</h3>
          <h3 className="font-medium text-28 lg:text-48">
            পরামর্শকদের যোগদান নিয়ম !
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:space-x-12">
          <div className="flex flex-col space-y-5 justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center items-stretch w-[75%] lg:w-full bg-slate-50 drop-shadow-lg">
              <div className="bg-[#CDF5F6] flex justify-center items-center lg:w-[30%]">
                <Image className="m-5 lg:m-0 w-[25%] lg:w-[40%]" src={"/images/item4.png"} height={1000} width={1000}  alt="img"/>
              </div>
              <div className="flex flex-col justify-center items-start p-5 lg:w-[70%]">
                <h3 className="font-medium text-16 lg:text-24">
                  লগইন / রেজিস্ট্রেশন
                </h3>
                <p className="font-medium text-14 lg:text-16">
                ভূমিসেবা ওয়েবসাইটে রেজিস্ট্রেশন এর পর লগইন এর মাধ্যমে পরামর্শকগণ তাদের প্রোফাইল তৈরি করতে পারবেন।
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch w-[75%] lg:w-full bg-slate-50 drop-shadow-lg">
              <div className="bg-[#ED6D0033] flex justify-center items-center lg:w-[30%]">
                <Image className=" m-5 lg:m-0 w-[25%] lg:w-[40%]" src={"/images/item5.png"} height={1000} width={1000} alt="img" />
              </div>
              <div className="flex flex-col justify-center items-start p-5 lg:w-[70%]">
                <h3 className="font-medium text-16 lg:text-24">
                  তথ্য যাচাইকরণ
                </h3>
                <p className="font-medium text-14 lg:text-16">
                  রেজিস্ট্রেশন এর সময় প্রেরিত তথ্য যাচাই করা হবে এবং সিস্টেমে সংরক্ষিত থাকবে।
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch w-[75%] lg:w-full bg-slate-50 drop-shadow-lg">
              <div className="bg-[#71058333] flex justify-center items-center lg:w-[30%]">
                <Image className=" m-5 lg:m-0 w-[25%] lg:w-[40%]" src={"/images/item6.png"} height={1000} width={1000} alt="img" />
              </div>
              <div className="flex flex-col justify-center items-start p-5 lg:w-[70%]">
                <h3 className="font-medium text-16 lg:text-24">
                  ভূমিসেবা পরামর্শক সদস্য প্রাপ্ত
                </h3>
                <p className="font-medium text-14 lg:text-16">
                  প্রেরিত তথ্য এবং যোগ্যতা আমাদের পরিষেবার সাথে সম্পর্কিত হলে আপনি সদস্য হিসেবে নির্বাচিত হবেন।
                </p>
              </div>
            </div>
            <div className="hidden  flex-col lg:flex-row justify-center items-stretch w-[75%] lg:w-full bg-slate-50 drop-shadow-lg">
              <div className="bg-[#71058333] flex justify-center items-center lg:w-[30%]">
                <Image className="m-5 lg:m-0 w-[25%] lg:w-[40%]" src={"/images/item5.png"} height={1000} width={1000} alt="img" />
              </div>
              <div className="flex flex-col justify-center items-start p-5 lg:w-[70%]">
                <h3 className="font-medium text-16 lg:text-24">
                  ভূমিসেবা পরামর্শক সদস্য প্রাপ্ত
                </h3>
                <p className="font-medium text-14 lg:text-16">
                  সাইটে সেবা পরামর্শকদের তালিকা দেখতে পারবেন। এটি সাধারণত
                  কনসালটেন্ট পেজের মাধ্যমে অ্যাক্সেস করা যায়।
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch w-[75%] lg:w-full bg-slate-50 drop-shadow-lg">
              <div className="bg-[#0073FB1A] flex justify-center items-center lg:w-[30%]">
                <Image className="m-5 lg:m-0 w-[25%] lg:w-[40%]" src={"/images/item7.png"} height={1000} width={1000} alt="img" />
              </div>
              <div className="flex flex-col justify-center items-start p-5 lg:w-[70%]">
                <h3 className="font-medium text-16 lg:text-24">
                  ভূমিসেবা সেবা প্রদান
                </h3>
                <p className="font-medium text-14 lg:text-16">
                  আপনার কর্ম ক্ষেত্রের বিশেষত্ব অনুসারে আপনি পরবর্তীতে সেবা গ্রহীতাদের কাঙ্ক্ষিত সেবা প্রদান করতে পারবেন।
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] flex justify-center items-center">
            <Image className="w-[80%] lg:w-full" src={"/images/hand_image2.png"} height={1000} width={1000} alt="img" />
          </div>
        </div>
      </section>

      <section className="mb-[14px] lg:mb-10 bg-[#E8F6DE]">
        <div className="px-[4vw] lg:px-[5vw] container mx-auto overflow-hidden flex flex-col justify-center items-center p-2 py-5 h-[434px]">
          <div className="grid grid-cols-1 justify-items-center">
            <h3 className="font-bold text-green1 text-24 lg:text-36">
              পরামর্শকের সাধারন জিজ্ঞাসা
            </h3>
          </div>
          <div className="w-full lg:w-[70%] overflow-y-auto lg:mb-[20px] no-scrollbar">
            {
              poramorsok && <Accordion values={poramorsok} />
            }
            {/* <Accordion values={poramorsok} /> */}
          </div>
          <div className="grid justify-items-center p-1">
            <Link legacyBehavior href="/faq">
              <button className="bg-slate-50 hover:bg-green1 text-green1 hover:text-slate-50 border border-green1 font-bold p-2 px-4 py-[5px]  rounded-full">
                আরো দেখুন
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-[url('../public/images/image10.png')] h-[60vh] lg:h-[56vh] bg-cover flex flex-col justify-center p-2 sm:p-0 m-auto mb-4">
        <div className="container mx-auto px-[4vw] lg:px-[2vw] flex justify-center items-center pt-5 -mb-12">
          <h3 className="font-medium text-24 leading-[27px] lg:text-36 lg:leading-[41px]">
            পরামর্শকের কিছু কথা
          </h3>
        </div>
        <SliderWithText data={review} />
      </section>

      {/* consultant registration */}
      <section className="container mx-auto px-[4vw] lg:px-[2vw] flex flex-col lg:flex-row items-center lg:justify-around pb-5 lg:pb-2">
        <h3 className="font-medium text-24 leading-[27.58px] lg:text-48 lg:leading-[55.15px]  lg:text-left  lg:w-full pb-3 lg:pb-0">
          রেজিস্ট্রেশন করে আয় করা শুরু করুন
        </h3>
        <div className="flex justify-center items-center">
          <Link target="_blank" className="font-medium text-36 lg:text-48 bg-[#BA0000] text-slate-50 px-3 py-2 lg:px-16 lg:py-3 rounded-lg" href={ADMIN_PANEL_URL+`/consultancy-register`}>রেজিস্ট্রেশন</Link>
        </div>
      </section>
    </Layout>
  );
}
