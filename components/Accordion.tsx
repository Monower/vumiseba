import Image from "next/image";
import React, { useState,useRef } from "react";
import { IFaq } from "../models/Faq";
import { useRouter } from "next/router";
import { API_URL } from "@/config";

interface UserProps {
  values: IFaq[];
}

const Accordion = ({ values }: UserProps) => {
  const ans = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const route = useRouter();

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="flex flex-col space-y-2.5"
    >

      {values?.slice(0,(route.pathname == '/home' || route.pathname == '/consultant' ? 4 : values.length))?.map((item, index: number) => (
        <div key={index}>
          <h2
            onClick={() => handleToggle(index)} key={index}
            ref={ans}
            id={`accordion-collapse-heading-` + index}
            className={`drop-shadow-xl`}
          >
            <button
              type="button"
              className={
                `group flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-md ` +
                (activeIndex === index
                  ? "bg-green1 text-slate-50"
                  : "bg-slate-50 text-slate-900")
              }
              data-accordion-target={`#accordion-collapse-body-` + index}
              aria-expanded="false"
              aria-controls={`accordion-collapse-body-` + index}
            >
              <span className="font-medium text-12 leading-[13.79px] lg:text-20 lg:leading-[20px]">
                {item.question}
              </span>
              <svg
                className={
                  `w-4 h-4 shrink-0 ` +
                  (activeIndex === index ? "rotate-45" : "rotate-0")
                }
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-` + index}
            className={activeIndex === index ? "" : "hidden"}
            aria-labelledby={`accordion-collapse-heading-` + index}
          >
            {/* ${item.answer_image ? 'flex justify-around space-x-4' : ''} */}
            <div className={`p-5 rounded-md bg-slate-50`}>
{/*               {item.answer_image && (
                <div className="w-[30%] flex justify-center items-center border">
                  <Image
                    className="w-[10vw]"
                    src={
                      imageError
                        ? "/images/profile.png"
                        : API_URL +
                          item.answer_image
                    }
                    onLoadingComplete={(result) => {
                      if (result.naturalWidth === 0) setImageError(true);
                    }}
                    onError={(event) => setImageError(true)}
                    onEmptied={() => setImageError(true)}
                    height={1000}
                    width={1000}
                    alt="img"
                  />
                </div>
              )} */}
              <p className="mb-2 text-12 lg:text-16">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
