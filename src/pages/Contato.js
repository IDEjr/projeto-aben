import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';

const Contato = () => {
  return (
    <>
      <PageTitle title="Contato" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Contato;
