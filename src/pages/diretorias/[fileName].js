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
  const diretorias = handleJSONfiles("./public/posts/diretorias");

  const paths = diretorias.map((d) => {
    return {
      params: { fileName: d.fileName },
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const fileName = context.params.fileName;
  const diretoria = handleJSONfile(`./public/posts/diretorias/${fileName}.json`);

  return {
    props: { diretoria },
  };
}

const Diretoria = ({
  diretoria
}) => {
  const {
    role: title,
    photo: banner,
    bio: content,
    author,
  } = diretoria;

  return (
    <Container>
      <Card>
        <CardMedia component="img" height="280" src={"/" + banner} alt="" />
        <CardContent>
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

export default Diretoria;
