'use client';

import React, { useState } from "react";
import Image from "next/image";
import { API_URL } from "@/config";
import Star from "../Star";
import Popup from "../Popup";



const Review = ({image,title,stars,review}) => {
    const [popup, setPopup] = useState(false);
    const data = {
        profile_image: image,
        citizen_name: title,
        rating: stars,
        citizen_review_comment: review
    }
    return (<>
        {popup && (
            <div
            onClick={() => setPopup(false)}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#6464642d] "
            ></div>
        )}
        <div onClick={() => setPopup(true)} className="border p-3 overflow-hidden flex flex-col items-center rounded-md cursor-pointer">
            <div className="flex items-center space-x-5 pb-[7px]">
                <div>
                    <Image
                        src={
                            image == null
                                ? "/images/profile.png"
                                : API_URL + image
                        }
                        className="w-[3em] h-[3em] rounded-full"
                        height={1000}
                        width={1000}
                        alt="image"
                    />
                </div>
                <div className="flex flex-col">
                    <p>{title}</p>
                    <div className="flex items-center space-x-1">
                        <Star
                            stars={stars}
                        />
                        <span>
                            {stars}
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-center">
                {
                    review?.length > 40
                        ? review?.substring(0, 40) + "..."
                        : review
                }
            </p>
        </div>
        {popup && (
            <div onClick={() => setPopup(false)}>
                { <Popup data={data} />}
            </div>
        )}
    </>)
};

export default Review;