import { Container, Typography } from '@mui/material';
import PageTitle from 'components/PageTitle';
import React from 'react';

const Sobre = () => {
  return (
    <>
      <PageTitle title="Sobre" />
      <Container sx={{ mt: 2 }}>
        <Typography>Conteúdo</Typography>
      </Container>
    </>
  );
};

export default Sobre;
