import Layout from "@/components/Layout";
import SliderWithText from "@/components/SliderWithText";
import Slider2 from "@/components/Sliderv2";

export default function slidertest() {
  const review = [
    {
      user: "সাইফুজ্জামান চৌধুরী",
      image: "/images/consultant2.png",
      text: "ভূমিসেবা সিস্টেম টি জনগনের ভোগান্তি অনেক আংশে কমিয়ে এনেছে। আমি ভূমিসেবার অভিজ্ঞ কনসালটেন্ট  এর সাহায্যে  ভূমি উন্নয়ন কর পরিশোধ এবং দাখিলা সংরক্ষন করেছি খুবই অল্প সময়ে। ভূমিসেবা টিমকে ধন্যবাদ সাধারণ নাগরিকের পাশে থাকার জন্যে।",
    },
    {
      user: "এইচ এম নজরুল ইসলাম",
      image: "/images/consultant3.png",
      text: "ভূমিসেবা সিস্টেম টি ব্যবহারের মাধ্যমে আমি খুবই উপকৃত হয়েছি। পরিষেবাটি থেকে আমরা ভূমি সম্পর্কিত সকল ধরনের সমস্যার সমাধান পাচ্ছি অভিজ্ঞ পরামর্শকদের কাছ থেকে , যার ফলে আমার সময় অপচয় কম হচ্ছে এবং আমি একবারেই সঠিক সমাধান পাচ্ছি।",
    },
    {
      user: "মোঃ শিহাব খন্দকার",
      image: "/images/consultant6.png",
      text: "ভূমিসেবা সিস্টেম টি ব্যবহারের মাধ্যমে আমি খুবই উপকৃত হয়েছি। পরিষেবাটি থেকে আমরা ভূমি সম্পর্কিত সকল ধরনের সমস্যার সমাধান পাচ্ছি অভিজ্ঞ পরামর্শকদের কাছ থেকে , যার ফলে আমার সময় অপচয় কম হচ্ছে এবং আমি একবারেই সঠিক সমাধান পাচ্ছি।",
    },
    {
      user: "সজিব কুমার",
      image: "/images/consultant4.png",
      text: "ভূমিসেবাকে অসংখ্য ধন্যবাদ। ভূমিসেবার সাথে যুক্ত অভিজ্ঞ কনসালটেন্টগণ আন্তরিক সহযোগিতা আমাকে মুগ্ধ করেছে। বিভিন্ন দুর্নীতিবাজ কর্মচারীর জন্য সরকারের নানামুখী নাগরিক সেবা মুখ থুবড়ে পড়ছে। যার মধ্য থেকে ভূমিসেবা এখন নাগরিকের জন্যে আসার আলো",
    },
    {
      user: "রাসেদুজ্জমান রাসেল",
      image: "/images/consultant5.png",
      text: "জমি ক্রয় থেকে শুরু করে সম্পর্কিত সম্পূর্ণ সেবা আমি ভূমিসেবা থেকে গ্রহণ করেছি। সিস্টেম টি সাধারন নাগরিকের জন্যে শতভাগ নির্ভরযোগ্য। ভূমিসেবা থেকে সার্ভিস গ্রহণ করে আমি সন্তুষ্ট।",
    },
  ];

  const Fcadata = {
    images: [
      {
        image: "/images/photopart4.jpg",
        alt: "img5",
      },
      {
        image: "/images/photopart2.jpg",
        alt: "img3",
      },
      {
        image: "/images/photopart.jpg",
        alt: "img1",
      },
      {
        image: "/images/photopart1.jpg",
        alt: "img2",
      },

      {
        image: "/images/photopart3.jpg",
        alt: "img4",
      },
    ],
    heading: "আপনি কি নিষ্কন্টক জমি ক্রয়ের কথা ভাবছেন ?",
    para: "জমি ক্রয়ে মালিকানা যাচাই, রেকর্ড অর্থাৎ খতিয়ান, মৌজা, দাগ নম্বর এবং নকশা যাচাই করে জমি ক্রয় করতে এক্ষুনি রেজিস্ট্রেশন করে আমাদের ভূমি বিশেষজ্ঞদের পরামর্শ নিন।",
    search: true,
    tags: false,
    buttons: [
      {
        text: "পরামর্শকদের তালিকা",
        url: "#",
      },
      {
        text: "ভূমিসেবা সম্পর্কে",
        url: "#",
      },
    ],
  };

  return (
    <>
      <Layout>
        <Slider2 data={Fcadata} />
      </Layout>
    </>
  );
}
