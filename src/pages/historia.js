import presidentesABEN from "/public/images/presidentesABEn.svg";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import PageTitle from "components/PageTitle";
import Image from "next/dist/client/image";
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
  const content = handleJSONfile(`./public/pages/historia.json`);

  return {
    props: { content, contato },
  };
}

const Historia = ({ content }) => {
  return (
    <>
      <PageTitle title="Historia" />
      <Container sx={{ my: 6 }}>
        <StyledReactQuill
          value={content.content}
          readOnly={true}
          modules={{
            toolbar: false,
          }}
        />
      </Container>
    </>
  );
};

export default Historia;
