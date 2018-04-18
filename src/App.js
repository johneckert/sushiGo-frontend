import React, { Component } from 'react';
import Nav from './components/Nav.js';
import SushiContainer from './containers/SushiContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <SushiContainer />
      </div>
    );
  }
}

export default App;
