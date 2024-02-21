"use client";
import React, { useEffect, useState, useRef } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Users from "@/components/Users";
import { fetchServices, getAllConsultants } from "../http";
import { num_en_to_bn, ucFirst } from "@/helper/helper";
import { t } from "@/helper/lanBangla";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchPage = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [allData, setAllData] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [ofStV, setOfStV] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const observerRef = useRef();
  const [filterKey, setFilterKey] = useState<any>({
    search: "",
    consultantRating: "",
    active: "",
    ratingTop: "",
    popularity: "",
    yearsOfExperience: "",
    ranking: "",
    services: "",
    limit: 10,
    offset: 0,
  });

  const [tagFilter, setTagFilter] = useState({
    search: false,
    ratingValue: false,
    online: false,
    rating: false,
    popularity: false,
    experience: false,
    ranking: false,
    services: false,
  });

  useEffect(() => {
    const getServices = async () => {
      const { data } = await fetchServices();

      setAllServices(data?.data);
    };

    getServices();
  }, []);

  const getAllConsultation = (type: string) => {
    let params: any = filterKey;

    if (!isLoading) {
      setIsLoading(true);

      let path: any = "/api/frontend/common/consultation";
      const _params: any = [];

      if (type == "general") {
        params.offset = 0;
      }

      if (router?.query?.search) {
        params.search = router?.query?.search;
      }

      Object.keys(params)?.forEach((x) => {
        const v: any = params[x];
        if (v) _params.push(`${x}=${v}`);
      });
      if (_params?.length) {
        path = `${path}?${_params.join("&")}`;
      }

      const fgt = async (path: string, type: string) => {
        const { data } = await getAllConsultants(path);
        

        if (data?.data?.list?.length > 0) {
          if (type == "scroll") {
            setItems((prevItems) => [...prevItems, ...data?.data?.list]);
            params.offset = params.offset + 10;
          } else {
            params.offset = 10;
            setItems([...data?.data?.list]);
          }

          setIsLoading(false);
          setAllData(data);
        } else {
          setIsLoading(false);
          if(type != 'scroll'){
            setItems([]);
          }          
        }
      };

      fgt(path, type);
    }
  };

  // const handleObserver = (entries: any) => {

  //   const target = entries[0];
  

  //   if (target.isIntersecting) {
  //     setIsLoading(true);
  //     getAllConsultation("scroll");
  //     // Fetch more data when the observer element is intersecting
  //   }
  // };

  useEffect(() => {
    
    // if (filterKey?.search ||
    //   filterKey?.consultantRating ||
    //   filterKey?.active ||
    //   filterKey?.ratingTop ||
    //   filterKey?.popularity ||
    //   filterKey?.yearsOfExperience ||
    //   filterKey?.ranking ||
    //   filterKey?.services
    // ) {
    //   getAllConsultation("general");
    // }

    // const observer = new IntersectionObserver(handleObserver, {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // });

    // if (observerRef.current) {
    //   observer.observe(observerRef.current);
    // }

    getAllConsultation("general");
    // return () => {
    //   if (observerRef.current) {
    //     observer.unobserve(observerRef.current);
    //   }
    // };
  }, [filterKey]);

  const handleRating = (rate) => {
    setFilterKey((pre) => ({
      ...pre,
      ["consultantRating"]: rate,
    }));

    setRatingValue(rate);

    setTagFilter((pre) => ({
      ...pre,
      ["ratingValue"]: true,
    }));
  };

  const [serviceIds, setServiceIds] = useState([]);

  const dataFilter = (e: any, type: any) => {
    let value = e?.target?.value;
    let isCheck = e?.target?.checked;
    let flag = true;

    

    if (type === "service") {
      value = parseInt(value);

      let newArray = serviceIds;
      if (isCheck) {
        newArray.push(value);
      } else {
        const index = newArray.indexOf(value);
        if (index > -1) {
          // only splice array when item is found
          newArray.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
      if (newArray?.length > 0) {
        setFilterKey((pre) => ({
          ...pre,
          ["services"]: newArray,
        }));
      }

      setServiceIds(newArray);
    } else {
      setFilterKey((pre) => ({
        ...pre,
        [type]: isCheck ? value : "",
      }));
    }

    if (e?.target?.name == "services") {
      setTagFilter((pre) => ({
        ...pre,
        [e?.target?.name]: serviceIds?.length < 1 ? false : true,
      }));
    } else {
      setTagFilter((pre) => ({
        ...pre,
        [e?.target?.name]: isCheck,
      }));
    }
  };

  const tagFilterClear = (item: any) => {
    document
      .querySelectorAll(`input[name=${item}]`)
      .forEach((el: any) => (el.checked = false));

    setTagFilter((pre) => ({ ...pre, [item]: false }));
    if (item === "search") {
      setFilterKey((pre) => ({
        ...pre,
        ["search"]: "",
      }));
    }

    if (item === "ratingValue") {
      setFilterKey((pre) => ({
        ...pre,
        ["consultantRating"]: 0,
      }));

      setRatingValue(0);
    }

    if (item === "online") {
      setFilterKey((pre) => ({
        ...pre,
        ["active"]: "",
      }));
    }

    if (item === "rating") {
      setFilterKey((pre) => ({
        ...pre,
        ["ratingTop"]: "",
      }));
    }

    if (item === "popularity") {
      setFilterKey((pre) => ({
        ...pre,
        ["popularity"]: "",
      }));
    }

    if (item === "experience") {
      setFilterKey((pre) => ({
        ...pre,
        ["yearsOfExperience"]: "",
      }));
    }

    if (item === "ranking") {
      setFilterKey((pre) => ({
        ...pre,
        ["ranking"]: "",
      }));
    }

    if (item === "services") {
      delete router.query.search;

      router.push(
        {
          pathname: "/consultants",
        },
        "/consultants"
      );

      setServiceIds([]);
      setFilterKey((pre) => ({
        ...pre,
        ["services"]: "",
      }));
    }
  };

  const refreshContent = () => {
    delete router.query.search;

    router.push(
      {
        pathname: "/consultants",
      },
      "/consultants"
    );

    setFilterKey({
      search: "",
      consultantRating: 0,
      active: "",
      ratingTop: "",
      popularity: "",
      yearsOfExperience: "",
      ranking: "",
      services: "",
      limit: 10,
      offset: 0,
    });

    setTagFilter({
      search: false,
      ratingValue: false,
      online: false,
      rating: false,
      popularity: false,
      experience: false,
      ranking: false,
      services: false,
    });

    // router.push(`/consultants`);

    // document.getElementById("checkbox").checked = false

    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el: any) => (el.checked = false));

    setRatingValue(0);
  };

  useEffect(() => {
    if (router?.query?.search) {
      // searchData(router?.query?.search)

      let selectId: any = allServices?.filter((item) =>
        item?.title == router?.query?.search ? item?.id : ""
      );
      if (selectId[0]?.id) {
        let el = document.getElementById(`serviceId${selectId[0]?.id}`);
        if (el) {
          el.click();
        }
      }
    }

    if (router?.query?.services) {
      let el = document.getElementById(`serviceId${router?.query?.services}`);

      if (el) {
        el.click();
      }
    }
  }, [allServices]);

  const searchData = (keyword: any) => {
    setFilterKey((pre) => ({
      ...pre,
      ["search"]: keyword,
    }));

    setTagFilter((pre) => ({
      ...pre,
      ["search"]: keyword ? true : false,
    }));
  };

  const nodata = {
    text: "আপনার অনুসন্ধান টি পাওয়া যায় নি।",
  };

  const [buttonDegree, setButtonDegree] = useState(0);
  const HandleButtonRotate = () => {
    refreshContent();
    setButtonDegree(90);
    setTimeout(() => {
      ResetHandleButtonRotate();
    }, 500);
  };

  const ResetHandleButtonRotate = () => {
    setButtonDegree(0);
  };

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      getAllConsultation("scroll");
    }, 1500);
  };

  
  
  

  return (
    <Layout>
      {/* <div
        onClick={() => setNavbar(!navbar)}
        className={`z-[300] w-[100vw] bg-black bg-opacity-10 ${navbar ? "  fixed " : " hidden "
          }`}
      ></div> */}

      <section className="w-full lg:w-[92.3333%] m-auto mt-0">
        {/* <div className="text-[12px] font-bold w-full  p-1 lg:pr-2 pt-0 sm:pb-0 sm:p-4">
          <button
            onClick={() => setNavbar(!navbar)}
            type="button"
            className="font-bold  inline-flex items-center p-2 mt-2 pl-[0px!important] text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6 fill-green1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
            <span className="ml-2 ">ফিল্টার</span>
          </button>
        </div> */}

        <div className="sm:flex text-[12px] font-bold">
          <div
            className={`z-[2000] sm:z-[0] text-[12px] font-bold row-span-3 inline-block max-[640px]:fixed 
          max-[640px]:top-0 max-[640px]:left-0  sm:w-64 transition-transform -translate-x-full 
          sm:translate-x-0 bg-white mb-4 lg:pb-0 h-screen lg:h-auto overflow-y-auto custom-scrollbar2 ${
            navbar ? " translate-x-0 " : "  "
          }`}
          >
            <div className="h-full px-3 py-4 bg-gray-50 ">
              <div className="text-right">
                <button
                  onClick={() => setNavbar(!navbar)}
                  type="button"
                  className="font-bold  inline-flex items-center p-2 mt-2 ml-3 text-xl text-gray-500 rounded-lg sm:hidden bg-gray-100 focus:outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </div>

              <ul className="space-y-2 pt-2">
                <li>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="small-range"
                      className="text-[15px] block mb-0 text-gray-900"
                    >
                      রেটিং নির্বাচন করুন
                    </label>
                    {/* HandleButtonRotate */}
                    {isLoading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-gray-200 animate-spin fill-green-600"
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
                    ) : (
                      <button
                        onClick={() => refreshContent()}
                        className={`float-right transition-all duration-700`}
                        title="রিসেট করুন"
                      >
                        <svg
                          className={`fill-green1 h-[1.8em]`}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={
                            index <= (hover || Number(ratingValue))
                              ? "text-[25px] text-yellow-400"
                              : "text-[25px] text-gray-300"
                          }
                          onClick={() => handleRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </div>
                </li>
                <li>
                  <label
                    htmlFor="small-range"
                    className="text-[17px] block mb-2 text-gray-900 dark:text-white"
                  >
                    ক্রমানুসার
                  </label>

                  <div className="flex items-center leading-[24px] text-[15px]">
                    <input
                      type="checkbox"
                      name="online"
                      value="1"
                      onChange={(e) => dataFilter(e, "active")}
                      className="w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="online"
                      className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                    >
                      অনলাইন
                    </label>
                  </div>
                  <div className="flex items-center leading-[24px] text-[15px]">
                    <input
                      type="checkbox"
                      name="rating"
                      value="desc"
                      onChange={(e) => dataFilter(e, "ratingTop")}
                      className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="rating"
                      className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                    >
                      রেটিং
                    </label>
                  </div>

                  <div className="flex items-center leading-[24px] text-[15px]">
                    <input
                      type="checkbox"
                      name="popularity"
                      value={"desc"}
                      onChange={(e) => dataFilter(e, "popularity")}
                      className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="c1"
                      className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                    >
                      জনপ্রিয়তা
                    </label>
                  </div>
                  <div className="flex items-center leading-[24px] text-[15px]">
                    <input
                      type="checkbox"
                      name="experience"
                      value={"desc"}
                      onChange={(e) => dataFilter(e, "yearsOfExperience")}
                      className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="c2"
                      className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                    >
                      অভিজ্ঞতা
                    </label>
                  </div>
                  <div className="flex items-center leading-[24px] text-[15px]">
                    <input
                      type="checkbox"
                      name="ranking"
                      value={"desc"}
                      onChange={(e) => dataFilter(e, "ranking")}
                      className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="c5"
                      className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                    >
                      র‍্যাঙ্কিং
                    </label>
                  </div>

                  <label
                    htmlFor="small-range"
                    className="text-[17px] block mt-5 mb-2 text-gray-900 dark:text-white"
                  >
                    সেবাসমূহ
                  </label>

                  <div id="serviceSection overflow">
                    {allServices.length > 0 &&
                      allServices?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center leading-[24px] text-[15px]"
                          >
                            <input
                              type="checkbox"
                              name="services"
                              value={item?.id}
                              id={`serviceId${item?.id}`}
                              onChange={(e) => dataFilter(e, "service")}
                              className={`w-5 h-5 ring-1 ring-[#84cc16] ring-inset
                           text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                             focus:ring-2
                             `}
                            />

                            <label
                              htmlFor={`serviceId${item?.id}`}
                              className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300"
                            >
                              {item?.title}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </li>
                {/* <li>
                  <button
                    onClick={() => refreshContent()}
                    className="cursor-pointer bg-white border border-green1 px-2 py-1 text-green1 rounded-full text-[15px] "
                  >
                    পুনরায় সেট করুন
                  </button>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="text-[12px] font-bold w-full  p-1 sm:p-4 lg:pr-0 sm:pb-0">
              <div className="flex flex-col md:flex-row gap-3 leading-4 justify-between flax-warp">
                <div className="flex flex-wrap gap-1">
                  {Object.keys(tagFilter)?.map((item) =>
                    tagFilter[item] == true ? (
                      <span
                        key={item}
                        className="mr-1 py-1 px-2 consultantService1 bg-teal-100 rounded-full"
                      >
                        {/* {item} {item == 'ratingValue' ? ratingValue : ''} */}
                        {t(ucFirst(item))}{" "}
                        {item == "ratingValue" ? num_en_to_bn(ratingValue) : ""}
                        <span
                          className="ml-2"
                          onClick={() => tagFilterClear(item)}
                          role="button"
                        >
                          <i
                            className="fa fa-times text-red-700"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {item === "services" ? (
                          <>
                            <span className="ml-2">
                              {":"}
                              {allServices.length > 0 &&
                                allServices?.map((servic) => {
                                  return filterKey?.services?.includes(
                                    servic?.id
                                  ) ? (
                                    <>
                                      <span className="mx-2">
                                        {servic?.title},
                                      </span>
                                    </>
                                  ) : (
                                    ""
                                  );
                                })}
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </span>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <div className="lg:mb-4">
                  <p className="text-[15px] px-1 pl-[0px!important] leading-none">
                    পরামর্শদাতা:
                    <strong className="pl-2 text-[18px] ">
                      {num_en_to_bn(items?.length)}
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div
              id="scrollableDiv"
              style={{ height: 1150 }}
              className="custom-scrollbar w-full flex flex-col flex-wrap justify-start overflow-y-auto overflow-x-hidden p-1 mb-5 sm:p-4 lg:pr-2 sm:pt-[8px!important]"
            >
              {(items?.length < 1 && !isLoading) && (
                <>
                  <NoDataFound data={nodata} action={refreshContent} />
                </>
              )}

              <div className="">
                <InfiniteScroll
                  dataLength={items.length}
                  next={() => fetchMoreData()}
                  style={{ display: "flex", flexDirection: "column-reverse" }}
                  hasMore={true}
                  loader={false}
                  scrollableTarget="scrollableDiv"
                >
                  <div className="flex flex-col space-y-5">
                    {items?.map((item, index) => (
                      <Users key={index} values={item} />
                    ))}
                  </div>
                </InfiniteScroll>
              </div>

              {isLoading && (
                <>
                  <Loading />
                </>
              )}

              {/* <div ref={observerRef} /> */}
            </div>
          </div>
        </div>
        {/* Observer element */}
      </section>
    </Layout>
  );
};

export default SearchPage;
