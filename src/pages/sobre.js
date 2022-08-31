import React from "react";
import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import { handleJSONfile } from "../../utils/postHandler";
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

export function getStaticProps() {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const sobreData = handleJSONfile(`./public/pages/sobre.json`);

  return {
    props: { sobreData, contato },
  };
}

const Sobre = ({ sobreData }) => {
  const linkEstatuto = "https://aben-rs.org.br/wp-content/uploads/2015/06/Estatuto-ABEn-FINAL.pdf"

  return (
    <>
      <PageTitle title="Sobre" />
      <Container sx={{ my: 6 }}>
        <StyledReactQuill
          value={sobreData.content}
          readOnly={true}
          modules={{
            toolbar: false,
          }}
        />
      </Container>
    </>
  );
};

export default Sobre;
