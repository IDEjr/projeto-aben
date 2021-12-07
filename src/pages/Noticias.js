import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material";
import PageTitle from "components/PageTitle";

const Noticias = () => {
  return (
    <>
      <PageTitle title="Notícias" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Noticias;
