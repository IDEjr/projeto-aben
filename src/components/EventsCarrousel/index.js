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
import newsList from "./mockdata";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const EventsCarrousel = ({ ...rest }) => {
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
          Notícias
        </Typography>
        <Button variant="outline" onClick={handleClick}>
          Mais {"\u2794"}
        </Button>
      </Box>
      <CustomCarrousel>
        {newsList.slice(0, 10).map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <Slide image={e.image} title={e.title} content={e.content} />
            </SwiperSlide>
          );
        })}
      </CustomCarrousel>
    </Container>
  );
};

export default EventsCarrousel;
