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
import { useRouter } from "next/router";
import { useMemo } from 'react';

export function getStaticPaths() {
  const diretorias = handleJSONfiles("./public/posts/diretorias");

  const paths = diretorias.map((d) => {
    return {
      params: { fileName: d.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const {
    fileName,
  } = context.params;
  const chapa = handleJSONfile(
    `./public/posts/diretorias/${fileName}.json`
  );

  return {
    props: { chapa },
  };
}

const Diretoria = ({ chapa }) => {
  const router = useRouter()
  const diretoria = useMemo(() => chapa.integrantes[router.query.index] || {}, [chapa.integrantes, router.query.index]);

  const { title, banner, description } = diretoria;

  return (
    <Container>
      <Card>
        {
          !!banner &&
          <CardMedia component="img" height="400px" sx={{ objectFit: "contain" }} src={"/" + banner} alt="" />
        }
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Diretoria;
