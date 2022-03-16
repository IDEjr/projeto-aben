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
      <Box backgroundColor="#ffffff" my={{ xs: 0, md: 6 }}>
        <CardMedia component="img" height="400px" sx={{ objectFit: "contain" }} src={"/" + banner} alt="" />
        <CardContent sx={{ py: 6 }}>
          <Typography gutterBottom variant="body2" component="div">
            {`${moment.utc(date).local().format("DD/MM/YYYY")}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Por: {author}
          </Typography>
          <Typography gutterBottom variant="h4" sx={{ mt: 2 }} component="div">
            {title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <ReactMarkdown>{content}</ReactMarkdown>
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
};

export default Post;
