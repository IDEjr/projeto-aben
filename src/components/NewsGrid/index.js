import React from "react";
import style from "./NewsGrid.module.css";
import News from "../News/index";
import { Button, Container, Stack, Typography } from "@mui/material";
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
        imagemNoticia={item.imagem}
        mancheteNoticia={item.manchete}
        dataNoticia={item.data}
        idNoticia={item.noticiaId}
        key={item.key}
      />
    ));

  return (
    <Container>
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
    </Container>
  );
};

export default NewsGrid;
