import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  Star  from "./Star";
import { AxiosResponse } from 'axios';
import { fetchReview } from '../http';
import Image from 'next/image'
import Link from 'next/link'
import  Popup  from "./Popup";
import type { GetServerSideProps, NextPage } from 'next';
import moment from "moment";
import {
    Root,
    Data,
    List

  } from '../models/Reviews';
import { API_URL } from "@/config";


  interface IPropTypes {
    item: List
  };


const Full_Page_Review : NextPage<IPropTypes> = ({ item }) => {


  const [imageError, setImageError] = useState({id:-1,error:false});

  


/* imageError.id == item.id ? "/images/profile.png" : API_URL+ item?.profile_image */

  return (
    <>

<div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div className="pt-3 pb-3 md:pb-1 px-4 bg-white bg-opacity-40">
        <div className="flex flex-wrap items-center">
          
<Image
          src={
            item?.profile_image == null
              ? "/images/profile.png"
              : API_URL + item?.profile_image
          }
          width={50}
          height={50}
          className="mr-6 w-20 "
          alt={'img'}
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) setImageError({id:item.id,error:true})
        }}
        onError={(event) => setImageError({id:item.id,error:true})}
        onEmptied={() => setImageError({id:item.id,error:true})}
        />
        
          <div className="flex flex-col">
            
          <h4 className="w-full md:w-auto text-xl font-heading font-medium">
          {item?.citizen_name || 'null'}
          </h4>
       
          <div className="flex">
          <div className="mt-[3px]">
             <Star stars={ item?.rating   || '0'
          } />
          </div>
          <span className="ml-2 text-[15px] font-bold ">
          {
             item?.rating   || '0'
          }
          </span>
          </div>

         

          </div>


          <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>

      

    


        </div>
      </div>
      <div className="px-4 overflow-hidden md:px-6 pt-4 bg-white">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6 md:mb-0 height-[50px]">
            <p className="mb-8 text-darkBlueGray-400 leading-loose font-bold text-[15px]">
              
              
            {
             item?.citizen_review_comment   || 'No Comment'
            }
              
            </p>
            
           
          </div>
          {/* <div className="w-full md:w-1/3 text-right">
            <p className="mb-8 font-bold text-gray-500 text-[14px]">

              Added { moment(item?.created_at).format("MMM Do YYYY")}
              
              </p>
          </div> */}
        </div>
      </div>
    </div>

    </>
  );
};

export default Full_Page_Review;
