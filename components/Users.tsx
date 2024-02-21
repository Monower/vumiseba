import React, { useEffect, useState } from "react";
import User from "@/models/User";
import Link from "next/link";
import type { GetServerSideProps, NextPage } from "next";
import Star from "../components/Star";
import Image from "next/image";
import { IUser } from "../models/Filter";
import { num_en_to_bn } from "@/helper/helper";
import { API_URL } from "@/config";
import { relativeImagePath } from "@/helper/helper";

interface IPropTypes {
  values: IUser;
}

const Users = ({ values }) => {
  const [imageError, setImageError] = useState({ id: -1, error: false });
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  
  return (
    <>
      <Link className="pb-5 flex space-x-12 bg-slate-50 shadow-sm shadow-gray-400 hover:shadow-[#08bd38] font-medium bg-gradient-to-b from-green-100 to-transparent hover:bg-gradient-to-t transition-all duration-700" href={{pathname: '/user/[id]',query: {id: values.id}}} shallow>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between lg:w-full">
            <div className="flex space-x-5 px-4 lg:w-[70%]">
              <div className="w-[22%] overflow-hidden">
                <Image className="h-[5.0625em] md:h-[10em]" src={values?.profile_image == null ? relativeImagePath('profile.png') : API_URL + values?.profile_image} height={1000} width={1000} alt="images" />
              </div>
              <div className="w-full">
                <div className="flex justify-start items-start">
                  <h3 className="text-16 lg:text-24 font-bold">{values?.name}</h3>
                </div>

                <p className="text-12 lg:text-18 font-bold flex items-center space-x-1">
                  <span>
                    পরামর্শদাতা
                  </span>
                  {values?.active_status == 1 && <div className="flex items-center">
                    <i className="fa-solid fa-circle text-xs text-[#4EC200]"></i>
                    <p className="block text-paragrapSize pl-1 font-bold">সক্রিয়</p>
                  </div>}
                </p>
                <p className="text-12 lg:text-18 lg:font-bold">বর্তমান পেশাঃ <span className="font-normal">{values?.current_profession}</span></p>
                <p className="text-12 lg:text-18 lg:font-bold">সেবা প্রদান করেছেনঃ <span>{num_en_to_bn(values?.consultationCount)} টি</span></p>
                {/* <p className="text-12 lg:text-18 lg:font-bold">সেবা প্রদানের ফিঃ <span>{num_en_to_bn(values?.fee)} টাকা</span></p> */}
                {/* <p className="font-medium text-14 lg:text-16 lg:pt-[22px] lg:pb-[6px] w-full text-right lg:text-left text-green1">বিশেষত্ব</p>
                <div className="flex flex-wrap justify-end lg:justify-start">
                  {
                    values?.service_list?.slice(0,(values.service_list.length < 4 ? values.service_list.length : 4))?.map((data, index) => (
                      <span key={index} className="bg-[#d5f5f6] text-12 lg:text-18 lg:font-medium p-1 lg:px-2 lg:m-1 rounded-full">{data?.title}</span>

                    ))
                  }
                  {
                    values.service_list.length < 4 ? '' : <span className="lg:mt-3 font-bold text-20">. . .</span>
                  }
                </div> */}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-between lg:justify-end lg:space-x-7 lg:pr-4 px-4 lg:px-0 lg:w-[30%]">
              {/* <div className="flex items-end lg:justify-end lg:w-[8em]">
                <div className="pb-2 flex lg:flex-col space-x-2 lg:space-x-0 items-center lg:items-end">
                  <p className="font-medium text-14 lg:text-18 text-green1">অভিজ্ঞতা</p>
                  <p className="text-12 lg:text-18 font-bold">{num_en_to_bn(values?.years_of_experience)} (বছর)</p>
                </div>
              </div> */}
              <div className="flex flex-col space-y-2 lg:items-end  lg:justify-end">
                <div className="flex flex-col items-start lg:items-end">
                  <p className="font-bold text-12 lg:text-18">কর্মস্থলঃ</p>
                  <p className="text-right text-14 lg:text-18 font-bold">{
                    values?.experiance_latest?.institute_name
                  }</p>
                </div>
                <p className="font-bold text-12 lg:text-18">অভিজ্ঞতাঃ <span>{num_en_to_bn(values?.years_of_experience)}</span></p>
                <div className="flex flex-col lg:items-end">
                  <p className="font-bold text-12 lg:text-20">রেটিং ({num_en_to_bn(values?.totalRating)})</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={
                            index <= (hover || Number(values?.rates))
                              ? "text-[25px] text-yellow-400 cursor-not-allowed"
                              : "text-[25px] text-gray-300 cursor-not-allowed"
                          }
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                    <p>{num_en_to_bn(values?.rates)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 lg:items-center px-4">
            <p className="text-12 lg:text-18 lg:font-bold">বিশেষত্বঃ </p>
            <div className="flex flex-wrap">
              {
                values?.service_list?.slice(0,(values.service_list.length < 4 ? values.service_list.length : 4))?.map((data, index) => (
                  <span key={index} className="bg-[#d5f5f6] text-12 lg:text-18 lg:font-medium p-1 lg:px-2 lg:m-1 rounded-full font-bold">{data?.title}</span>

                ))
              }
              {
                values.service_list.length < 4 ? '' : <span className="lg:mt-3 font-bold text-20">. . .</span>
              }
            </div>

          </div>
        </div>
        {/*         <div className="hidden justify-center items-center bg-[#DCFFC0] w-[40%]">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-16 lg:text-24">২৫০ টাকা</h3>
              <span className="text-12 lg:text-14 text-[#828282] font-light">(সংযুক্ত ভ্যাট)</span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <p className="text-12 lg:text-15">প্রতি পরামর্শ</p>
              <span className="text-green1"><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
          </div>
        </div> */}
      </Link>
    </>
  );
};

export default Users;
