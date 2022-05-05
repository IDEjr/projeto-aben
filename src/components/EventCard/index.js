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
  useRedirect,
  url
}) => {
  const router = useRouter();
  const handleClick = () => router.push(`eventos/${fileName}`);

  return (
    <Card variant="outlined">
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        {...(useRedirect
          ? { href: url, target: "_blank", rel: "noopener noreferrer" }
          : { onClick: handleClick })}>
        <CardMedia
          component="img"
          src={imagemEvento}
          alt=""
          sx={{ objectFit: "contain", maxHeight: "200px", flex: 1 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{
            fontSize: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineBreak: 'anywhere',
            whiteSpace: "normal",
            height: '50px',
          }}>
            {tituloEvento}
          </Typography>
          <Typography gutterBottom align="center" variant="caption" component="div" sx={{ mt: 2, mb: 0 }}>
            {`${moment.utc(dataEvento).local().format("DD/MM/YYYY")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
