import { log } from "console";
import Image from "next/image";

let data: any = [
  {
    image: "/images/23556081.png",
    heading: "লগইন / রেজিস্ট্রেশন",
    text: [
      "লগইন / রেজিস্ট্রেশন বাটন চাপুন",
      "রেজিস্ট্রেশনের জন্যে নাগরিক হিসেবে বাটন চাপুন",
      "যক্তিগত তথ্য প্রদান করুন",
      "নুন্যতম ৮ সংখ্যার পাসওয়ার্ড দিন",
      "পাসওয়ার্ড নিশ্চিত করুন",
      "যবহারকারী নাম এবং পাসওয়ার্ড দিয়ে লগইন করুন",
    ],
    border: "#EEBA00",
    bg: "#EEBA0033",
    size: "5.12vw",
  },
  {
    image: "/images/ba6f8c9f02132581fde95843d53bf8751.png",
    heading: "কনসালটেন্ট নির্বাচন",
    text: [
      "পরামর্শকগণ বাটনে চাপুন",
      "পরামর্শকের তালিকা এবং বিস্তারিত পর্যবেক্ষণ করুন",
      "কাঙ্কখিত পরামর্শক নির্বাচন করুন",
      "ভূমিসেবা গ্রহণ করুন",
    ],
    border: "#0090BE",
    bg: "#0090BE33",
    size: "5.12vw",
  },
  {
    image: "/images/f2af61393a550a2ed563788fa9b5c5d71.png",
    heading: "সমস্যার বিবরণ",
    text: [
      "ভূমিসেবা টিমের নিকট সমস্যা / প্রশ্ন সাবমিট করুন",
      "নির্দেশনা অনুশারে নির্বাচিত পরামর্শকের সাথে যোগাযোগ করুন",
      "পরামর্শকের নিকট উক্ত সমস্যার বিবরণ দিন",
      "সেবা অনুরোধের অবস্থা ও ত্রুটি পর্যালোচনা করুন",
    ],
    border: "#FF5C00",
    bg: "#FF5C0033",
    size: "5.12vw",
  },
  {
    image: "/images/f2af61393a550a2ed563788fa9b5c5d71.png",
    heading: "উত্তম পরামর্শ প্রাপ্তি",
    text: [
      "ভূমিসেবার মাধ্যমে পরামর্শ / সমাধান গ্রহণ করুন",
      "ওয়েবসাইট এবং পরামর্শকে রেট দিন",
      "ভূমিসেবা ব্যবহারের অভিজ্ঞতা শেয়ার করুন",
    ],
    border: "#348739",
    bg: "#34873933",
    size: "4.02vw",
  },
];

export default function Comp1() {
  return (
    <>
      <div className="w-[45%] lg:w-[22%] m-2 lg:m-4 border border-[#EEBA00]  rounded-md">
        <div className="flex flex-col justify-center items-center p-2 lg:p-5 group-hover:border-b group-active:border-b border-[#EEBA00] rounded-md group-hover:bg-[#EEBA0033] group-active:bg-[#EEBA0033] bg-slate-50">
          <Image
            className="w-[5.12vw]"
            src={"/images/23556081.png"}
            height={1000}
            width={1000}
            alt="img"
          />
          <h3 className="font-medium text-16 lg:text-24">
            লগইন / রেজিস্ট্রেশন
          </h3>
        </div>
        <ul className="px-4 py-4 font-medium text-12 lg:text-20 hidden group-hover:block group-active:block">
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="">লগইন / রেজিস্ট্রেশন বাটন চাপুন</span>
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="">
              রেজিস্ট্রেশনের জন্যে নাগরিক হিসেবে বাটন চাপুন
            </span>
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="">ব্যক্তিগত তথ্য প্রদান করুন</span>
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="">পাসওয়ার্ড নিশ্চিত করুন</span>
          </li>
        </ul>
      </div>
      <div className="w-[45%] lg:w-[22%] m-2 lg:m-4 border border-[#0090BE]  rounded-md">
        <div className="flex flex-col justify-center items-center p-2 lg:p-5 group-hover:border-b group-active:border-b border-[#0090BE] rounded-md group-hover:bg-[#0090BE33] group-active:bg-[#0090BE33] bg-slate-50">
          <Image
            className="w-[5.12vw]"
            src={"/images/ba6f8c9f02132581fde95843d53bf8751.png"}
            height={1000}
            width={1000}
            alt="img"
          />
          <h3 className="font-medium text-16 lg:text-24">
            কনসালটেন্ট নির্বাচন
          </h3>
        </div>
        <ul className="px-4 py-4 font-medium text-12 lg:text-20 hidden group-hover:block group-active:block">
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            পরামর্শকগণ বাটনে চাপুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            পরামর্শকের তালিকা দেখুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            বিস্তারিত পর্যবেক্ষণ করুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
              কাঙ্ক্ষিত পরামর্শক নির্বাচন করুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            ভূমিসেবা গ্রহণ করুন
          </li>
        </ul>
      </div>
      <div className="w-[45%] lg:w-[22%] m-2 lg:m-4 border border-[#FF5C00]  rounded-md">
        <div className="flex flex-col justify-center items-center p-2 lg:p-5 group-hover:border-b group-active:border-b border-[#FF5C00] rounded-md group-hover:bg-[#FF5C0033] group-active:bg-[#FF5C0033] bg-slate-50">
          <Image
            className="w-[5.12vw]"
            src={"/images/home_task_1.png"}
            height={1000}
            width={1000}
            alt="img"
          />
          <h3 className="font-medium text-16 lg:text-24">সমস্যার বিবরণ</h3>
        </div>
        <ul className="px-4 py-4 font-medium text-12 lg:text-20 hidden group-hover:block group-active:block">
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            ভূমিসেবা টিমের নিকট সমস্যা / প্রশ্ন সাবমিট করুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            নির্বাচিত পরামর্শকের সাথে যোগাযোগ করুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            পরামর্শকের নিকট উক্ত সমস্যার বিবরণ দিন
          </li>
        </ul>
      </div>
      <div className="w-[45%] lg:w-[22%] m-2 lg:m-4 border border-[#348739]  rounded-md">
        <div className="flex flex-col justify-center items-center p-2 lg:p-5 group-hover:border-b group-active:border-b border-[#348739] rounded-md group-hover:bg-[#34873933] group-active:bg-[#34873933] bg-slate-50">
          <Image
            className="w-[5.12vw]"
            src={"/images/home_task_2.png"}
            height={1000}
            width={1000}
            alt="img"
          />
          <h3 className="font-medium text-16 lg:text-24">
            উত্তম পরামর্শ প্রাপ্তি
          </h3>
        </div>
        <ul className="px-4 py-4 font-medium text-12 lg:text-20 hidden group-hover:block group-active:block">
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            ভূমিসেবার মাধ্যমে পরামর্শ / সমাধান গ্রহণ করুন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            ওয়েবসাইট এবং পরামর্শকে রেট দিন
          </li>
          <li className="flex items-start">
            <span className="pr-2 text-green1">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            ভূমিসেবা ব্যবহারের অভিজ্ঞতা শেয়ার করুন
          </li>
        </ul>
      </div>
    </>
  );
}
