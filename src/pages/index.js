import { Container, Typography, Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import React, { useMemo } from "react";
import NewsGrid from "components/NewsGrid";
import Partners from "components/Partners";
import MembershipBanner from "components/MembershipBanner";
import { handleJSONfile, handleJSONfiles } from "../../utils/postHandler";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import PostsGrid from "components/PostsGrid";
import Carroussel from "components/Carroussel";
import { sortCallback } from "../../utils";

const RouteEnum = {
  Events: "/eventos/",
  News: "/noticias/",
  Posts: "/posts/",
};

export function getStaticProps() {
  const newsData = handleJSONfiles("./public/posts/noticias");
  const eventsData = handleJSONfiles("./public/posts/eventos");
  const bannerAzul = handleJSONfile(`./public/pages/banner_azul.json`);
  const posts = handleJSONfiles("./public/posts/publicacoes");

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
      eventsData.sort(sortCallback),
    [eventsData]
  );

  const sortedNewsData = useMemo(
    () =>
      newsData.sort(sortCallback),
    [newsData]
  );

  const sortedPostsData = useMemo(
    () =>
      posts.sort(sortCallback),
    [posts]
  );

  const carrousselData = useMemo(() => [
    ...sortedEventsData
      .map(e => ({ ...e, route: RouteEnum.Events })),
    ...sortedNewsData.filter(e => e.carroussel)
      .map(e => ({ ...e, route: RouteEnum.News })),
    ...sortedPostsData.filter(e => e.carroussel)
      .map(e => ({ ...e, route: RouteEnum.Posts })),
  ].sort(sortCallback), [sortedEventsData, sortedNewsData, sortedPostsData]);

  return (
    <>
      <PageTitle title="Home" />
      {!!carrousselData.length && (
        <Box mt={6}>
          <Carroussel
            data={carrousselData || []} />
        </Box>
      )}
      <Container sx={{ my: 3 }}>
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
    </>
  );
};

export default Home;
