import React from 'react';
import { NewsTitle } from '../../components/NewsTitle';

export const NewsContainer = (props) => {
  let uuidv4 = require("uuid/v4");
  const {articles} = props;
  
  const displayArticles = articles.map(article => (
    <NewsTitle
      article={article}
      key={uuidv4()}
    />
  ));

  return (
    <section>
      { displayArticles }
    </section>
  )
};

