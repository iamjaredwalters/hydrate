import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
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
      <div className="counter" onClick={this.increment}>
        <div className="counter-container">
          <div className="title">{this.props.name}</div>
          <p className="count">{this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default Counter;