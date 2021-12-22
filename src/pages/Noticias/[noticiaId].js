/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { handleJSONfile, handleJSONfiles } from "../../../utils/postHandler";

export function getStaticPaths() {
  const noticias = handleJSONfiles("./public/posts/noticias");

  const paths = noticias.map((noticia) => {
    return {
      params: { noticiaId: noticia.noticiaId },
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

const Noticia = (props) => {
  const noticia = props.noticia;

  return (
    <>
      <Container>
        <Card>
          <CardMedia component="img" height="280" src={noticia.imagem} alt="" />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {noticia.data}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Por: {noticia.autor}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {noticia.manchete}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {noticia.texto}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Noticia;
