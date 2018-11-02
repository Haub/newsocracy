import React from 'react';
import { connect } from 'react-redux';

export const NewsContainer = () => {

  return (
    <div>
    </div>
  )
};


export const mapStateToProps = (state) => ({
  articles: state.articles
});

export default connect(mapStateToProps)(NewsContainer);
