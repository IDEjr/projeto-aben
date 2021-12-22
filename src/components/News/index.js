/* eslint-disable @next/next/no-img-element */
import NewsModal from "components/NewsModal";
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
  imageLink,
  newsTitle,
  newsHeadline,
  newsContent,
  newsId,
  key,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => router.push(`/Noticias/${newsId}`);

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 345, m: 1.3 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia component="img" height="140" src={imageLink} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {newsTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {newsHeadline}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {open && (
        <NewsModal
          opened={open}
          newsImage={imageLink}
          newsTitle={newsTitle}
          newsContent={newsContent}
          onConfirm={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default News;
