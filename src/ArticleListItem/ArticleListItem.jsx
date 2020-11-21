import React, { useCallback, useState } from "react";
import HTMLText from "../HTMLText/HTMLText";
import css from "./ArticleListItem.module.css"
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import ArticleImage from "../ArticleImage/ArticleImage"

const ArticleListItem = (props) => {
  const [buttonText, setText] = useState("Show more");
  const onClick = useCallback(
    event => {
      event.preventDefault();
      setText(buttonText === "Show more" ? "Show less" : "Show more");
    },
    [buttonText]
  );

  let content;
  if (buttonText === "Show less") {
    content = <div>
                <p>{props.article.shortText}</p>
                <p className = {css.time}>{props.article.displayDate}</p>
              </div>;
  } else {
    content = "";
  }

  return (
    <div className = {css.listItem}>
      <div>
        <ArticleImage url = {props.article.image._url} title = {props.title} />
        <h1 className = {css.articleTitle}><u>{props.article.title}</u></h1>
      </div>
      {content}
      <ArticleTextToggleButton buttonText = {buttonText} onClick = {onClick} />
    </div>
  );
};

export default ArticleListItem;
