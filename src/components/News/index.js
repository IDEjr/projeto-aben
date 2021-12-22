/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const News = ({
  imagemNoticia,
  mancheteNoticia,
  dataNoticia,
  idNoticia,
  key,
}) => {
  const router = useRouter();

  const handleClick = () => router.push(`/Noticias/${idNoticia}`);

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 345, m: 1.3 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia component="img" height="140" src={imagemNoticia} alt="" />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {dataNoticia}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {mancheteNoticia}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default News;
