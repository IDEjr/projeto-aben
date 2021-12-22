import React from 'react';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const CustomCarrousel = ({
  children,
  autoplay = false,
  ...rest
}) => {

  return (
    <Swiper
      loop
      navigation
      {...(autoplay ?
        {
          autoplay:
          {
            delay: 500,
            disableOnInteraction: false
          }
        }
        :
        null)
      }
      spaceBetween={50}
      slidesPerView={1} >
      {children}
    </Swiper>
  )
}

export default CustomCarrousel;