import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Star from "../components/Star";
import { AxiosResponse } from "axios";
import { fetchReview } from "../http";
import Image from "next/image";
import Link from "next/link";
import Popup from "../components/Popup";
import Single_Review from "../components/Single_Review";
import { API_URL, Review_Limit } from "@/config/index";
import { Root, Data, List } from "../models/Reviews";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState<List[]>([]);
  const [review, setReview] = useState<List>();
  const [hasMore, setHasMore] = useState(true);
  const [imageError, setImageError] = useState({ id: -1, error: false });
  const [dataError, setdataError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(0);

  const setData = async (item) => {
    setPopup(true);
    setReview(item);
  };

  const getReviews = async () => {
    setLoading(true);

    const { data } = await fetchReview(id, offset);
    if (data) {
      setLoading(false);
    }
    if (data?.error == "404" || data?.data?.list?.length == 0) {
      setdataError(true);
    }
    data?.data?.list?.map((item) => setReviews((rev) => [...rev, item]));
    setHasMore(false);
    setOffset(offset + 1);
  };

  

  return (
    <>
      {popup && (
        <div
          onClick={() => setPopup(false)}
          className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#6464642d] "
        ></div>
      )}

      {!dataError ? (
        <InfiniteScroll
          style={{ overflow: "hidden", width: "100%" }}
          dataLength={reviews?.length}
          next={() => getReviews()}
          hasMore={hasMore}
          scrollThreshold="73%"
          loader={
            <div className="w-full flex justify-around pb-10">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          }
          endMessage={""}
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-10">
            {reviews.length > 0 &&
              reviews?.slice(0,8)?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setData(item)}
                  className="flex flex-col justify-around flex-wrap py-4 mx-1 md:mx-3 border border-solid border-[#DFDFDF] rounded-lg"
                >
                  <Single_Review value={item} />
                </div>
              ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="w-full flex justify-around pb-10">
          <h1 className="font-bold text-[15px]">কোন রিভিউ নেই</h1>
        </div>
      )}

      {popup && (
        <div onClick={() => setPopup(false)}>
          {review && <Popup data={review} />}
        </div>
      )}

      <section className="text-center mb-10">
        {isLoading ? (
          <button
            disabled
            type="button"
            className="font-bold py-2.5 px-5 mr-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...
          </button>
        ) : (
          !dataError &&
          reviews.length >= Review_Limit && (
            <Link legacyBehavior href={`/reviews/${id}`}>
              <button className="text-PrimaryColor py-2 px-5  border border-solid border-PrimaryColor rounded font-NotoSansBengali font-bold text-paragrapSize leading-6 ">
                আরো দেখুন
              </button>
            </Link>
          )
        )}
      </section>
    </>
  );
};

export default Reviews;
