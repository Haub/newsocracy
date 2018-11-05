import React from 'react';
import { NewsTitle } from '../../components/NewsTitle';
import './NewsContainer.css';

export const NewsContainer = (props) => {
  let uuidv4 = require("uuid/v4");
  const {articles} = props;

  const displayLeft = articles.slice(0, 20).map(article => (
    <NewsTitle
      article={article}
      key={uuidv4()}
    />
  ));

  const displayCenter = articles.slice(20,40).map(article => (
    <NewsTitle
      article={article}
      key={uuidv4()}
    />
  ));

  const displayRight = articles.slice(40, 60).map(article => (
    <NewsTitle
      article={article}
      key={uuidv4()}
    />
  ));

  return (
    if(articles) {
      <main className='news-container'>
        <section className='left column'>
          <h2>From the Left:</h2>
          { displayLeft }
        </section>
        <section className='center column'>
          <h2>From the Center:</h2>
          { displayCenter }
        </section>
        <section className='right column'>
          <h2>From the Right:</h2>
          { displayRight }
        </section>
      </main>
    }
  )
};

