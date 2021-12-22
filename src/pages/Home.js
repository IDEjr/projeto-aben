import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';
import EventsCarrousel from 'components/EventsCarrousel';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ mt: 2 }}>
        <EventsCarrousel />
      </Container>
    </>
  );
};

export default Home;
