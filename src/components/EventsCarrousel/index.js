import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import CustomCarrousel from "../CustomCarrousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const EventsCarrousel = ({ eventsData, ...rest }) => {
  const router = useRouter();
  const handleClick = () => router.push("/eventos");

  return (
    <Container>
      <Box
        display="flex"
        direction="row"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h4">
          Eventos
        </Typography>
        <Button variant="outline" onClick={handleClick}>
          Mais {"\u2794"}
        </Button>
      </Box>
      <CustomCarrousel>
        {eventsData.slice(0, 10).map(({ fileName, banner, title }) => {
          return (
            <SwiperSlide key={fileName}>
              <Slide
                {...{
                  fileName,
                  banner,
                  title,
                }} />
            </SwiperSlide>
          );
        })}
      </CustomCarrousel>
    </Container>
  );
};

export default EventsCarrousel;
