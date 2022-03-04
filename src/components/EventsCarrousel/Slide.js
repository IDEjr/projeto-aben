import React from 'react';
import style from "./Slide.module.css";
import Proptypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Box } from '@mui/system';
import Image from 'next/image';
import { CardActionArea, CardMedia, IconButton } from '@mui/material';
import { useRouter } from "next/router";

const Slide = ({
  title,
  banner,
  fileName,
  ...rest
}) => {
  const router = useRouter();

  return (
    <Box height="auto" maxHeight="400px" width="100%" borderRadius={1}>
      <CardActionArea
        onClick={() => router.push(`/eventos/${fileName}`)}>
        <CardMedia
          component="img"
          src={"/" + banner}
          sx={{
            height: "400px",
            objectFit: "contain"
          }}
        >
        </CardMedia>
      </CardActionArea>
    </Box>
  )
}

Slide.proptypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  image: Proptypes.string.required,
}

export default Slide;