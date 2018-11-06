import React from 'react';
import { NewsTitle } from '../../components/NewsTitle';
import { Route } from 'react-router-dom';
import { NewsArticle } from '../../components/NewsArticle';
import './NewsContainer.css';

export const NewsContainer = (props) => {
  let uuidv4 = require("uuid/v4");
  const {articles} = props;

  const displayLeft = articles.slice(0, 20).map(article => {
    const id = uuidv4();
    return (
      <NewsTitle
        article={article}
        key={id}
      />)
  });


  const displayCenter = articles.slice(20,40).map(article => {
    const id = uuidv4();
    return (
      <NewsTitle
        article={article}
        key={id}
      />)
  });

  const displayRight = articles.slice(40, 60).map(article => {
    const id = uuidv4();
    return (
      <NewsTitle
        article={article}
        key={id}
      />)
  });

  return (
    <main className='news-container'>
      <section className='left column'>
        <h2 className='left-title'>From the Left:</h2>
        { displayLeft }
      </section>
      <section className='center column'>
        <h2 className='center-title'>From the Center:</h2>
        { displayCenter }
      </section>
      <section className='right column'>
        <h2 className='right-title'>From the Right:</h2>
        { displayRight }
      </section>
    </main>
    
  )
};

