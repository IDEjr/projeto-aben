import React from "react";
import { SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import CustomCarrousel from "../CustomCarrousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import YoutubeVideo from "components/YoutubeVideo";


// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Carroussel = ({
  data,
  ...rest
}) => {
  const router = useRouter();

  return (
    <>
      <Grid container rowSpacing={6} alignItems="center">
        <Grid item xs={12} lg={8}>
          <CustomCarrousel autoplay>
            {data.slice(0, 10).map(e => {
              return (
                <SwiperSlide key={e.fileName}>
                  <Slide {...e} />
                </SwiperSlide>
              );
            })}
          </CustomCarrousel>
        </Grid>
        <Grid item xs={12} lg={4}>
          <YoutubeVideo id="ecjuRyHdpmM" />
        </Grid>
      </Grid>
    </>
  );
};

export default Carroussel;
