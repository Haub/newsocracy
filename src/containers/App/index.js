import React, { Component } from 'react';
import { getNews } from '../../utilities/helper';
import './App.css';

class App extends Component {

  componentDidMount() {
    getNews()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> news-ocracy</h1>
        </header>
      </div>
    );
  }
}

export default App;
