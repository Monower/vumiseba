import React, { useState } from "react";
import Star from "../../components/Star";
import { fetchReview } from "../../http";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { fetchSingleUser } from "../../http";
import { Review_Limit, API_URL } from "@/config/index";
import Full_Page_Review from "../../components/Full_Page_Review";
import { ADMIN_PANEL_URL } from "@/config/index";
import Review from '@/components/review/Review'
import { num_en_to_bn } from "@/helper/helper";

const Home = ({ data, user }) => {
  const router = useRouter();

  const qvalues = router.query;

  const [reviews, setReviews] = useState(data?.data?.list);
  const [review, setReview] = useState();
  const [hasMore, setHasMore] = useState(false);
  const [imageError, setImageError] = useState({ id: -1, error: false });
  const [imgError, setImgError] = useState({ id: -1, error: false });
  const [dataError, setdataError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [exslice, setExslice] = useState(9);

  const getReviews = async () => {
    setLoading(true);

    const { data } = await fetchReview(qvalues.slug, offset);

    if (data) {
      setLoading(false);
    }

    if (data?.error == "404" || data?.data?.list?.length == 0) {
      setdataError(true);
    }
    if (data?.data?.list?.length < Review_Limit) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    data?.data?.list?.map((item) => setReviews((rev) => [...rev, item]));

    setOffset(offset + Review_Limit);
  };


  return (
    <Layout>
      <section className="container mx-auto px-[2vw]">
        <div className="relative pt-5 overflow-hidden mb-4">
          <div className=" absolute container mx-auto  hidden md:block top-[-40px] left-0">
            <div className="bg-[#E8F6DE] w-[216px] h-[194px] rounded-full"></div>
          </div>
          <div className=" absolute container mx-auto md:flex hidden  md:justify-end top-[120px] right-0">
            <div className="bg-[#E8F6DE] w-[288px] h-[259px] rounded-full"></div>
          </div>

          <div className="relative grid sm:grid-cols-4 p-2 sm:p-6">
            <div className="flex md:pl-[72px]">
              <div className="md:shrink-0 w-[6.1875em] lg:w-[11.25em]">
                <Image
                  src={
                    user.data[0]?.profile_image == null
                      ? "/images/profile.png"
                      : API_URL + user.data[0]?.profile_image
                  }
                  width={180}
                  height={100}
                  className={`w-[6.1875em] lg:w-[11.25em] h-[5.8125em] lg:h-[10.0625em] border border-green1`}
                  alt={"img"}
                />
              </div>
              <div className="ml-2 md:ml-9 mt-auto mb-auto">
                <div className="flex items-center pb-[8px] lg:pb-[19px] min-[1100px]:w-[22em]">
                  <h3 className="text-24 leading-[27.58px] lg:text-32 lg:leading-[41.36px] ">
                    {user.data[0]?.name}
                  </h3>

                  {user.data[0]?.active_status === 1 && (
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
                    {user.data[0]?.current_profession}
                  </p>
                  <p className="text-14 leading-[16.09px] lg:text-20 lg:leading-[22.98px]">
                    {user.data[0]?.experiances[0].institute_name}
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
                  <h1 className="text-[1.25em] lg:text-5xl text-red-600">
                    ফ্রী
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
        <div className="border border-[#DFDFDF] rounded-lg p-5 mb-5">
          <div className="w-24">
            <Link
              href={`/user/${user.data[0]?.id}`}
              className="flex items-center space-x-2 text-green1 hover:underline cursor-pointer "
            >
              <span>
                ফিরে যান
              </span>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 0.367188L0 6.61719V7.50094L6.25 13.7509L7.13375 12.8672L1.95125 7.68344H15V6.43344H1.95L7.135 1.25094L6.25 0.367188Z"
                    fill="#017F28"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <h3 className="font-medium text-green1 text-16 leading-[18.38px] lg:text-24 lg:leading-[27.58px] text-center">
            সেবার রিভিউ
            <span className="pl-2">
              (
                {
                  num_en_to_bn(reviews?.length)
                }
              )
            </span>
          </h3>
          <div className="flex flex-wrap justify-center">
            {
              reviews
              .slice(0, exslice)
              ?.map((item,index)=>(
                  <div 
                    key={index}
                    className="m-2 lg:m-4 w-full lg:w-[30%]"
                  >
                      <Review
                        image={item?.profile_image}
                        title={item?.citizen_name}
                        stars={item?.rating}
                        review={item?.citizen_review_comment}
                      />
                  </div>
              ))
            }
          </div>
          {reviews.length > 9 &&
            exslice <= reviews.length && (
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={() => setExslice(exslice + 3)}
                  className="bg-green1 text-white px-5 py-1 rounded-md"
                >
                  আরো
                </button>
              </div>
            )}
        </div>
      </section>
      {/* <section className="mx-auto pt-[75px] md:pt-[130px] py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden bg-[#e6f3ff]">
        <div className="container px-1 sm:px-4 mx-auto">
          <div className="text-left mb-2">
            <Link legacyBehavior href={`/user/${user.data[0]?.id}`}>
              <a className=" inline-block mb-1 text-xl font-heading font-medium underline hover:text-darkBlueGray-700">
                Go Back
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={
                imageError.id == user.data[0]?.id
                  ? "/images/profile.png"
                  : API_URL +
                    user.data[0]?.profile_image
              }
              width={80}
              height={80}
              alt={"img"}
              onLoadingComplete={(result) => {
                if (result.naturalWidth === 0)
                  setImageError({ id: user.data[0]?.id, error: true });
              }}
              onError={(event) =>
                setImageError({ id: user.data[0]?.id, error: true })
              }
              onEmptied={() =>
                setImageError({ id: user.data[0]?.id, error: true })
              }
            />

            <div className="font-bold">
              <p>{user.data[0]?.name}</p>
              <p className="">{user.data[0]?.type}</p>
              <p>{user.data[0]?.current_profession}</p>
              <div className="flex ml-[-3px]">
                <div className="mt-[3px]">
                  <Star stars={user.data[0]?.rates} />
                </div>
                <span className="ml-2 text-[15px] font-bold ">
                  {user.data[0]?.rates}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right sm:text-[20px]">
            <span className="inline-block font-heading font-bold text-gray-600">
              {data?.data?.totalCitizenRating} reviews
            </span>
          </div>

          {reviews?.length > 0 &&
            reviews?.map((item, index) => (
              <Full_Page_Review key={index} item={item} />
            ))}

          <div className="text-right ">
            {isLoading ? (
              <button
                disabled
                type="button"
                className="font-bold mt-4 py-2 px-5 mr-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
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
              hasMore && (
                <button
                  onClick={() => getReviews()}
                  className="mt-4 px-4 bg-sky-500 py-1 font-bold text-white"
                >
                  আরো দেখুন
                </button>
              )
            )}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { data: singleuser } = await fetchSingleUser(query);

  const { data: review } = await fetchReview(query.slug, 0);

  return {
    props: {
      data: review,
      user: singleuser,
    },
  };
}

export default Home;
