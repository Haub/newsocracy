import React from 'react';
import './NewsTitle.css';

export const NewsTitle = ({ article }) => {

  return (
    <div className='container'>
      <article className='article'>
          <img src={article.image} className='article-image' width='50%' height='50%' />
          <div className='article-container'>
            <h3 className='article-title'>{article.title}</h3>
            <p className='article-source'>{article.source.name}</p>
          </div>
      </article> 
    </div>
  )

};