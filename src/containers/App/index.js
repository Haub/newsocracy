import React, { Component } from 'react';
import { getNews } from '../../utilities/helper';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() {
  
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
              onClick={()=>getNews('immigration')}
            >
              Immigration
            </button>
          </NavLink>

          <NavLink to="/climate" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>getNews('climate')}
            >
              Climate Change
            </button>
          </NavLink>
          <NavLink to="/midterms" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>getNews('midterm, elections')}
            >
              Midterm Elections
            </button>
          </NavLink>
          <NavLink to="/healthcare" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>getNews('healthcare')}
            >
              Healthcare
            </button>
          </NavLink>
          <NavLink to="/refugees" activeClassName="selected">
            <button 
              className="topic-button"
              onClick={()=>getNews('refugees')}
            >
              Refugees
            </button>
          </NavLink>
        </section>
        <div className="routes">
      
        </div>
      </div>
    );
  }
}

export default App;
