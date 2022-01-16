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
  const eventoId = context.params.eventoId;
  const evento = handleJSONfile(`./public/posts/eventos/${eventoId}.json`);

  return {
    props: { evento },
  };
}

const Evento = ({
  evento
}) => {
  const {
    date,
    title,
    banner,
    description,
    show_text,
    active,
  } = evento;

  return (
    <Container>
      <Card>
        <CardMedia component="img" height="280" src={"/" + banner} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          {`${moment.utc(date).local().format("DD/MM/YYYY")}`}: {title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Evento;
