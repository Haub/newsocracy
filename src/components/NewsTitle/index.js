import React from 'react';
import './NewsTitle.css';

export const NewsTitle = ({ article }) => {

  return (
    <div className='container'>
      <article className='left column'>
          <h3>{article.title} 
          <p>{article.source.name}</p>
          <p>{article.date}</p>
          </h3>
      </article> 
    </div>
  )

};