import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import CustomCarrousel from "../CustomCarrousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Button, CardActionArea, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import { useRouter } from "next/router";


// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Carroussel = ({
  data,
  ...rest
}) => {
  const router = useRouter();
  const handleClick = () => router.push("/eventos");

  return (
    <>
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
      </Container>
      <Grid container>
        <Grid item md={8}>
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
        <Grid item md={4}>
          <Box height="auto" maxHeight="400px" width="100%" borderRadius={1}>
            <CardActionArea >
              <CardMedia
                component="img"
                src="/images/banner-aben.png"
                sx={{
                  position: "absolute",
                  height: "400px",
                  objectFit: "fill",
                }}>
              </CardMedia>
              <Typography variant="h5" sx={{
              }}>Oi! Sou a Aben-RS </Typography>
            </CardActionArea>
          </Box>
        </Grid>
      </Grid>







    </>
  );
};

export default Carroussel;
