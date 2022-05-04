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
import moment from 'moment-timezone';

const EventCard = ({
  imagemEvento,
  tituloEvento,
  dataEvento,
  fileName,
}) => {
  const router = useRouter();
  const handleClick = () => router.push(`eventos/${fileName}`);

  return (
    <Card variant="outlined">
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" sx={{ objectFit: "contain", maxHeight: "200px" }} src={imagemEvento} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{
            fontSize: '16px',
            '-webkit-line-clamp': 2,
            display: '-webkit-box',
            overflow: 'hidden',
            '-webkit-box-orient': 'vertical',
            lineClamp: 2,
            height: '50px',
          }}>
            {tituloEvento}
          </Typography>
          <Typography gutterBottom align="center" variant="body2" component="div" >
            {`${moment.utc(dataEvento).local().format("DD/MM/YYYY")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
