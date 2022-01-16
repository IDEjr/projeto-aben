/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const EventCard = ({
  imagemEvento,
  tituloEvento,
  dataEvento,
  fileName,
}) => {
  const router = useRouter();
  const handleClick = () => router.push(`${fileName}`);

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 520, m: 1.3 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia component="img" height="512" src={imagemEvento} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Data: {dataEvento}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {tituloEvento}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default EventCard;
