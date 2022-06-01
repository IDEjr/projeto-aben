import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import CustomCarrousel from "../CustomCarrousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box, color, darken } from "@mui/system";
import { useRouter } from "next/router";
import YoutubeEmbed from "components/YoutubeEmbed";


// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Carroussel = ({
  data,
  ...rest
}) => {
  const router = useRouter();
  const handleClick = () => router.push("/eventos");
  const handleAssocieseClick = () => router.push(`/associese`);

  return (
    <>
      {/* <Container>
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
      </Container> */}
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
          <YoutubeEmbed embedId="ecjuRyHdpmM" autoPlay mute />
        </Grid>
      </Grid>
    </>
  );
};

export default Carroussel;
