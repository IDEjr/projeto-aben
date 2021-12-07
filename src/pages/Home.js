import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Home;
