import React from 'react';
import './NewsTitle.css';

export const NewsTitle = ({ article }) => {


  return (
    <div className='container'>
    
    {
      article.category ==='left' && 
        <article className='left column'>
          <img src={article.image} height='30px' width='30px' alt='' />
            <h3>{article.title} 
            <p>{article.source.name}</p>
            <p>{article.date}</p>
            </h3>
        </article> 
    }

    {
      article.category ==='center' && 
        <article className='center column'>
          <img src={article.image} height='30px' width='30px' alt='' />
          <h3>{article.title} 
            <p>{article.source.name}</p>
          </h3>
        </article> 
    }

    {
      article.category ==='right' && 
        <article className='right column'>
        <img src={article.image} height='30px' width='30px' alt='' />
          <h3>{article.title} 
            <p>{article.source.name}</p>
          </h3>
        </article> 
    }

    </div>
  )
  
}