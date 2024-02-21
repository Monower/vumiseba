import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "nuka-carousel"
import Image from 'next/image';

export default function Slider2(prop) {


      return <Carousel
      autoplay={true}
      autoplayInterval={4000}
      wrapAround={true}
      disableEdgeSwiping={true}
      animation="fade"
      >
            {prop.data?.images?.map((item, index) => {
                  return <div key={index} className="">
                        <Image
                              src={item.image}
                              height={100}
                              width={100}
                              alt="img"
                        />
                        {/* <img src={item.image} alt='img' /> */}
                  </div>

            })}
      </Carousel>
}


