import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};

    this.increment = this.increment.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  // Register a counter only when its mounted
  componentDidMount() {
    const counter = {
      name: this.props.name,
      count: this.state.counter
    };

    this.props.registerCounter(counter);
  }

  onClick() {
    this.increment();

    const counter = {
      name: this.props.name,
      count: this.state.counter
    };

    this.props.onClick(counter); // Passed down from parent
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
      <div className="counter" onClick={this.onClick}>
        <div className="counter-container">
          <div className="title">{this.props.name}</div>
          <p className="count">{this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default Counter;