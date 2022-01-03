import React from "react";
import EventCard from "components/EventCard";
import { Grid } from "@mui/material";

const EventsGrid = ({ events }) => {
  const eventsToRender = events.map((item) => (
    <EventCard
      imagemEvento={item.imagem}
      tituloEvento={item.titulo}
      dataEvento={item.data}
      idEvento={item.eventoId}
      key={item.key}
    />
  ));

  return (
    <div>
      <Grid container direction="row" alignItems="flex-start" sx={{ pl: 5 }}>
        {eventsToRender}
      </Grid>
    </div>
  );
};

export default EventsGrid;
