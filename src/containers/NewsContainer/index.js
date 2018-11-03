import React from 'react';
import { connect } from 'react-redux';
import { NewsTitle } from '../../components/NewsTitle';

export const NewsContainer = (props) => {
  const {articles} = props;
  console.log(articles)
  

  let uuidv4 = require("uuid/v4");
  
  const displayArticles = articles.map(article => (
    <NewsTitle
      article={article}
      key={uuidv4()}
    />
  ))

  
  return (
    <section>
      { displayArticles }
    </section>
  )
};


// export const mapStateToProps = (state) => ({
//   articles: state.articles
// });

// export default connect(mapStateToProps, null)(NewsContainer);
