import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (props) => {
  return (
    <article>
        <h1>{props.article.title}</h1>
        <p>{props.article.displayDate} {props.article.pubYear}<br /></p>
        <p>{props.article.shortText}</p>
    </article>
  );
};

export default ArticleListItem;
