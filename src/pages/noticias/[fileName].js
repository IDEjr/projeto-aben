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
import moment from 'moment-timezone';
import { Box } from "@mui/system";
import ContentView from "components/ContentView";

export function getStaticPaths() {
  const noticias = handleJSONfiles("./public/posts/noticias");

  const paths = noticias.map((noticia) => {
    return {
      params: { fileName: noticia.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const fileName = context.params.fileName;
  const noticia = handleJSONfile(`./public/posts/noticias/${fileName}.json`);

  return {
    props: { noticia },
  };
}

const Noticia = ({
  noticia
}) => {
  const {
    date,
    title,
    banner,
    content,
    author,
    show_text,
    active,
  } = noticia;

  return (
    <Container disableGutters>
      <ContentView
        {...{ banner, author, content, date }}
      />
    </Container>
  );
};

export default Noticia;
