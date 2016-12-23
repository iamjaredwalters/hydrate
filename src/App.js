import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hydrate</h2>
        </div>
        <Counter increment={1} name="Alcohol" />
        <Counter increment={1} name="Water" />
      </div>
    );
  }
}

export default App;
