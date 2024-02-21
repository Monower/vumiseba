import { num_en_to_bn } from "@/helper/helper";





export default function Rating({average, total, fiveStar, fourStar, threeStar, twoStar, oneStar}){


    return <>
        <section className="container mx-auto px-[4vw] lg:px-[10vw] pb-8 lg:pb-14 flex flex-col space-y-4 lg:">
            <div>
                <h3 className="font-medium text-32 leading-[36px] lg:text-40 lg:leading-[55px] text-center">{num_en_to_bn(90)}% এরও বেশি সেবা গ্রহিতা আমাদের পাঁচ তারকা দিয়েছেন</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-5">
                <div className="lg:w-[50%]">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-y2 border border-y2 px-3 py-2 lg:px-5 lg:py-3 rounded-full flex space-x-6 justify-center items-center text-24 lg:text-36">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p className="font-medium text-16 leading-[18px] lg:text-24 lg:leading-[27px]">আমাদের গড় রেটিং {num_en_to_bn(4.8)}</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-center space-x-3">
                            <span className="font-medium text-20 lg:text-24">৫</span>
                            <span className="text-y2"><i className="fa-solid fa-star"></i></span>
                            <div className="h-2 lg:h-4 bg-g1 rounded-full w-full">
                                <div className={`h-2 lg:h-4 bg-b1 rounded-full`} style={{width:`${90}%`}}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="font-medium text-20 lg:text-24">৪</span>
                            <span className="text-y2"><i className="fa-solid fa-star"></i></span>
                            <div className="h-2 lg:h-4 bg-g1 rounded-full w-full">
                                <div className="h-2 lg:h-4 bg-b1 rounded-full" style={{width:`${80}%`}}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="font-medium text-20 lg:text-24">৩</span>
                            <span className="text-y2"><i className="fa-solid fa-star"></i></span>
                            <div className="h-2 lg:h-4 bg-g1 rounded-full w-full">
                                <div className="h-2 lg:h-4 bg-b1 rounded-full" style={{width:`${70}%`}}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="font-medium text-20 lg:text-24">২</span>
                            <span className="text-y2"><i className="fa-solid fa-star"></i></span>
                            <div className="h-2 lg:h-4 bg-g1 rounded-full w-full">
                                <div className="h-2 lg:h-4 bg-b1 rounded-full" style={{width:`${60}%`}}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="font-medium text-20 lg:text-24">১</span>
                            <span className="text-y2"><i className="fa-solid fa-star"></i></span>
                            <div className="h-2 lg:h-4 bg-g1 rounded-full w-full">
                                <div className="h-2 lg:h-4 bg-b1 rounded-full" style={{width:`${50}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}