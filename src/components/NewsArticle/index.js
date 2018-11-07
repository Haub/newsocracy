import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

export const NewsArticle = ({ author, category, date, id, image, title, url, content }) => {
  
  return (
    <div className='article-page'>
      <h1 className='article-content headline'>{title}</h1>
      <img src={image} alt='' width='98%' />
      <hr />
      <h6 className='article-content author'>{author}</h6>
      <h6 className='article-content date'>{date}</h6>
      <hr />
      <hr />
      <p className='article-content story'>{content}</p>
      <a href={url} className='article-content url' target='_blank' rel='noopener noreferrer'>
        Read More
      </a>
    </div>

  )
}

NewsArticle.propTypes = {
  author: PropTypes.string,
  category: PropTypes.string, 
  date: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string
}
