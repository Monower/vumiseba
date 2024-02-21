'use client'
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import CurdProps from "@/models/Card";
import { useLang } from "@/hooks";
import Contact from "@/components/Contact";
import { useRouter } from "next/router";

export default function Home() {
  const { LangInfo, HandleChange } = useLang();
  const { lang } = LangInfo;

  return (
    <Layout>
      <Image className="w-full" src={'/images/about_us_banner_image.png'} height={1000} width={1000} alt="img" />
      <section className="container mx-auto px-[4vw] lg:px-[2vw]">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center space-y-4 lg:space-y-0 lg:gap-12 pb-[39px] lg:pb-[55px]">
            <div className="w-full lg:w-[50%]">
              <Image className="w-full lg:w-[38.06vw]" src={'/images/aboutmanimage.png'} height={1000} width={1000} alt="img" />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col space-y-2.5">
              <h3 className="font-medium text-24 leading-[27.58px] lg:text-36 lg:leading-[41px] text-green1">আমাদের সম্পর্কে</h3>
              <p className="text-14 leading-[18.48px] lg:text-20 lg:leading-[26.4px]">ভূমিসেবা বাংলাদেশের একটি সর্বপ্রথম এবং সর্ববৃহৎ ডিজিটাল সেবাদানকারী অনলাইন প্লাটফর্ম। ভূমি সংক্রান্ত সকল সেবাকে একই প্লাটফর্মে আনা এবং সকল ধরনের ভূমি সমস্যার সুষ্ঠ সমাধান সহ মানসম্মত ভূমিসেবা নাগরিকের দ্বারপ্রান্তে সহজেই পৌঁছে দেয়া আমাদের মূল লক্ষ্য। ভূমি নিবন্ধন, নামজারি, ভূমি উন্নয়ন কর ও শুল্ক, ই-পর্চা, মিসকেস মামলা, দেওয়ানি মামলা, ভূমি রাজস্ব মামলা, খাস জমি এবং ভূমি জরিপ সহ সংশ্লিষ্ট সকল ধরনের ভূমিসেবা প্রদানের মাধ্যমে আমরা অত্যন্ত সফলতার সাথে গ্রাহকদের সেবা প্রদান করে আসছি।ভূমিসেবা জমি—জমা সংশ্লিষ্ট একটি সম্পূর্ণ ডিজিটাল অনলাইন প্লাটফর্ম যা গ্রাহকের প্রয়োজন বোঝে ও সমাধানকল্পে কাজ করে। ভূমিসেবা হলো এমন একটি প্ল্যাটফর্ম যেখানে পরামর্শদাতা ও পরামর্শ গ্রহীতার মধ্যে সুসম্পর্ক স্থাপনের মধ্য দিয়ে  পরামর্শগ্রহীতার সমস্যামূলক দিকটি চিহ্নিত
              করে তা সমাধান কল্পে তাকে সিদ্ধান্ত গ্রহনে সহায়তা করা। আমরা গ্রাহকের প্রয়োজনীয়তা সম্পর্কে জানতে প্রথমে গ্রাহকের সাথে সাক্ষাৎ করি অথবা অনলাইনে গ্রাহকের প্রয়োজন বুঝে সংশ্লিষ্ট পরামর্শক টিমের কাছে হস্তান্তর করি।</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-center lg:space-x-24 pb-[25px] lg:pb-[60px]">
            <div className="w-full lg:w-[50%]">
              <Image className="w-full lg:w-[44.58vw] rounded-3xl" src={'/images/6152022_general2_03.jpg'} height={1000} width={1000} alt="img" />
            </div>
            <div className="w-full lg:w-[50%]">
              <h3 className="font-medium text-24 leading-[27px] lg:text-36 lg:leading-[41px] text-green1">ভূমিসেবার উদ্দেশ্য</h3>
              <p className="font-medium text-14 leading-[21px] lg:text-20 lg:leading-[30px]">আমাদের উদ্দেশ্য ভূমিসেবা প্রদানের মাধ্যমে ভূমির মালিকানা ও পরিচালনা সহজ এবং কার্যকরী করা। আমরা সক্ষমতা, বিশ্বাস এবং দক্ষতার সাথে ভূমি সেবাপ্রার্থী নাগরিকদের উচ্চমানের সেবা প্রদান করার জন্য বদ্ধপরিকর। আমরা গ্রাহকদের প্রয়োজন সম্পর্কে আগে জানতে চাই এবং সেই অনুযায়ী উত্তরগুলো তৈরি করে অতি দ্রুততার সাথে সুস্পষ্টভাবে সেবা প্রদান করে থাকি।</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse space-y-4 lg:space-y-0 items-center justify-between lg:gap-12 pb-[25px] lg:pb-[81px]">
            <div className="w-full lg:w-[50%]">
              <Image className="w-full lg:w-[44.58vw] rounded-3xl" src={'/images/6152022_general2_031.jpg'} height={1000} width={1000} alt="img" />
            </div>
            <div className="w-full lg:w-[50%]">
              <h3 className="font-medium text-24 leading-[27px] lg:text-36 lg:leading-[41px] text-green1">ভূমিসেবার লক্ষ্য</h3>
              <p className="font-medium text-14 leading-[21px] lg:text-20 lg:leading-[30px]">আমাদের লক্ষ্য ভূমিসেবা প্রদানের মাধ্যমে ভূমি সংক্রান্ত সকল বাধা দূর করা। আমাদের এই প্লাটফর্মটির মাধ্যমে আমরা ভূমি সেবাকে সাধারণ জনগণের দ্বারপ্রান্তে পৌছে দিয়ে থাকি।</p>
            </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <h3 className="font-semibold text-24 leadin-[27px] lg:text-36 lg:leading-[41px] text-green1">ভূমিসেবার তথ্য চিত্র </h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4536.png'} height={1000} width={1000} alt="img" />
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4535.png'} height={1000} width={1000} alt="img" />
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4534.png'} height={1000} width={1000} alt="img" />
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4533.png'} height={1000} width={1000} alt="img" />
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4532.png'} height={1000} width={1000} alt="img" />
            <Image className="w-[45%] lg:w-[30%] m-2 lg:m-4 rounded-md" src={'/images/Rectangle4528.png'} height={1000} width={1000} alt="img" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
