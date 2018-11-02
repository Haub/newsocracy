import React, { Component } from 'react';
import { getNews } from '../../utilities/helper';
import { Router, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategoryNews } from '../../actions';
import { NewsContainer } from '../NewsContainer';
import './App.css';

class App extends Component {

  handleClick = async(category) => {
    const updatedNews = await getNews(category);
    console.log(updatedNews)
    this.props.addCategoryNews(updatedNews);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title"> news-ocracy</h1>
          <h5 className="sub-title"> seek perspectives.  identify bias.  engage in civil discourse. </h5>
        </header>
        <section className="button-container">
          <NavLink to="/immigration" activeClassName="selected">
            <button 
              className="topic-button"
              name='immigration'
              onClick={this.handleClick('immigration')}
            >
              Immigration
            </button>
          </NavLink>

          <NavLink to="/climate" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={this.handleClick('climate')}
            >
              Climate Change
            </button>
          </NavLink>
          <NavLink to="/midterms" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={this.handleClick('midterm, elections')}
            >
              Midterm Elections
            </button>
          </NavLink>
          <NavLink to="/healthcare" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={this.handleClick('healthcare')}
            >
              Healthcare
            </button>
          </NavLink>
          <NavLink to="/refugees" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={this.handleClick('refugees')}
            >
              Refugees
            </button>
          </NavLink>
        </section>
        <div className="routes">
          <NewsContainer />
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addCategoryNews: (articles) => dispatch(addCategoryNews(articles))
});
// export default App;

export default withRouter(connect(null, mapDispatchToProps)(App));
