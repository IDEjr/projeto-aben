import { useState, useMemo } from 'react';
import { Container, Box } from "@mui/material";
import CategorySelect from "components/CategorySelect";
import PageTitle from "components/PageTitle";
import PostsGrid from "components/PostsGrid";
import { sortCallback } from "../../../utils";
import { handleJSONfile, handleJSONfiles }
 from "../../../utils/postHandler";

const PostTypesEnum = {
  Livro: "livro",
  Boletim: "boletim",
  Anais: "anais",
}

export function getStaticProps() {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const posts = handleJSONfiles("./public/posts/publicacoes")
    .sort(sortCallback);

  return {
    props: { posts, contato },
  };
}

const Posts = ({ posts }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredPosts = useMemo(() =>
    Boolean(selectedCategories.length)
      ? posts.filter(p => selectedCategories.includes(p.category))
      : posts
    , [posts, selectedCategories]);

  return (
    <>
      <PageTitle title="Publicações" />
      <Container sx={{ my: 6 }}>
        <Box ml={3} mb={2}>
          <CategorySelect
            value={selectedCategories}
            setValue={setSelectedCategories}
            options={Object.entries(PostTypesEnum).map(e => ({ label: e[0], value: e[1] }))}
          />
        </Box>
        <PostsGrid posts={filteredPosts} />
      </Container>
    </>
  );
};

export default Posts;
