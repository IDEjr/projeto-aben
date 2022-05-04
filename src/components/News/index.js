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
  url,
  useRedirect
}) => {
  const router = useRouter();

  const handleClick = () => router.push(`noticias/${fileName}`);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between"
        }}
        {...(useRedirect
          ? { href: url, target: "_blank", rel: "noopener noreferrer" }
          : { onClick: handleClick })}>
        <CardMedia component="img" sx={{ objectFit: "contain", minHeight: "250px" }} src={"/" + imagemNoticia} alt="" />
        <CardContent >
          <Typography align="center" variant="h6" component="div" sx={{
            fontSize: '16px',
            display: '-webkit-box',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            lineBreak: 'anywhere',
            whiteSpace: "normal",
            height: '50px',
          }} >
            {mancheteNoticia}
          </Typography>
        </CardContent>
        <Typography align="right" variant="body2" component="div">
          {`${moment.utc(dataNoticia).local().format("DD/MM/YYYY")}`}
        </Typography>
      </CardActionArea>
    </Card >
  );
};

export default News;
