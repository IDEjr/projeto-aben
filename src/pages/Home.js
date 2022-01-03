import { Container, Typography, Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import React from "react";
import EventsCarrousel from "components/EventsCarrousel";
import NewsGrid from "components/NewsGrid";
import Partners from "components/Partners";
import MembershipBanner from "components/MembershipBanner";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Container spacing={2} sx={{ my: 3 }}>
        <Grid container spacing={6}>
          <Grid item sx={{ width: "100%" }}>
            <EventsCarrousel />
          </Grid>
          <Grid item>
            <Typography variant='h4'paragraph sx={{textIndent:'3ch'}}>Notícias</Typography>
            <NewsGrid />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <EventsCarrousel />
          </Grid>
          <Grid item sx={{
            display:'flex',
            alignContent:'center',
            justifyContent:'center',
            width: "100%"
          }}>
            <Partners/>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <MembershipBanner/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
