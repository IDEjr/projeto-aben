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

export function getStaticPaths() {
  const eventos = handleJSONfiles("./public/posts/eventos");

  const paths = eventos.map((evento) => {
    return {
      params: { eventoId: evento.eventoId },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const eventoId = context.params.eventoId;
  const evento = handleJSONfile(`./public/posts/eventos/${eventoId}.json`);

  return {
    props: { evento },
  };
}

const Evento = (props) => {
  const evento = props.evento;

  return (
    <>
      <Container>
        <Card>
          <CardMedia
            component="img"
            height="auto"
            sx={{ width: 520 }}
            src={evento.imagem}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {evento.data}: {evento.titulo}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <ReactMarkdown>{evento.descricao}</ReactMarkdown>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Evento;
