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
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const StyledReactQuill = styled(ReactQuill)`
  .ql-snow {
    border: none;
    font-size: 18px;
  }
  .ql-video {
    width: 1010px;
    height: 500px;
  }
`;

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
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const {
    fileName,
  } = context.params;
  const chapa = handleJSONfile(
    `./public/posts/diretorias/${fileName}.json`
  );

  return {
    props: { chapa, contato },
  };
}

const Diretoria = ({ chapa }) => {
  const router = useRouter()
  const diretoria = useMemo(() => chapa.integrantes[router.query.index] || {}, [chapa.integrantes, router.query.index]);

  const { title, banner, content } = diretoria;

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <StyledReactQuill
            value={content}
            readOnly={true}
            modules={{
              toolbar: false,
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Diretoria;
