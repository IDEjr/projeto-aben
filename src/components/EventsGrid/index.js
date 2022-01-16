import React from "react";
import EventCard from "components/EventCard";
import { Grid } from "@mui/material";

const EventsGrid = ({ events }) => {

  return (
    <div>
      <Grid container direction="row" alignItems="flex-start" sx={{ pl: 5 }}>
        {events.map(e => (
          <EventCard
            imagemEvento={e.banner}
            tituloEvento={e.title}
            dataEvento={e.date}
            fileName={e.fileName}
            key={e.fileName}
          />
        ))}
      </Grid>
    </div>
  );
};

export default EventsGrid;
