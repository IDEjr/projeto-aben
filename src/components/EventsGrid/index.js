import React from "react";
import style from "./EventsGrid.module.css";
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

  // return <div className={style.grid}></div>;

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {eventsToRender}
      </Grid>
    </div>
  );
};

export default EventsGrid;
