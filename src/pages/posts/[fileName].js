/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { handleJSONfile, handleJSONfiles } from "../../../utils/postHandler";
import moment from "moment-timezone";
import { Box } from "@mui/system";
import ContentView from "components/ContentView";

export function getStaticPaths() {
  const posts = handleJSONfiles("./public/posts/publicacoes");

  const paths = posts.map((post) => {
    return {
      params: { fileName: post.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const fileName = context.params.fileName;
  const post = handleJSONfile(`./public/posts/publicacoes/${fileName}.json`);

  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  const { date, title, banner, content, author, show_text, active } = post;

  return (
    <Container disableGutters>
      <ContentView
        {...{ banner, date, author, title, content }}
      />
    </Container>
  );
};

export default Post;
