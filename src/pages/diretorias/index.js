import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { DiretoriasArchiveSwiper, DiretoriasGridView } from 'components/Diretorias';
import PageTitle from 'components/PageTitle';
import React from 'react';
import { diretoriasAtual, diretoriasArchive } from './mockData';

const Diretorias = () => {
  return (
    <>
      <PageTitle title="Diretorias" />
      <Container
        sx={{
          my: 4,
        }}>
        <DiretoriasGridView diretoria={diretoriasAtual} />
      </Container>
      {/* <DiretoriasArchiveSwiper archive={diretoriasArchive} /> */}
    </>
  )
}


export default Diretorias
