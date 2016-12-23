import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.props = {increment: 5};

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Blue To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.increment}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default App;
