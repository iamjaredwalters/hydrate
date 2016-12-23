import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return ({
        counter: prevState.counter + this.props.increment
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hydrate</h2>
        </div>
        <Counter increment={1} />
        <Counter increment={1} />
      </div>
    );
  }
}

export default App;
