/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
import defaultBanner from '../../../public/images/default/defaultBanner.png';

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

  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!imagemNoticia) setImageError(true);
  }, [imagemNoticia]);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
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
          src={imagemNoticia || defaultBanner}
          alt=""
          sx={{ objectFit: imageError ? "cover" : "contain", maxHeight: "160px", flex: 1 }}
          onError={e => {
            setImageError(true);
            e.target.src = "images/default/defaultBanner.png";
          }}
        />
        <CardContent>
          <Typography align="left" variant="h6" component="div" sx={{
            fontSize: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineBreak: 'anywhere',
            whiteSpace: "normal",
            height: '50px',
          }}>
            {mancheteNoticia}
          </Typography>
          <Typography gutterBottom align="center" variant="caption" component="div" sx={{ mt: 2, mb: 0 }}>
            {`${moment.utc(dataNoticia).local().format("DD/MM/YYYY")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default News;
