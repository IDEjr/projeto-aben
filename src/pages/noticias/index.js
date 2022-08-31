import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import NewsGrid from "components/NewsGrid";
import { handleJSONfile, handleJSONfiles }
 from "../../../utils/postHandler";
import { sortCallback } from "../../../utils";

export function getStaticProps() {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const noticias = handleJSONfiles("./public/posts/noticias")
    .sort(sortCallback);

  return {
    props: { noticias, contato },
  };
}

const Noticias = ({
  noticias
}) => {
  return (
    <>
      <PageTitle title="Notícias" />
      <Container sx={{ my: 6 }}>
        <NewsGrid newsData={noticias} />
      </Container>
    </>
  );
};

export default Noticias;
