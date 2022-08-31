import { Container } from "@mui/material";
import PageTitle from "components/PageTitle";
import React from "react";
import EventsGrid from "components/EventsGrid";
import { handleJSONfile, handleJSONfiles }
 from "../../../utils/postHandler";
import { sortCallback } from "../../../utils";

export function getStaticProps() {
  const contato = handleJSONfile(`./public/pages/contato.json`);
  const eventos = handleJSONfiles("./public/posts/eventos")
    .sort(sortCallback);

  return {
    props: { eventos, contato },
  };
}

const Eventos = ({
  eventos
}) => {
  return (
    <>
      <PageTitle title="Eventos" />
      <Container sx={{ my: 6 }}>
        <EventsGrid events={eventos} />
      </Container>
    </>
  );
};

export default Eventos;
