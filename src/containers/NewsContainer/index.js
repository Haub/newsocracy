import React from 'react';
import { connect } from 'react-redux';
import { NewsTitle } from '../../components/NewsTitle';

export const NewsContainer = () => {

  const {articles} = props;
  let uuidv4 = require("uuid/v4");

  const displayLeft = articles.left.map(leftArticle => (
    <NewsTitle
      {...leftArticle}
      key={uuidv4()}
    />
  ))

  const displayCenter = articles.center.map(centerArticle => (
    <NewsTitle
      {...centerArticle}
      key={uuidv4()}
    />
  ))

  const displayRight = articles.right.map(rightArticle => (
    <NewsTitle
      {...rightArticle}
      key={uuidv4()}
    />
  ))
  
  return (
    <section>
      <article className='left-container'> {displayLeft} </article>
      <article className='center-container'> {displayCenter} </article>
      <article className='right-container'> {displayRight} </article>
    </section>
  )
};


export const mapStateToProps = (state) => ({
  articles: state.articles
});

export default connect(mapStateToProps)(NewsContainer);
