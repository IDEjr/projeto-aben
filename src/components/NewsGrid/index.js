import React from "react";
import style from "./NewsGrid.module.css";
import News from "../News/index";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const NewsGrid = ({
  renderAllNews = true,
  hasGridHeader = false,
  newsData,
}) => {
  const router = useRouter();
  const handleClick = () => router.push("/Noticias");

  const defaultNumberOfNewsToRender = 6;
  const numberOfNewsToRender = renderAllNews
    ? newsData.length
    : defaultNumberOfNewsToRender;

  const newsToRender = newsData
    .slice(0, numberOfNewsToRender)
    .map((item) => (
      <News
        imageLink={item.imagem}
        newsTitle={"Notícia"}
        newsHeadline={item.manchete}
        newsContent={item.texto}
        key={item.key}
      />
    ));

  return (
    <div>
      {hasGridHeader && (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ maxWidth: 1100 }}
        >
          <Typography variant="h4" sx={{ ml: 1.5 }}>
            Notícias
          </Typography>
          <Button variant="outline" sx={{ mr: 1.5 }} onClick={handleClick}>
            Mais {"\u2794"}
          </Button>
        </Stack>
      )}
      <div className={style.grid}>{newsToRender}</div>
    </div>
  );
};

export default NewsGrid;
