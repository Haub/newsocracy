import React, { Component } from 'react';
import { getNews } from '../../utilities/helper';
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
          <button 
            className="topic-button"
            onClick={()=>getNews('immigration')}
          >
            Immigration
          </button>
          <button 
            className="topic-button"
            onClick={()=>getNews('climate')}
          >
            Climate Change
          </button>
          <button 
            className="topic-button"
            onClick={()=>getNews('midterm, elections')}
          >
            Midterm Elections
          </button>
          <button 
            className="topic-button"
            onClick={()=>getNews('healthcare')}
          >
            Healthcare
          </button>
          <button 
            className="topic-button"
            onClick={()=>getNews('refugees')}
          >
            Refugees
          </button>
        </section>
      </div>
    );
  }
}

export default App;
