import React from 'react';
import style from "./Slide.module.css";
import Proptypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Slide = ({
  title,
  content,
  image,
  showText,
  ...rest
}) => {

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className={
        style.slide
      } >
      {
        (title && showText) &&
        <div
          className={
            style.slide__title
          }>
          <h3
            className={
              style.title
            }>{title}</h3>
        </div>
      }
      {
        (content && showText) &&
        <div className={
          style.slide__content
        }>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      }
    </div >
  )
}

Slide.proptypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  image: Proptypes.string.required,
}

export default Slide;