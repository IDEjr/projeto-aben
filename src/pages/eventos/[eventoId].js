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
import ContentView from "components/ContentView";

export function getStaticPaths() {
  const eventos = handleJSONfiles("./public/posts/eventos");

  const paths = eventos.map((evento) => {
    return {
      params: { eventoId: evento.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const eventoId = context.params.eventoId;
  const evento = handleJSONfile(`./public/posts/eventos/${eventoId}.json`);

  return {
    props: { evento, contato },
  };
}

const Evento = ({
  evento
}) => {
  const {
    date,
    title,
    banner,
    content,
    active,
  } = evento;

  return (
    <Container>
      <ContentView
        {...{ banner, title, date, content }}
      />
    </Container>
  );
};

export default Evento;
