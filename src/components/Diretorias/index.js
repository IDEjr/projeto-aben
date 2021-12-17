import React from 'react';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image'
import { Email, Phone } from '@mui/icons-material';
import { useRouter } from 'next/router';

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
}) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        minHeight: "250px",
        height: 1,
        padding: 1,
        borderRadius: 2
      }}
      {...rest}>
      <CardActionArea
        onClick={() => diretoria?.slug ? router.push(`${router.pathname}/${diretoria.slug}`) : null}>
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
          sx={{
            height: "100px"
          }}
        />
        <CardContent sx={{ height: "180px" }}>
          <Typography>
            {diretoria.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box display="flex" flexDirection="column-reverse" p={1}>
          {
            diretoria.phone &&
            <>
              <Box display="flex" flexDirection="row" pt={2}>
                <Phone />
                <Typography
                  sx={{
                    ml: 1.5
                  }}>
                  {diretoria.phone || ""}
                </Typography>
              </Box>
            </>
          }
          {
            diretoria.email &&
            <>
              <Box display="flex" flexDirection="row" pt={2}>
                <Email />
                <Typography
                  sx={{
                    ml: 1.5
                  }}>
                  {diretoria.email || ""}
                </Typography>
              </Box>
            </>
          }
        </Box>
      </CardActions>
    </Card>
  )
}

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
