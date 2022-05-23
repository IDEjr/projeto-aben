import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Email, Phone } from "@mui/icons-material";
import { useRouter } from "next/router";

const CustomTitle = ({ children, onClick }) => (
  <Typography variant="h3" sx={{ mb: 2, cursor: "pointer" }} onClick={onClick}>
    {children}
  </Typography>
);

const LINES_TO_SHOW = 2;

const CustomCard = ({ diretoria, fileName, index, ...rest }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        minHeight: "250px",
        height: 1,
        padding: 1,
        borderRadius: 2,
      }}
      {...rest}
    >
      <CardActionArea
        onClick={() => router.push(`/diretorias/${fileName}?index=${index}`)}
      >
        <CardHeader
          titleTypographyProps={{
            variant: "subtitle1"
          }}
          title={diretoria.role}
          subheader={diretoria.name}
          avatar={
            <Avatar
              sx={{ width: 64, height: 64 }}
            >
              <Image
                src={`/${diretoria.photo}`}
                alt={diretoria.role + " - Avatar"}
                layout="fill"
              />
            </Avatar>
          }
          sx={{
            height: "110px",
          }}
        />
        <CardContent sx={{ height: "110px" }}>
          <Typography
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineBreak: 'anywhere',
              whiteSpace: "normal",
            }}>
            {diretoria.bio.slice(0, 200).concat("...")}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" flexDirection="column-reverse" pb={1} px={1}>
            {diretoria.phone && (
              <>
                <Box display="flex" flexDirection="row" pt={2} alignItems="center">
                  <Phone />
                  <Typography
                    variant="body"
                    sx={{
                      ml: 1.5,
                    }}
                  >
                    {diretoria.phone || ""}
                  </Typography>
                </Box>
              </>
            )}
            {diretoria.email && (
              <>
                <Box display="flex" flexDirection="row" pt={2} alignItems="center">
                  <Email />
                  <Typography
                    variant="body"
                    sx={{
                      ml: 1.5,
                    }}
                  >
                    {diretoria.email || ""}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </CardActions>
      </CardActionArea>
    </Card >
  );
};

const DiretoriasGridView = ({ diretoria }) => {
  return (
    <>
      <Box>
        <CustomTitle
        >
          {diretoria.titulo}
        </CustomTitle>
        <Grid container spacing={2}>
          {diretoria.integrantes.map((d, index) => (
            <Grid item key={d.id} xs="12" md="6" lg="4">
              <CustomCard diretoria={d} fileName={diretoria.fileName} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const DiretoriasArchiveSwiper = ({ archive }) => {
  return (
    <Box
      sx={{
        my: 4,
      }}
    >
      <Container>
        <CustomTitle>Diretorias Passadas</CustomTitle>
      </Container>

      <Container maxWidth="false">
        <Box
          display="flex"
          sx={{
            "overflow-x": "scroll",
          }}
        >
          {archive.map((d) => (
            <Box
              key={d.titulo}
              minWidth="300px"
              sx={{
                mr: 2,
                mb: 2,
              }}
            >
              <CustomCard diretoria={d.content[0]} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export { DiretoriasGridView, DiretoriasArchiveSwiper };
