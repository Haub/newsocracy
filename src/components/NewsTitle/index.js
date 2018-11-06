import React from 'react';
import { Link } from 'react-router-dom';
import './NewsTitle.css';

export const NewsTitle = ({ article }) => {

  return (
    <div className='container'>
      <article className='article'>
          <img src={article.image} className='article-image' alt='' width='50%' height='50%' />
          <div className='article-container'>
            <Link to={`/${article.category}/${article.id}`} >
              <h3 className='article-title'>{article.title}</h3>
            </Link>
            <p className='article-source'>{article.source.name}</p>
          </div>
      </article> 
    </div>
  )

};
