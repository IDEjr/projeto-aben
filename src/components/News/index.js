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
import { Box } from "@mui/system";

const News = ({
  imagemNoticia,
  mancheteNoticia,
  dataNoticia,
  fileName,
}) => {
  const router = useRouter();

  const handleClick = () => router.push(`noticias/${fileName}`);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" sx={{ objectFit: "contain", maxHeight: "200px" }} src={"/" + imagemNoticia} alt="" />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {`${moment.utc(dataNoticia).local().format("DD/MM/YYYY")}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {mancheteNoticia}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default News;
