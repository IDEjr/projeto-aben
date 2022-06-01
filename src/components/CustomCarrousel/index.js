import React from 'react';
import { Swiper } from 'swiper/react';
import { makeStyles } from '@mui/styles';

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

const customSwiperButton = {
  top: "50%",
  width: 40,
  height: 40,
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "50%",
  color: "white",
  fontWeight: 700,
  outline: 0,
  transition: "background-color .2s ease, color .2s ease"
};

const a = {
  fontSize: "16px"
};

const useStyles = makeStyles({
  swiper: {
    "& .swiper-button-prev": customSwiperButton,
    "& .swiper-button-next": customSwiperButton,
    "& .swiper-button-prev:after": a,
    "& .swiper-button-next:after": a
  }
});

const CustomCarrousel = ({
  children,
  autoplay = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Swiper
      className={classes.swiper}
      loop
      navigation
      {...(autoplay ?
        {
          autoplay:
          {
            delay: 8000,
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