import React from "react";
import css from "./ArticleImage.module.css"

const ArticleImage = ({url, title}) => {
  return (
    <img className = {css.imageStyle} src={url} alt={title} />
  );
};

export default ArticleImage;
