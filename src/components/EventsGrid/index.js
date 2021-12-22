import React from "react";
import style from "./EventsGrid.module.css";
import EventCard from "components/EventCard";

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
      <div className={style.grid}>{eventsToRender}</div>
    </div>
  );
};

export default EventsGrid;
