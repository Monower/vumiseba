import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import { num_en_to_bn } from "@/helper/helper";

export default function Footer() {
  function HandleScroll(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <section className="bg-g2 rounded-tl-[70px] lg:rounded-tl-[110px]">
        <div className="container mx-auto px-[2vw] max-[1300px]:px-[6vw] flex flex-col p-7">
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between items-center pb-4 lg:pb-10">
            {/* logo and links */}
            <div>
              {/* logo */}
              <Link href={"/home"}>
                <Image
                  className="w-[30vw] md:w-[15vw]"
                  src={"/images/logo2.png"}
                  height={1000}
                  width={1000}
                  alt="img"
                />
              </Link>
            </div>
            <ul className="font-medium text-14 lg:text-15 flex flex-wrap lg:flex-row justify-around lg:justify-center items-center  lg:space-x-8 w-full">
              <li className="hover:text-green1 text-center lg:text-left w-[20%] lg:w-auto">
                <Link href={"#"} onClick={(e) => e.preventDefault()}>
                  ব্লগ
                </Link>
              </li>
              <li className="hover:text-green1 text-center lg:text-left w-[40%] lg:w-auto">
                <Link href={"/faq"}>সাধারণ জিজ্ঞাসা</Link>
              </li>
              <li className="hover:text-green1 text-center lg:text-left w-[30%] lg:w-auto">
                <Link href={""} onClick={(e) => e.preventDefault()}>
                  সাইটম্যাপ
                </Link>
              </li>
              <li className="hover:text-green1 text-center lg:text-left w-[30%] lg:w-auto pt-2 lg:pt-0">
                <Link href={"/policy"}>নিয়ম এবং শর্তাবলি</Link>
              </li>
              <li className="hover:text-green1 text-center lg:text-left w-[30%] lg:w-auto pt-2 lg:pt-0">
                <Link href={{ pathname: "/contact" }} shallow>
                  যোগাযোগ
                </Link>
              </li>
              <li className="hover:text-green1 text-center lg:text-left my-2   ">
                <Link
                  href={{
                    pathname: "/other-info",
                  }}
                  shallow
                >
                  অন্যান্য তথ্য
                </Link>
              </li>
            </ul>
            <div>
              {/* social links */}
              <div className="flex items-center space-x-5 bg-slate-50 px-3 py-2 lg:px-5 lg:py-3 rounded-full drop-shadow-lg">
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/profile.php?id=100054470994421"
                  }
                >
                  <Image
                    className="w-[7vw] lg:w-[3.46vw]"
                    src={"/images/fbcolor.png"}
                    height={1000}
                    width={1000}
                    alt="img"
                  />
                </Link>
                <Link
                  target="_blank"
                  shallow
                  href={{ pathname: "https://twitter.com/vumiseba" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[7vw] lg:w-[1.25vw]"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
                <Link
                  onClick={HandleScroll}
                  href={"#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[7vw] lg:w-[1.2vw] fill-red-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
                {/* <Link target="_blank" href={'https://twitter.com/vumiseba'}><Image className="w-[7vw] lg:w-[3.46vw]" src={'/images/twittercolor.png'} height={1000} width={1000} alt="img" /></Link> */}
                <Link target="_blank" href={"https://wa.me/1970776602"}>
                  <Image
                    className="w-[7vw] lg:w-[3.5vw]"
                    src={"/images/whatsappcolor.png"}
                    height={1000}
                    width={1000}
                    alt="img"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@vumiseba7759"}
                >
                  <Image
                    className="w-[7vw] lg:w-[3.38vw]"
                    src={"/images/youtubecolor.png"}
                    height={1000}
                    width={1000}
                    alt="img"
                  />
                </Link>
                <Link target="_blank" onClick={HandleScroll} href={""}>
                  <Image
                    className="w-[7vw] lg:w-[3.41vw]"
                    src={"/images/telegramcolor.png"}
                    height={1000}
                    width={1000}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full flex justify-center items-center text-center">
              <p className="text-12 leading-[11.49px] lg:text-12 lg:leading-[13.79px]">
                কপিরাইট &copy; {num_en_to_bn(new Date().getFullYear())}{" "}
                সর্বস্বত্ব সংরক্ষিত{" "}
                <a className="text-green1" href={"/"}>
                  ভূমিসেবা
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
