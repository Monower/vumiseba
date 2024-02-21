"use client";
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import moment from "moment";
import Link from "next/link";
import Layout from "@/components/Layout";
import Star from "../../components/Star";
import { useRouter } from "next/router";
import Reviews from "../../components/Reviews";
import Image from "next/image";
import { fetchSingleUser } from "../../http";
import { num_en_to_bn, dateFormat, ymdTomdy } from "@/helper/helper";
import { API_URL, ADMIN_PANEL_URL } from "@/config";

/* interface IPropTypes {
  data: IUser[];
  error: string;
} */

export async function getServerSideProps({ query }) {
  const { data: data } = await fetchSingleUser(query);

  return {
    props: data,
  };
}

const User = ({ data, error }) => {

  const [exslice, setExslice] = useState(2);
  const [imageError, setImageError] = useState(false);

  const router = useRouter();
  // var SINGLE_USER: IUser;

  // dateFormat(data[0].experiances[0].end_date)
  if (data?.length > 0) {
    var SINGLE_USER = data[0];
  }
  useEffect(() => {
    if (error == "404" || data?.length == 0 || data == undefined) {
      router.push("/404");
    }
  },[]);

  return (
    <Layout>
      <section className="container mx-auto px-[2vw] max-[1300px]:px-[6vw]">
        <div className="rounded-tr-lg rounded-bl-lg md:h-[290px]  overflow-hidden">
          <div className="relative pt-5">
            <div className=" absolute container mx-auto  hidden md:block top-[-40px] left-[-40px]">
              <div className="bg-[#E8F6DE] w-[216px] h-[194px] rounded-full"></div>
            </div>
            <div className=" absolute container mx-auto md:flex hidden  md:justify-end top-[120px] left-[100px]">
              <div className="bg-[#E8F6DE] w-[288px] h-[259px] rounded-full"></div>
            </div>

            <div className="relative grid sm:grid-cols-4 p-2 sm:p-6">
              <div className="flex md:pl-[72px]">
                <div className="md:shrink-0 w-[6.1875em] lg:w-[11.25em]">
                  <Image
                    src={
                      imageError
                        ? "/images/profile.png"
                        : API_URL + SINGLE_USER?.profile_image
                    }
                    width={180}
                    height={100}
                    className={`w-[6.1875em] lg:w-[11.25em] h-[5.8125em] lg:h-[10.0625em] border border-green1`}
                    alt={"img"}
                    onLoadingComplete={(result) => {
                      if (result.naturalWidth === 0) setImageError(true);
                    }}
                    onError={(event) => setImageError(true)}
                    onEmptied={() => setImageError(true)}
                  />
                </div>
                <div className="ml-2 md:ml-9 mt-auto mb-auto">
                  <div className="flex items-center pb-[8px] lg:pb-[19px] min-[1100px]:w-[22em]">
                    <h3 className="text-24 leading-[27.58px] lg:text-32 lg:leading-[41.36px] ">
                      {SINGLE_USER?.name}
                    </h3>

                    {SINGLE_USER?.active_status === 1 && (
                      <div className="flex justify-center items-center pt-1 lg:bg-[#E8F6DE] px-2 lg:px-3 lg:py-1 rounded-full lg:ml-4">
                        <i className="fa-solid fa-circle text-xs text-[#4EC200]"></i>
                        <p className="pl-1 font-medium text-[10px] leading-[11.49[px] lg:text-[15px] lg:leading-[17.24px]">
                          সক্রিয়
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-14 leading-[16.09px] lg:text-20 lg:leading-[22.98px] pb-[4px] lg:pb-[19px]">
                      {SINGLE_USER?.current_profession}
                    </p>
                    <p className="text-14 leading-[16.09px] lg:text-20 lg:leading-[22.98px]">
                      {SINGLE_USER?.experiances[0].institute_name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto mb-auto lg:text-center pt-6 lg:pt-0 pb-4 sm:pb-0 flex items-center lg:flex-col lg:pl-[25em] min-[1300px]:pl-0 min-[1300px]:ml-[25em] lg:w-[36em] bg-[#F4FFEC] lg:bg-transparent">
                {/* <div className="pr-10 lg:pr-0 lg:pb-[13px]">
                  <p className="text-[14px] leading-[16.09px] lg:text-20 lg:leading-[22.98px] pb-[8px] ">
                    পরামর্শক ফি
                  </p>
                  <div className="flex justify-center">
                    <h1 className="text-[14px] leading-[16.09px] lg:text-20 lg:leading-[22.98px] flex items-center space-x-2 font-bold">
                      <span>{
                        num_en_to_bn(SINGLE_USER?.fee)}</span>
                      <span>টাকা</span>
                    </h1>
                  </div>
                </div> */}
                <Link
                  href={ADMIN_PANEL_URL + `/login`}
                  target="_blank"
                  className="py-[10px] md:py-2 px-[34px] md:px-8 rounded-full text-white bg-[#017F28] text-[16px] leading-[16.09px] lg:text-20 lg:leading-[22.98px]"
                >
                  পরামর্শ নিন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 container mx-auto px-[2vw] max-[1300px]:px-[6vw]">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2 lg:border border-solid border-[#DFDFDF] rounded-xl p-2 sm:p-6">
            <h3 className="text-[16px] leading-[18.38px] lg:text-[24px] lg:leading-[27.58px] text-[#017F28] pb-[8px]">
              সাধারণ তথ্য
            </h3>
            <p className="text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] pb-[8px]">
              {SINGLE_USER?.current_profession}
            </p>
            <p className="text-[14px] leading-[21.06px] lg:text-[16px] lg:leading-[24.06px] pt-2">
              {SINGLE_USER?.general_info}
            </p>
          </div>
          <div className="lg:border border-solid border-[#DFDFDF] rounded-xl p-2 sm:p-9 ">
            <div className="container flex justify-between">
              <div>
                <h3 className="text-[16px] leading-[18.38px] lg:text-[24px] lg:leading-[27.58px] text-[#017F28]">
                  অভিজ্ঞতা
                </h3>
                <p className="text-[14px] lg:text-[15px] leading-[16.09px] lg:leading-[19.88px] font-medium">
                  {num_en_to_bn(SINGLE_USER?.years_of_experience)} বছর
                </p>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[24px] leading-[18.38px] lg:leading-[27.58px] text-[#017F28]">
                  রেটিং ({num_en_to_bn(SINGLE_USER?.totalRating)})
                </h3>

                <div className="flex items-center flex-wrap">
                  <Star stars={SINGLE_USER?.rates} />

                  <p className="ml-2 text-[14px] leading-[16.09px]">
                    {num_en_to_bn(SINGLE_USER?.rates)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-4 md:mb-0">
              <h3 className="text-[16px] lg:text-[24px] leading-[18.38px] lg:leading-[27.58px] text-[#017F28] pb-[4px] lg:pb-[10px]">
                বিশেষত্ব
              </h3>

              {SINGLE_USER?.services.map((item, index) => (
                <button
                  key={index}
                  className="mb-1 mr-2 py-1 px-3 rounded-full text-[12px] lg:text-[16px] leading-[13.79px] lg:leading-[18.38px] bg-[#E8F6DE]"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 w-full container mx-auto px-[2vw] max-[1300px]:px-[6vw]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-2 lg:border border-solid border-[#DFDFDF] rounded-lg lg:pt-6 px-2 sm:px-5 md:px-9">
              <h3 className="text-[16px] lg:text-[24px] leading-[18.38px] lg:leading-[27.58px] font-medium text-[#017F28]">
                সংক্ষিপ্ত বিবরণ
              </h3>
              <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                <div>
                  <h3 className="text-[14px] lg:text-[20px] leading-[16.09px] lg:leading-[22.98px] font-medium">
                    সেবা প্রদান
                  </h3>
                  <p className="text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] font-medium text-[#5E5E5E]">
                    {num_en_to_bn(SINGLE_USER?.consultationCount ?? 0)}
                  </p>
                </div>
                <div className="pl-2 md:pl-12">
                  <h3 className="text-[14px] lg:text-[20px] leading-[16.09px] lg:leading-[22.98px] font-medium">
                    রেটিং ({num_en_to_bn(SINGLE_USER?.totalRating)})
                  </h3>

                  <div className="flex items-center flex-wrap">
                    <Star stars={SINGLE_USER?.rates} />

                    <p className="ml-2 text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] font-medium text-[#5E5E5E]">
                      {num_en_to_bn(SINGLE_USER?.rates)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                <div>
                  <h3 className=" text-[14px] lg:text-[20px] leading-[16.09px] lg:leading-[22.98px] font-medium">
                    পরামর্শক কোড
                  </h3>
                  <p className=" text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] font-medium text-[#5E5E5E]">
                    {SINGLE_USER?.code
                      ? num_en_to_bn(SINGLE_USER?.code)
                      : "No Data"}
                  </p>
                </div>
                <div className="pl-3 md:pl-12">
                  <h3 className="text-[14px] lg:text-[20px] leading-[16.09px] lg:leading-[22.98px] font-medium">
                    যোগদান সময়
                  </h3>
                  <p className=" text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] font-medium text-[#5E5E5E]">
                    {moment(SINGLE_USER?.created_at).format("MMM Do YYYY")}
                    {/* {
                      dateFormat(ymdTomdy(SINGLE_USER?.created_at))
                    } */}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 lg:border border-solid border-[#DFDFDF] rounded-lg lg:pt-6 px-3 sm:px-9">
              <h3 className="text-[16px] leading-[18.38px] lg:text-[24px] lg:leading-[27.58px] text-[#017F28]">
                অভিজ্ঞতা
              </h3>
              <div className="w-full pb-6 sm:w-[90%] mt-7">
                <ol className="relative border-l-4 border-PrimaryColor ">
                  {SINGLE_USER?.experiances
                    .slice(0, exslice)
                    .map((item, index) => (
                      <li key={index} className="ml-3">
                        <span className="absolute flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 bg-PrimaryColor rounded-full left-[-8px] sm:left-[-10px] "></span>
                        <h3 className="mb-1 text-[14px] leading-[16.09px] lg:text-[20px] lg:leading-[22.98px] font-medium pb-[8px]">
                          কর্মস্থল
                        </h3>
                        <div className="flex flex-col lg:flex-row lg:justify-between">
                          <div>
                            <p className="text-[14px] leading-[16.09px] lg:text-[16px] lg:leading-[18.38px]">
                              {item?.institute_name}
                            </p>
                            <p className="mb-4 text-[14px] leading-[16.09px] lg:text-[16px] lg:leading-[18.38px] font-bold">
                              পদবী: {item?.designation}
                            </p>
                          </div>
                          <div className="flex flex-col lg:justify-end lg:items-end">
                            <p className="text-[14px] leading-[16.09px] lg:text-[16px] lg:leading-[18.38px] font-bold">
                              কর্মসংস্থানের সময়কাল
                            </p>
                            <p className="mb-4 text-[14px] leading-[16.09px] lg:text-[16px] lg:leading-[18.38px]">
                              {dateFormat(item?.start_date)} -
                              {dateFormat(item?.end_date)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
              {SINGLE_USER?.experiances.length > 2 &&
                exslice! <= SINGLE_USER?.experiances.length && (
                  <div className="flex justify-center items-center mb-2">
                    <button
                      onClick={() => setExslice(exslice + 2)}
                      className="bg-green1 text-white px-5 py-1 rounded-md"
                    >
                      আরো
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-8 w-full container mx-auto px-[2vw] max-[1300px]:px-[6vw]">
        <div className="container lg:border border-solid border-[#DFDFDF] rounded-lg mx-auto">
          <div className="text-center my-6">
            <h3 className="text-[16px] leading-[18.38px] lg:text-[24px] lg:leading-[27.58px] font-medium text-[#017F28]">
              সেরা রিভিউ
            </h3>
          </div>
          <Reviews id={SINGLE_USER?.id} />
        </div>
      </section>
    </Layout>
  );
};

export default User;
