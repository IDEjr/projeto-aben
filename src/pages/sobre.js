import React from "react";
import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import { handleJSONfile } from "../../utils/postHandler";

export function getStaticProps() {
  const sobreData = handleJSONfile(`./public/pages/sobre.json`);

  return {
    props: { sobreData },
  };
}

const Sobre = ({ sobreData }) => {
  const linkEstatuto = "https://aben-rs.org.br/wp-content/uploads/2015/06/Estatuto-ABEn-FINAL.pdf"

  return (
    <>
      <PageTitle title="Sobre" />
      <Container sx={{ my: 6 }}>
        <div dangerouslySetInnerHTML={{__html: sobreData.content}} />
      </Container>
    </>
  );
};

export default Sobre;
