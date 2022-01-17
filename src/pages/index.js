import { Container, Typography, Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import React, { useMemo } from "react";
import EventsCarrousel from "components/EventsCarrousel";
import NewsGrid from "components/NewsGrid";
import Partners from "components/Partners";
import MembershipBanner from "components/MembershipBanner";
import { handleJSONfiles } from "../../utils/postHandler";
import { Box } from "@mui/system";

export function getStaticProps() {
  const newsData = handleJSONfiles("./public/posts/noticias");
  const eventsData = handleJSONfiles("./public/posts/eventos");

  return {
    props: { newsData, eventsData },
  };
}

const Home = ({
  newsData,
  eventsData
}) => {

  const sortedEventsData = useMemo(() => eventsData.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  }), [eventsData])

  const sortedNewsData = useMemo(() => newsData.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  }), [newsData])

  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ my: 3 }}>
        {
          !!sortedEventsData.length &&
          <Box my={6}>
            <EventsCarrousel
              eventsData={sortedEventsData || []}
            />
          </Box>
        }
        {
          !!sortedNewsData.length &&
          <Box my={6}>
            <NewsGrid newsData={sortedNewsData || []} limitItems hasGridHeader />
          </Box>
        }
      </Container>
      <Box my={6}>
        <MembershipBanner />
      </Box>
    </>
  );
};

export default Home;
