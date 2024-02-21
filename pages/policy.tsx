import Layout from "@/components/Layout";
import Image from "next/image";
import { relativeImagePath } from "@/helper/helper";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-[8vw] lg:px-[2vw] lg:flex lg:justify-center lg:items-center">
        <div className="bg-slate-50 lg:drop-shadow-lg lg:px-7 py-12 mb-4 rounded-md">
          <h3 className="font-medium text-24 leading-[27.5px] lg:text-36 lg:leading-[41px] text-green1 pb-[23px] lg:pb-[25px] text-center">
            নিয়ম এবং শর্তাবলী
          </h3>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col space-y-3">
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    পরিচিতিঃ{" "}
                  </li>
                </ul>
                <p className="text-justify">
                  ভূমিসেবা অনলাইন প্লাটফর্মে আপনাকে স্বাগতম। ভূমিসেবা ওয়েবসাইটটি
                  ব্যবহার করার আগে অনুগ্রহ করে এই ব্যবহারকারীর শর্তগুলি পড়ুন ৷
                  আমরা আমাদের পরিষেবার প্রচার এবংপরামর্শ ফী এর বিনিময়ে সেবা
                  প্রদানের উদ্দেশ্যে এই ওয়েবসাইটটি পরিচালনা করি। আপনি যদি আমাদের
                  পরিষেবাগুলি নিতে আগ্রহী হন তবে আমাদের শর্তাবলীর সাথে সম্মত
                  হওয়া বাধ্যতামূলক ৷
                </p>
              </div>
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    গোপনীয়তাঃ{" "}
                  </li>
                </ul>
                <p className="text-justify">
                  ব্যবহারকারীর ব্যক্তিগত তথ্য এবং ভূমিসেবা গ্রহণে প্রয়োজনীয়
                  কাগজপত্র সবকিছুই গোপন রাখা হয়। এ সকল তথ্য কোনো তৃতীয় ব্যক্তির
                  নিকট হস্তান্তর করা হবে না। অনলাইন ফর্ম সাবমিশন, একাউন্ট তথ্য
                  হালনাগাদ, সেবা অর্ডার এবং ব্যবহারকারীর অন্যান্য সংবেদনশীল
                  তথ্যগুলো সুরক্ষার ক্ষেত্রে সচেতনতা এবং নিরাপত্তা প্রদান করা
                  হবে।
                </p>
              </div>
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    সেবা প্রদানের সময়সীমাঃ{" "}
                  </li>
                </ul>
                <p className="text-justify">
                  যে কোন ভূমিসেবা গ্রহিতা পরামর্শ ফী প্রদানের ২৪ ঘন্টার মধ্যেই
                  পরামর্শক কর্তৃক সেবা প্রদান কার্যক্রম শুরু হবে। একটি সমস্যা কত
                  দিনের মধ্যে সম্পূর্ণ সমাধান হবে তা উক্ত সমস্যার ধরনের উপর
                  নির্ভর করে থাকে।
                </p>
              </div>
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    রিফান্ড নীতিঃ{" "}
                  </li>
                </ul>
                <p className="text-justify">
                  আপনি ভূমিসেবার সাথে যোগাযোগ করে সেবা গ্রহণের উদেশ্যে পরিশোধিত
                  মূল্য ফেরতের জন্য আবেদন করতে পারেন । নিয়ম এবং শর্তাবলী অনুসারে
                  বিবেচনার প্রেক্ষিতে পরিশোধিত পরামর্শ ফী ফেরত যোগ্য ।
                </p>
              </div>
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    বাতিলকরন নীতিঃ
                  </li>
                </ul>
                <p className="text-justify">
                  ভূমিসেবা অনলাইন প্লাটফর্মে নাগরিক কর্তৃক প্রেরিত কোন আবেদন
                  বাতিল করা হয়না।
                </p>
              </div>
              <div>
                <ul className="list-disc  marker:text-green1">
                  <li className="text-16 leading-[18px] lg:text-18 lg:leading-[23.8px] font-bold">
                    নিষ্পন্ন পরবর্তী সেবাঃ{" "}
                  </li>
                </ul>
                <p className="text-justify">
                  একটি পরামর্শ নিষ্পন্ন হওয়ার পরবর্তী ৭২ ঘন্টা পর্যন্ত সম্মানিত
                  ভূমিসেবা গ্রহিতা পরামর্শকের সাথে উক্ত বিষয় সম্পর্কিত আলোচনা
                  করতে পারবেন।
                </p>
              </div>
            </div>
            <div className="lg:mx-4 flex justify-center items-center">
              <Image
                className="w-[8em] lg:w-[70em]"
                src={relativeImagePath("policy.png")}
                height={1000}
                width={1000}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}