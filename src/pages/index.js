import { Container, Typography, Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import React, { useMemo } from "react";
import EventsCarrousel from "components/EventsCarrousel";
import NewsGrid from "components/NewsGrid";
import Partners from "components/Partners";
import MembershipBanner from "components/MembershipBanner";
import { handleJSONfile, handleJSONfiles } from "../../utils/postHandler";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import PostsGrid from "components/PostsGrid";

export function getStaticProps() {
  const newsData = handleJSONfiles("./public/posts/noticias");
  const eventsData = handleJSONfiles("./public/posts/eventos");
  const bannerAzul = handleJSONfile(`./public/pages/banner_azul.json`);
  const posts = handleJSONfiles("./public/posts/publicações");

  return {
    props: { newsData, eventsData, bannerAzul, posts },
  };
}

const Home = ({ newsData, eventsData, bannerAzul, posts }) => {
  const router = useRouter();
  const invite_token = router.asPath.split("#invite_token")[1] || "";

  if (invite_token) {
    router.push(`admin/index.html/#invite_token=${invite_token}`);
  }

  const sortedEventsData = useMemo(
    () =>
      eventsData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }),
    [eventsData]
  );

  const sortedNewsData = useMemo(
    () =>
      newsData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }),
    [newsData]
  );

  const sortedPostsData = useMemo(
    () =>
      posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }),
    [posts]
  );

  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ my: 3 }}>
        {!!sortedEventsData.length && (
          <Box my={6}>
            <EventsCarrousel eventsData={sortedEventsData || []} />
          </Box>
        )}
        {!!sortedNewsData.length && (
          <Box my={6}>
            <NewsGrid
              newsData={sortedNewsData || []}
              limitItems
              hasGridHeader
            />
          </Box>
        )}
        {!!sortedPostsData.length && (
          <Box my={6}>
            <PostsGrid posts={sortedPostsData || []} limitItems hasGridHeader />
          </Box>
        )}
      </Container>
      {bannerAzul?.active && (
        <Box my={6}>
          <MembershipBanner {...{ bannerAzul }} />
        </Box>
      )}
    </>
  );
};

export default Home;
