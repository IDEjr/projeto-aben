import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';

const Publicacoes = () => {
  return (
    <>
      <PageTitle title="Publicações" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Publicacoes;
