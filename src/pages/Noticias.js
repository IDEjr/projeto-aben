import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import NewsGrid from "components/NewsGrid";

const Noticias = () => {
  return (
    <>
      <PageTitle title="Notícias" />
      <Container sx={{ mt: 2 }}>
        <NewsGrid />
      </Container>
    </>
  );
};

export default Noticias;
