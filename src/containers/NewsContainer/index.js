import React from 'react';
import { connect } from 'react-redux';
import { NewsTitle } from '../../components/NewsTitle';

export const NewsContainer = (props) => {
  const {articles} = props;

  console.log(typeof articles)
  console.log(typeof articles.left)

  let uuidv4 = require("uuid/v4");
  
  // const displayLeft = articles.left.map(leftArticle => (
  //   <NewsTitle
  //     leftArticle={leftArticle}
  //     key={uuidv4()}
  //   />
  // ))

  // const displayCenter = articles.center.map(centerArticle => (
  //   <NewsTitle
  //     centerArticle={centerArticle}
  //     key={uuidv4()}
  //   />
  // ))

  // const displayRight = articles.right.map(rightArticle => (
  //   <NewsTitle
  //     rightArticle={rightArticle}
  //     key={uuidv4()}
  //   />
  // ))
  
  return (
    <section>
      <article className='left-container'>  </article>
      <article className='center-container'>  </article>
      <article className='right-container'>  </article>
    </section>
  )
};


// export const mapStateToProps = (state) => ({
//   articles: state.articles
// });

// export default connect(mapStateToProps, null)(NewsContainer);
