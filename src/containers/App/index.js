import React, { Component } from 'react';
import { getNews } from '../../utilities/helper';
import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategoryNews } from '../../actions';
import { NewsContainer } from '../../components/NewsContainer';
import { NewsArticle } from '../../components/NewsArticle';
import './App.css';
import PropTypes from 'prop-types';

export class App extends Component {
  

  handleClick = async(category) => {
    const allNews = await getNews(category);
    this.props.addCategoryNews(allNews);
  }

  render() {
    const { articles } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title"> news-ocracy</h1>
          <h5 className="sub-title"> seek perspective.  identify bias.  engage in civil discourse. </h5>
        </header>
        <section className="button-container">
          <NavLink to="/immigration" activeClassName="selected">
            <button 
              className="topic-button"
              name='immigration'
              onClick={()=>this.handleClick('immigration')}
            >
              Immigration
            </button>
          </NavLink>

          <NavLink to="/climate" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>this.handleClick('climate')}
            >
              Climate Change
            </button>
          </NavLink>
          <NavLink to="/midterms" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>this.handleClick('midterm, elections')}
            >
              Midterm Elections
            </button>
          </NavLink>
          <NavLink to="/healthcare" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>this.handleClick('healthcare')}
            >
              Healthcare
            </button>
          </NavLink>
          <NavLink to="/refugees" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>this.handleClick('refugees')}
            >
              Refugees
            </button>
          </NavLink>
        </section>
        <Switch>
          <Route path='/immigration/:id' render={({match}) => {
            let { id } = match.params;
            const foundArticle = articles.find(article => article.id === id);
            return <NewsArticle {...foundArticle} />
          }} />
          <Route path='/climate/:id' render={({match}) => {
            let { id } = match.params;
            const foundArticle = articles.find(article => article.id === id);
            return <NewsArticle {...foundArticle} />
          }} />
          <Route path='/midterms/:id' render={({match}) => {
            let { id } = match.params;
            const foundArticle = articles.find(article => article.id === id);
            return <NewsArticle {...foundArticle} />
          }} />
          <Route path='/healthcare/:id' render={({match}) => {
            let { id } = match.params;
            const foundArticle = articles.find(article => article.id === id);
            return <NewsArticle {...foundArticle} />
          }} />
          <Route path='/refugees/:id' render={({match}) => {
            let { id } = match.params;
            const foundArticle = articles.find(article => article.id === id);
            return <NewsArticle {...foundArticle} />
          }} />

          <Route path='/immigration' render={() => (<NewsContainer articles={articles}  /> )} />
          <Route path='/climate' render={() => (<NewsContainer articles={articles}  />)} />
          <Route path='/midterms' render={() => (<NewsContainer articles={articles}  />)} />
          <Route path='/healthcare' render={() => (<NewsContainer articles={articles}  />)} />
          <Route path='/refugees' render={() => (<NewsContainer articles={articles}  />)} />
          <Redirect to="/" />
        </Switch>
 
      </div>
    );
  }
}

App.propTypes = {
  articles: PropTypes.array,
  addCategoryNews: PropTypes.func
};

export const mapStateToProps = (state) => ({
  articles: state.articles
});

export const mapDispatchToProps = (dispatch) => ({
  addCategoryNews: (articles) => dispatch(addCategoryNews(articles))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
