import React from 'react';
import { NewsTitle } from '../../components/NewsTitle';
import './NewsContainer.css';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export const NewsContainer = (props) => {
  const {articles} = props;

  const displayLeft = articles.slice(0, 20).map(article => {
    return (
      <NewsTitle
        article={article}
        key={uuid()}
      />)
  });


  const displayCenter = articles.slice(20,40).map(article => {
    return (
      <NewsTitle
        article={article}
        key={uuid()}
      />)
  });

  const displayRight = articles.slice(40, 60).map(article => {
    return (
      <NewsTitle
        article={article}
        key={uuid()}
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

NewsContainer.propTypes = {
  articles: PropTypes.array
}

