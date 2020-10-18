import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx"

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const result = await fetch("http://demo1390455.mockable.io/articles");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;

  if (!isEmpty(fetchedData)) {
    displayContent = (
      <div className="App">
        <Switch>
          <Route>
            <ArticleList articles={Object.values(fetchedData)} />
          </Route>
        </Switch>
      </div>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    displayContent
  );
};

export default App;
