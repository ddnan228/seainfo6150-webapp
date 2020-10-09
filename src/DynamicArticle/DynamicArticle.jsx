import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>{props.article.title}</h1>
        <p><i>by {props.article.author} (<a href={props.article.authorEmail}>{props.article.authorEmail}</a>)</i><br /></p>
        <p>{props.article.displayDate} {props.article.pubYear}</p>
        </header>
      <main>
        <HTMLText text={props.article.text} />
      </main>
      <p><br /> Published time stamp: {props.article.timeStamp}</p>
    </article>
  );
};

export default DynamicArticle;
