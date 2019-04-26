import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <a href="#"><h1> TheStoneStore </h1></a> <hr />
        <Cards />
        <Cards />
        <Cards />
      </div>
    );
  }
}

export default App;
