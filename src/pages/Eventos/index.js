import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import React from "react";
import EventsGrid from "components/EventsGrid";
import { handleJSONfiles } from "../../../utils/postHandler";

export function getStaticProps() {
  const eventos = handleJSONfiles("./public/posts/eventos");

  return {
    props: { eventos },
  };
}

const Eventos = (props) => {
  return (
    <>
      <PageTitle title="Eventos" />
      <Container sx={{ my: 6 }}>
        <EventsGrid events={props.eventos} />
      </Container>
    </>
  );
};

export default Eventos;
