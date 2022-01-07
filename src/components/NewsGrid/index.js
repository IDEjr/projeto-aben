import React from "react";
import style from "./NewsGrid.module.css";
import News from "../News/index";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";

const NewsGrid = ({
  limitItems,
  hasGridHeader,
  newsData = [],
}) => {
  const router = useRouter();
  const handleClick = () => router.push("/Noticias");

  const defaultNumberOfNewsToRender = 6;
  const numberOfNewsToRender = limitItems
    ? defaultNumberOfNewsToRender
    : newsData.length;

  return (
    <Container>
      {hasGridHeader && (
        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h4">
            Notícias
          </Typography>
          <Button variant="outline" onClick={handleClick}>
            Mais {"\u2794"}
          </Button>
        </Box>
      )}

      <Grid container spacing={2}>
        {
          newsData
            .slice(0, numberOfNewsToRender)
            .map((item) => (
              <Grid item key={item.fileName}
                xs={12}
                md={4}>
                <News
                  imagemNoticia={item.imagem}
                  mancheteNoticia={item.manchete}
                  dataNoticia={item.data}
                  fileName={item.fileName}
                />
              </Grid>
            ))
        }

      </Grid>

    </Container>
  );
};

export default NewsGrid;
