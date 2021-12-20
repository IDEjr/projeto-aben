import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';

const Eventos = () => {
  return (
    <>
      <PageTitle title="Eventos" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Eventos;
