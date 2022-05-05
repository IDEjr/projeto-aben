import React from "react";
import EventCard from "components/EventCard";
import { Container, Grid } from "@mui/material";

const EventsGrid = ({ events }) => {

  return (
    <Container>
      <Grid container spacing={2}>
        {events.map(e => (
          <Grid item
            key={e.fileName}
            xs={12}
            md={4}>
            <EventCard
              imagemEvento={e.banner}
              tituloEvento={e.title}
              dataEvento={e.date}
              fileName={e.fileName}
              useRedirect={e.useRedirect}
              url={e.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsGrid;
