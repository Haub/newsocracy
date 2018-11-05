import React from 'react';

export const NewsTitle = ({ article }) => {

  return (
    <div className='container'>
      <article className='left column'>
          <h3>{article.title}</h3>
          <p>{article.source.name}</p>
          <p>{article.date}</p>
      </article> 
    </div>
  )

};