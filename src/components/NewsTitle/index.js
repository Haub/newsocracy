import React from 'react';

export const NewsTitle = ({ article }) => {


  return (
    <div>
    
    {
      article.category ==='left' && 
        <article>
          <h3>{article.title} <span>{article.author}</span></h3>
        </article> 
    }

    {
      article.category ==='center' && 
        <article>
          <h3>{article.title} <span>{article.author}</span></h3>
        </article> 
    }

    {
      article.category ==='right' && 
        <article>
          <h3>{article.title} <span>{article.author}</span></h3>
        </article> 
    }

    </div>
  )
  
}