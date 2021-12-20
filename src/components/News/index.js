/* eslint-disable @next/next/no-img-element */
import NewsModal from "components/NewsModal";
import React from "react";
import { useState } from "react";
import style from "./News.module.css";

const News = ({ imageLink, newsTitle, newsHeadline, newsContent, key }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={style.news} onClick={() => setOpen(true)}>
        <img src={imageLink} className={style.newsImage} alt={""} />
        <div className={style.newsTitle}> {newsTitle} </div>
        <div className={style.newsHeadline}> {newsHeadline} </div>
      </div>
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
