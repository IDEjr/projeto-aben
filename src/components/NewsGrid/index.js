import React from "react";
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
  const handleClick = () => router.push("/noticias");

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
          mb={2}
        >
          <Typography variant="h4">
            Notícias
          </Typography>
          <Button variant="outline" onClick={handleClick}>
            Mais {"\u2794"}
          </Button>
        </Box>
      )}

      <Grid container spacing={2} >
        {newsData.slice(0, numberOfNewsToRender).map((item) => (
          <Grid item key={item.fileName}
            xs={12}
            md={4}>
            <News
              imagemNoticia={item.banner}
              mancheteNoticia={item.title}
              dataNoticia={item.date}
              fileName={item.fileName}
              useRedirect={item.useRedirect}
              url={item.url}
            />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default NewsGrid;
