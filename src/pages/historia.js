import presidentesABEN from "/public/images/presidentesABEn.svg";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import PageTitle from "components/PageTitle";
import Image from "next/dist/client/image";
import { handleJSONfile } from "../../utils/postHandler";

export function getStaticProps() {
  const content = handleJSONfile(`./public/pages/historia.json`);

  return {
    props: { content },
  };
}

const Historia = ({ content }) => {
  return (
    <>
      <PageTitle title="Historia" />
      <Container sx={{ my: 6 }}>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </Container>
    </>
  );
};

export default Historia;
