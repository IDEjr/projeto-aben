import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import Post from "components/Post";

const PostsGrid = ({ limitItems, hasGridHeader, posts = [] }) => {
  const router = useRouter();
  const handleClick = () => router.push("/posts");

  const defaultNumberOfPostsToRender = 6;
  const numberOfPostsToRender = limitItems
    ? defaultNumberOfPostsToRender
    : posts.length;

  return (
    <Container>
      {hasGridHeader && (
        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4">Publicações</Typography>
          <Button variant="outline" onClick={handleClick}>
            Mais {"\u2794"}
          </Button>
        </Box>
      )}

      <Grid container spacing={2}>
        {posts.slice(0, numberOfPostsToRender).map((item) => (
          <Grid item key={item.fileName} xs={12} md={4}>
            <Post
              imagemPost={item.banner}
              manchetePost={item.title}
              dataPost={item.date}
              fileName={item.fileName}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsGrid;
