import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import newsList from './mockdata';
import Slide from './Slide';
import CustomCarrousel from '../CustomCarrousel';

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

const EventsCarrousel = ({
  ...rest
}) => {

  return (
    <CustomCarrousel>
      {
        newsList.slice(0, 10).map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <Slide
                image={e.image}
                title={e.title}
                content={e.content} />
            </SwiperSlide>
          )
        })
      }
    </CustomCarrousel>
  )
}

export default EventsCarrousel;
