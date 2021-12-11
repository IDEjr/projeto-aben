import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image'

const CustomTitle = ({
  children
}) => (
  <Typography
    variant="h3" sx={{ mb: 2 }}>
    {children}
  </Typography>
)

const CustomCard = ({
  diretoria,
  ...rest
}) => (
  <Card
    sx={{
      minHeight: "250px",
      height: 1,
      padding: 1,
      borderRadius: 2
    }}
    {...rest}>
    <CardHeader
      title={diretoria.title}
      subheader={diretoria.first_name}
      avatar={
        <Avatar>
          <Image
            src={diretoria.photo}
            alt={diretoria.title + " - Avatar"}
            layout="fill" />
        </Avatar>
      }
    />
    <CardContent>
      <Typography>
        {diretoria.bio}
      </Typography>
    </CardContent>
  </Card>
)

const DiretoriasGridView = ({
  diretoria
}) => (
  <Box>
    <CustomTitle>{diretoria.title}</CustomTitle>
    <Grid
      container
      spacing={3}>
      {
        diretoria.content.map(d => (
          <Grid
            item
            key={d.id}
            xs="12"
            md="6"
            lg="4">
            <CustomCard diretoria={d} />
          </Grid>
        ))
      }
    </Grid>
  </Box>
);

const DiretoriasArchiveSwiper = ({
  archive
}) => {

  return (
    <Box sx={{
      my: 4
    }}>
      <Container>
        <CustomTitle>Diretorias Passadas</CustomTitle>
      </Container>

      <Container
        maxWidth="false">
        <Box
          display="flex"
          sx={{
            "overflow-x": "scroll"
          }}
        >
          {
            archive.map(d => (
              <Box
                key={d.title}
                minWidth="300px"
                sx={{
                  mr: 2,
                  mb: 2
                }}>
                <CustomCard diretoria={d.content[0]} />
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box >
  )
};

export {
  DiretoriasGridView,
  DiretoriasArchiveSwiper
}
