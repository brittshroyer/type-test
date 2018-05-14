import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsRemaining: 60};
  }

  render() {
    return (
      <div>
        <h1>{this.state.secondsRemaining}</h1>
        <h3>Start Typing to Begin</h3>
      </div>
    )
  }
}

export default Stopwatch;
