import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { relativeImagePath } from "@/helper/helper";
import { ADMIN_PANEL_URL } from "@/config";


const MobileMenu = ()=> {
    const router = useRouter();
    return (<>
            <div className="pt-[29px] bg-slate-50 rounded-b-md">
{/*                 <div className="flex justify-center items-center pb-[21px]">
                    <Link className="font-medium text-15 leading-[17.24px] text-slate-50 bg-green1 py-2 px-7 rounded-full tracking-widest" href={{pathname: ADMIN_PANEL_URL+'/login'}} shallow>লগইন/রেজিস্টার</Link>
                </div> */}
                <div className="bg-[#F4FFEC] mb-[38px] flex justify-center items-center">
                    <ul className="font-medium leading-[23.44px] text-20 text-[#121212] flex flex-col space-y-[18px] py-[10px] w-[80%]">
                        <li className={`${router.pathname === '/home' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/home'}} shallow>হোম</Link>
                        </li>
                        <li className={`${router.pathname === '/consultants' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/consultants'}} shallow>পরামর্শকগণ</Link>
                        </li>
                        <li className={`${router.pathname === '/about' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/about'}} shallow>আমাদের সম্পর্কে</Link>
                        </li>
                        <li className={`${router.pathname === '/faq' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/faq'}} shallow>জিজ্ঞাসাবলি</Link>
                        </li>
                        <li className={`${router.pathname === '/consultant' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/consultant'}} shallow>পরামর্শদাতার জন্য</Link>
                        </li>
                        <li className={`${router.pathname === '/policy' ? 'text-green1 border-b border-[#348739]' : ''}`}>
                            <Link href={{pathname: '/policy'}} shallow>ব্যবহারের শর্তাবলি</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center pb-[17px]">
                    <p className="text-16 pb-4">ভূমিসেবা - Google Play তে অ্যাপ</p>
                    <Link className="inline-flex items-center border border-green1 text-green1 py-2 px-[42px] rounded-full" target="_blank" href={`https://play.google.com/store/apps/details?id=com.mysoftheaven.jomi&hl=en&gl=US&pli=1`}>
                        <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8 9.08125C16.9281 8.74688 17 8.38125 17 8C17 6.34375 15.6562 5 14 5C13.3844 5 12.8094 5.1875 12.3344 5.50625C11.4688 4.00625 9.85312 3 8 3C5.2375 3 3 5.2375 3 8C3 8.08437 3.00312 8.16875 3.00625 8.25313C1.25625 8.86875 0 10.5375 0 12.5C0 14.9844 2.01562 17 4.5 17H16C18.2094 17 20 15.2094 20 13C20 11.0656 18.625 9.45 16.8 9.08125ZM12.6469 11.8531L9.35312 15.1469C9.15937 15.3406 8.84063 15.3406 8.64688 15.1469L5.35313 11.8531C5.0375 11.5375 5.2625 11 5.70625 11H7.75V7.5C7.75 7.225 7.975 7 8.25 7H9.75C10.025 7 10.25 7.225 10.25 7.5V11H12.2937C12.7375 11 12.9625 11.5375 12.6469 11.8531Z" fill="#017F28"/>
                        </svg>
                        ডাউনলোড
                    </Link>
                </div>
                <div className="static flex justify-center">
                    <Image className="rounded-b-md" src={relativeImagePath('mobile_menu_bg.webp')} height={1000} width={1000} alt="image error" priority/>
                    <div className="absolute flex items-center space-x-5 bg-slate-50 px-3 py-2 lg:px-5 lg:py-3 mt-8 rounded-full drop-shadow-lg">
                        <Link target="_blank" href={'https://www.facebook.com/profile.php?id=100054470994421'}><Image className="w-[7vw] lg:w-[3.46vw]" src={'/images/fbcolor.png'} height={1000} width={1000} alt="img" /></Link>
                        <Link target="_blank" href={'https://twitter.com/vumiseba'}><Image className="w-[7vw] lg:w-[3.46vw]" src={'/images/twittercolor.png'} height={1000} width={1000} alt="img" /></Link>
                        <Link target="_blank" href={'https://wa.me/1970776602'}><Image className="w-[7vw] lg:w-[3.28vw]" src={'/images/whatsappcolor.png'} height={1000} width={1000} alt="img" /></Link>
                        <Link target="_blank" href={'https://www.youtube.com/@vumiseba7759'}><Image className="w-[7vw] lg:w-[3.38vw]" src={'/images/youtubecolor.png'} height={1000} width={1000} alt="img" /></Link>
                        <Link target="_blank" onClick={(e)=>e.preventDefault()} href={''}><Image className="w-[7vw] lg:w-[3.41vw]" src={'/images/telegramcolor.png'} height={1000} width={1000} alt="img" /></Link>
                    </div>
                </div>
            </div>
    </>);
}

export default MobileMenu;