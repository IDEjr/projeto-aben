import React from 'react';
import style from "./Slide.module.css";
import Proptypes from "prop-types";

const Slide = ({
  title,
  content,
  image,
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
      }>
      {
        title &&
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
        content &&
        <div className={
          style.slide__content
        }>
          {content}
        </div>
      }
    </div>
  )
}

Slide.proptypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  image: Proptypes.string.required,
}

export default Slide;