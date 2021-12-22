/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
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
      <Container sx={{ mt: 2 }}>
        <div style={{ alignItems: "center" }}>
          <img src={noticia.imagem} alt={""} />
          <h2>{noticia.manchete}</h2>
          <p>{noticia.texto}</p>
        </div>
      </Container>
    </>
  );
};

export default Noticia;
