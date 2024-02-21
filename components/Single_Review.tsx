import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  Star  from "./Star";
import { AxiosResponse } from 'axios';
import { fetchReview } from '../http';
import Image from 'next/image'
import Link from 'next/link'
import  Popup  from "./Popup";
import type { GetServerSideProps, NextPage } from 'next';
import {
    Root,
    Data,
    List

  } from '../models/Reviews';
import { num_en_to_bn } from "@/helper/helper";
import { API_URL } from "@/config";

  interface IPropTypes {
    value: List
  };


const Single_Review : NextPage<IPropTypes> = ({ value }) => {


  const [review, setReview] = useState<List>();
  const [imageError, setImageError] = useState({id:-1,error:false});
  const [popup, setPopup] = useState(false);



  return (
    <>

<div className="flex justify-center">
 
 <div>
 <Image
          src={ value?.profile_image == null ? "/images/profile.png" : API_URL+value?.profile_image }
          className="w-[40px] h-[40px] rounded-full"
          width={50}
          height={50}
          alt={'img'}
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) setImageError({id:value.id,error:true})
        }}
        onError={(event) => setImageError({id:value.id,error:true})}
        onEmptied={() => setImageError({id:value.id,error:true})}
/>
 </div>


<div className="ml-4">
      <p className="text-[12px] leading-[13.79px] lg:text-[16px] lg:leading-[18.38px]">
        {value?.citizen_name || 'null'}
      </p>
      
      <div className="flex">

      <Star stars={value?.rating} />  
      <p className="ml-2 text-[14px] leading-[18.55px] lg:text-[14px] lg:leading-[18.55px] font-medium">
          {
            value?.rating ? num_en_to_bn(value?.rating) : '0'
          }
      </p>

      </div>

</div>   

  
</div>   
<div className="pt-4 text-[12px] leading-[13.79px] lg:text-[16px] lg:leading-[18.38px] pl-2 text-center">
  
  {value?.citizen_review_comment?.slice(0,70) || 'No Comment'}
      

  { value?.citizen_review_comment?.length > 70 &&
        <span  className="font-bold pt-1 text-[13px] text-center pl-2 text-sky-500">
            Show more
        </span>
  }

</div>  

    </>
  );
};

export default Single_Review;
