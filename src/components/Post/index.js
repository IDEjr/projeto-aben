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
import moment from "moment-timezone";
import { Box } from "@mui/system";

const Post = ({ imagemPost, manchetePost, dataPost, fileName }) => {
  const router = useRouter();

  const handleClick = () => router.push(`posts/${fileName}`);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardActionArea onClick={handleClick} sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between"
      }}>
        <CardMedia
          component="img"
          src={"/" + imagemPost}
          alt=""
          sx={{ objectFit: "contain", maxHeight: "200px" }}
        />
        <CardContent>
          <Typography align="left" variant="h6" component="div" sx={{
            fontSize: '16px',
            display: '-webkit-box',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            lineBreak: 'anywhere',
            whiteSpace: "normal",
            height: '50px',
          }} >
            {manchetePost}
          </Typography>
          <Typography gutterBottom align="center" variant="body2" component="div">
            {`${moment.utc(dataPost).local().format("DD/MM/YYYY")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
