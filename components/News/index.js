/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./News.module.css";

const News = ({ imageLink, newsTitle, newsHeadline, key }) => {
  return (
    <div className={style.news}>
      <img src={imageLink} className={style.newsImage} alt={""} />
      <div className={style.newsTitle}> {newsTitle} </div>
      <div className={style.newsHeadline}> {newsHeadline} </div>
    </div>
  );
};

export default News;
