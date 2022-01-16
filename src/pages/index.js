import { Container, Typography, Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import React from "react";
import EventsCarrousel from "components/EventsCarrousel";
import NewsGrid from "components/NewsGrid";
import Partners from "components/Partners";
import MembershipBanner from "components/MembershipBanner";
import { handleJSONfiles } from "../../utils/postHandler";
import { Box } from "@mui/system";

export function getStaticProps() {
  const newsData = handleJSONfiles("./public/posts/noticias");

  return {
    props: { newsData },
  };
}

const Home = ({
  newsData
}) => {

  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ my: 3 }}>
        <Box my={6}>
          <EventsCarrousel />
        </Box>
        <Box my={6}>
          <NewsGrid {...{ newsData }} limitItems hasGridHeader />
        </Box>
        <Box my={6}>
          <EventsCarrousel />
        </Box>
      </Container>
      <Box my={6}>
        <MembershipBanner />
      </Box>
    </>
  );
};

export default Home;
