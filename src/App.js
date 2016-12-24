import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredCounters: [],
      needWater: 'No'
    };

    this.status = this.status.bind(this);
    this.registerCounter = this.registerCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  status(counter) {
    this.updateCounter(counter);

    // If you've had more alcohol than water then you need water
    this.setState((prevState) => {
      const isDrunk = prevState.registeredCounters[0].count > prevState.registeredCounters[1].count;
      const getWater = isDrunk ? 'Yes' : 'No';
      return({
        needWater: getWater
      })
    });
  }

  updateCounter(counter) {
    this.setState((prevState) => {
      let newState = [];

      prevState.registeredCounters.forEach((registeredCounter) => {
        // Increment the count of the counter that was updated
        if(counter.name === registeredCounter.name) {
          registeredCounter.count++;
        }
        newState.push(registeredCounter);
      });

      return({
        registeredCounters: newState
      })
    });
  }

  registerCounter(counter) {
    // Register any counters that are child components
    this.setState((prevState) => {
      // Use empty array if no counters exist
      const counters = prevState.registeredCounters.length > 0 ? prevState.registeredCounters : [];

      counters.push(counter);

      return({
        registeredCounters: counters
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
        <h3>Do you need water? {this.state.needWater}</h3>
        <Counter increment={1} name="Alcohol" onClick={this.status} registerCounter={this.registerCounter} />
        <Counter increment={1} name="Water" onClick={this.status} registerCounter={this.registerCounter} />
      </div>
    );
  }
}

export default App;
