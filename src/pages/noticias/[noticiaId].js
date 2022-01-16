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
import PageTitle from "components/PageTitle";

export function getStaticPaths() {
  const noticias = handleJSONfiles("./public/posts/noticias");

  const paths = noticias.map((noticia) => {
    return {
      params: { noticiaId: noticia.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const noticiaId = context.params.noticiaId;
  const noticia = handleJSONfile(`./public/posts/noticias/${noticiaId}.json`);

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
    <Container>
      <Card>
        <CardMedia component="img" height="280" src={"/" + banner} alt="" />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {`${moment.utc(date).local().format("DD/MM/YYYY")}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Por: {author}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <ReactMarkdown>{content}</ReactMarkdown>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Noticia;
