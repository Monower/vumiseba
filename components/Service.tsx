import Card from "@/models/Card";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ISList, IServices } from "../models/Services";
import { API_URL } from "@/config";

interface ServiceProps {
  data: ISList;
}

const Service = ({ data }: ServiceProps) => {
  const [imageError, setImageError] = useState({ id: -1, error: false });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      router.push(
        `/consultants?services=${data.id}&servicename=${data.title}&offset=0`
      );
    }
  };

  return (
    <>
      <div onClick={handleSubmit} className="group h-[20vh] cursor-pointer lg:h-[22.9vh]  w-[41%] lg:w-[22%] [perspective:1000px] m-2 lg:m-4">
        <div className="relative h-full w-full rounded-md shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-green1 hover:border-red-400">
          {/* front */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col space-y-3 justify-center items-center">
              <Image src={
              imageError.id == data.id
                ? "/images/clips/img4.png"
                : API_URL + data.service_image
            } 
            width={50} 
            height={50} 
            alt={"img"} 
            onLoadingComplete={(result) => {
              if (result.naturalWidth === 0)
                setImageError({ id: data.id, error: true });
            }}
            onError={(event) => setImageError({ id: data.id, error: true })}
            onEmptied={() => setImageError({ id: data.id, error: true })}
            
            />
              <h3 className="font-medium text-12 lg:text-20 text-center">{data.title}</h3>
            </div>
          </div>
          {/* back */}
          <div className="absolute inset-0 h-full w-full rounded-md bg-green1 px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2 lg:px-4">
              <p className="text-slate-50 font-medium text-12 lg:text-14 leading-4">{data.description}</p>
              <button className="bg-red-600 px-1 lg:px-3 py-1 rounded-full text-slate-50 font-medium text-12 lg:text-14 leading-4">পরামর্শকদের তালিকা</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
