import React from "react";
import style from "./NewsGrid.module.css";
import News from "../News/index";
import { ButtonBase } from "../ButtonBase/index";
import news from "./data";

const NewsGrid = ({ renderAllNews = true, hasGridHeader = false }) => {
  const defaultNumberOfNewsToRender = 6;
  const numberOfNewsToRender = renderAllNews
    ? news.length
    : defaultNumberOfNewsToRender;

  const newsToRender = news
    .slice(0, numberOfNewsToRender)
    .map((item) => (
      <News
        imageLink={item.imageUrl}
        newsTitle={item.title}
        newsHeadline={item.headline}
        key={item.key}
      />
    ));

  return (
    <div>
      {hasGridHeader && (
        <div className={style.gridHeader}>
          <h1 className={style.text}>Notícias</h1>
          <ButtonBase
            style={{
              marginRight: "2rem",
              marginLeft: "auto",
              alignSelf: "flex-end",
            }}
            color="light"
            onClick={() => console.log("apertou no botaoo aee")}
          >
            Mais {"\u2794"}
          </ButtonBase>
        </div>
      )}
      <div className={style.grid}>{newsToRender}</div>
    </div>
  );
};

export default NewsGrid;
