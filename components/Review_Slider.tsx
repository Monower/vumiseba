import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { useLang } from "@/hooks";
import Image from 'next/image'


export default function Review_Slider(prop) {

   const { LangInfo } = useLang();
   const { lang } = LangInfo;

   

  return (  
      
      <section className="md:container px-1 lg:px-8  m-auto">
        <div className="mx-auto  my-8 h-[16em] lg:h-auto bg-white rounded-xl py-4 lg:py-0 shadow-md overflow-hidden">
          <div className="grid sm:grid-cols-4 justify-items-center lg:justify-items-start align-middle">
            <div className="w-[30%] lg:w-[80%] rounded-xl border-2 border-[green] overflow-hidden">

                <Image
                      src={prop.data.image}
                      // className=" w-[50%!important] m-auto pt-4 sm:pt-0 sm:m-0 sm:w-[98%!important] sm:rounded-br-[70px] "
                      className='w-full'
                      width={300}
                      height={300}
                      alt={'img1'}
                      
                />
            </div>
            <div className="sm:col-span-3 p-4 max-[500px]:p-1 max-[500px]:pb-4 md:ml-2.5 my-auto">
              <div className="text-center ">
                  <p className='text-12 lg:text-20 font-medium leading-[15.65px] lg:leading-[22.98px]'>
                    {prop.data.text}
                  </p>

                  <div className='flex justify-center lg:pt-5'>
                      <div className='w-[12px] h-[3px] bg-[green] mt-auto mb-auto mr-1'></div>
                      <h3 className='font-bold lg:font-medium text-15 lg:text-20'>{prop.data.user}</h3>
                  </div>
              </div>   
            </div>
          </div>
        </div>
      </section>


  )
}