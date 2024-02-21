import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Slider(prop: { data: { images: any[]; }; }) {
      return (<>
            <Carousel
                  className='-z-50'
                  autoPlay={true}
                  infiniteLoop={true}
                  stopOnHover={true}
                  emulateTouch={true}
                  useKeyboardArrows={true}
                  showArrows={false}
                  interval={3000}
                  transitionTime={0}
                  showStatus={false}
                  showThumbs={false}
                  >
                  {prop.data?.images?.map((item: { image: string; },index: React.Key) => {
                        return <div key={index}>
                                    <Image
                                          className='w-full '
                                          src={item.image}
                                          height={1000}
                                          width={1000}
                                          alt="img"
                                          priority
                                    />
                              </div>

                  })}
            </Carousel>
      </>)
}


