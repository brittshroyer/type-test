import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsRemaining: 60};
  }

  componentDidUpdate() {
    if (this.props.hasStarted) {
      this.initiateCountDown();
    }
  }

  initiateCountDown() {
    //something here
  }

  render() {

    return (
      <div>
        <h1>{this.props.secondsRemaining}</h1>
        <h3>Start Typing to Begin</h3>
      </div>
    )
  }
}

export default Stopwatch;
