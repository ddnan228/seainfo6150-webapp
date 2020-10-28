import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx"
import PropTypes from "prop-types"
import css from "./ArticleList.module.css"

const ArticleList = props => {
  return (
    <ul className = {css.articleList}>
      {props.articles.map(article => (
        <li className = {css.articleBlock} key={article.slug}>
          <ArticleListItem article ={article} />
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
