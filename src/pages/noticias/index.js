import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import NewsGrid from "components/NewsGrid";
import { handleJSONfiles } from "../../../utils/postHandler";

export function getStaticProps() {
  const noticias = handleJSONfiles("./public/posts/noticias");

  return {
    props: { noticias },
  };
}

const Noticias = (props) => {
  return (
    <>
      <PageTitle title="Notícias" />
      <Container sx={{ my: 6 }}>
        <NewsGrid newsData={props.noticias} />
      </Container>
    </>
  );
};

export default Noticias;
