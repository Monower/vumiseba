import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import Star from "../components/Star";
import Image from "next/image";
import type { GetServerSideProps, NextPage } from "next";
import { Root, Data, List } from "../models/Reviews";
import { API_URL } from "@/config";

interface IPropTypes {
  data?: List;
}

const Popup: NextPage<IPropTypes> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="fixed top-[25%] left-[1%] sm:left-[10%] md:left-[18%] lg:left-[27%] w-[98%] sm:w-[600px] text-center bg-white p-2 sm:p-4 shadow-lg rounded mx-auto">
      <div className="flex flex-col flex-wrap py-4 mx-1 sm:mt-4 sm:mb-4 md:mx-3 border border-solid border-[#DFDFDF] rounded-lg">
        <div className="flex justify-left ml-2">
          <div>
            <Image
              src={
                data?.profile_image == null
                  ? "/images/profile.png"
                  : API_URL + data?.profile_image
              }
              width={50}
              height={50}
              alt={"img"}
              onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) setImageError(true);
              }}
              onError={(event) => setImageError(true)}
              onEmptied={() => setImageError(true)}
            />
          </div>

          <div className="ml-2 flex flex-col text-left">
            <p className="font-semibold leading-6">{data?.citizen_name}</p>

            <div className="flex ">
              <Star stars={data?.rating} />
              <p className="ml-2 font-bold dark:text-gray-400 leading-[15px]">
                {data?.rating || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="font-bold pt-4 text-[13px] text-left ml-2">
          {data?.citizen_review_comment || "No Comment"}
        </div>
      </div>
    </div>
  );
};

export default Popup;
