import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Fcarosel(prop: any) {
  const router = useRouter();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      router.push(`/search?search=${term}&offset=0`);
    }
  };

  const goFilter = () => {
    // router.push(`/search?offset=0`);
    router.push(`/consultation`);
  };

  const propData = prop.data2[0];
  const [text, setText] = useState(propData);
  let [count, setCount] = useState(0);

  function changeText(count) {
    setCount(count++);
    if (count < prop.data2.length && count != prop.data2.length) {
      setCount(count);
    } else if (count == prop.data2.length) {
      setCount(0);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      changeText(count);
    }, 2000);
  });

  return (
    <>
      <div
        id="default-carousel"
        className={"relative w-full pt-[108px]"}
        data-carousel="slide"
      >
        <div className="hidden lg:block relative h-[25vh] lg:h-[88.10vh] overflow-hidden rounded-lg">
          {prop.data.images?.map((item, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                loading="lazy"
                className="w-full h-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={item.image}
                width={1000}
                height={1000}
                alt={item.alt}
                key={index}
              />
              {/*               <img
                loading="eager"
                className="w-full h-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={item.image}
                alt={item.alt}
                width={1000}
                height={1000}
                key={index}
              /> */}
            </div>
          ))}
        </div>
        {/* search section */}
        <div
          className={
            `container mx-auto relative md:pt-[10vh] pb-[5vh] lg:absolute z-30 w-full lg:w-[60%] px-[4.5vw] ` +
            (prop.data.search ? `lg:bottom-[10vh]` : `lg:bottom-[20vh]`)
          }
        >
          <div className="flex flex-col space-y-5">
            {
              <div className=" lg:hidden">
                <h3 className="text-24 lg:text-48 leading-7 lg:leading-[55px] lg:w-[73%]">
                  {prop.data2[count].heading}
                </h3>
                <p className="text-12 lg:text-20 leading-[15px] lg:leading-[25px] lg:w-[70%]">
                  {prop.data2[count].para}
                </p>
              </div>
            }
            {prop.data.search && (
              <form
                className="flex justify-between items-center border-b bg-slate-50 drop-shadow-lg lg:w-[70%]"
                onSubmit={handleSubmit}
              >
                <input
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  type="text"
                  className="w-full border-none focus:outline-none focus:ring-0 placeholder:text-12 lg:placeholder:text-16 font-light placeholder:text-gray-600"
                  placeholder="যে কোন অনুসন্ধানে"
                />
                <span className="px-4 text-gray-600">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </form>
            )}

            {prop.data.tags && (
              <div className="flex items-center justify-center lg:justify-start space-x-5">
                <Link
                  href={"#"}
                  className="font-light text-12 lg:text-15 text-gray-600 border border-gray-600 px-3 py-1 rounded-full"
                >
                  ভূমি রেজিস্ট্রেশন
                </Link>
                <Link
                  href={"#"}
                  className="font-light text-12 lg:text-15 text-gray-600 border border-gray-600 px-3 py-1 rounded-full"
                >
                  ভূমি নামজারি
                </Link>
                <Link
                  href={"#"}
                  className="font-light text-12 lg:text-15 text-gray-600 border border-gray-600 px-3 py-1 rounded-full"
                >
                  ভূমি উন্নয়ন কর
                </Link>
              </div>
            )}
            <div className="flex items-center justify-center lg:justify-start space-x-5">
              <Link
                href={"#"}
                onClick={
                  prop.data.search
                    ? goFilter
                    : () =>
                        router.push(
                          ""
                        )
                }
                className="bg-green1 text-slate-50 px-3 py-1 rounded-full"
              >
                {prop.data.buttons[0].text}
              </Link>
              <Link
                href={prop.data.search ? `/about` : `#consulFaq`}
                className="bg-slate-50 border border-green1 px-3 py-1 rounded-full"
              >
                {prop.data.buttons[1].text}
              </Link>
            </div>
          </div>
        </div>
        {/* dots */}
        <div className="hidden absolute z-30 -translate-x-1/2 bottom-0 lg:bottom-[5.72vh] left-1/2 bg-primary w-full lg:flex justify-center items-center h-[24px]">
          <div className="flex space-x-3">
            {prop.data.images.map((item, index) => (
              <button
                key={index}
                type="button"
                className="w-3 h-3 rounded-full bg-slate-400"
                aria-current="true"
                aria-label={"Slide " + (index + 1)}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
