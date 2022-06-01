import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import PostsGrid from "components/PostsGrid";
import { sortCallback } from "../../../utils";
import { handleJSONfiles } from "../../../utils/postHandler";

export function getStaticProps() {
  const posts = handleJSONfiles("./public/posts/publicacoes")
    .sort(sortCallback);

  return {
    props: { posts },
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <PageTitle title="Publicações" />
      <Container sx={{ my: 6 }}>
        <PostsGrid posts={posts} />
      </Container>
    </>
  );
};

export default Posts;
