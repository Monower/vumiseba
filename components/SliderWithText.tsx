import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Review_Slider from './Review_Slider';

export default function SliderWithText(prop) {
      return (<>
            <div className='sliderwithtext'>
                  <Carousel
                  className='mt-[22px]'
                  autoPlay={true}
                  infiniteLoop={true}
                  stopOnHover={true}
                  useKeyboardArrows={true}
                  showArrows={false}
                  interval={3000}
                  transitionTime={0}
                  showStatus={false}
                  showThumbs={false}

            >
                  {prop.data?.map((item, index) => {
                        return <div key={index}>
                              <Review_Slider data={item} />
                        </div>
                  })}
            </Carousel>
            </div>
      </>);
}


