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
      <Grid container>
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
          <Box height="auto" maxHeight="400px" width="100%" sx={{
            position: "relative"
          }}>
            <CardMedia
              component="img"
              src="/images/banner-aben.png"
              sx={{
                height: "400px",
                objectFit: "cover",
                objectPosition: "left center"
              }}>
            </CardMedia>
            <Box sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              top: 0
            }}>
              <Typography variant="h4" color="common.white">Oi! Sou a ABEn-RS.</Typography>
              <Button
                onClick={handleAssocieseClick}
                sx={{
                  boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.1)",
                  mt: 2,
                  color: "black",
                  backgroundColor: "#E8C061",
                  "&:hover": {
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#FAD273",
                  }
                }}
                variant="contained"
                size="large"
              >Associe-se</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Carroussel;
