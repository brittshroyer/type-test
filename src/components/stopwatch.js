import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsRemaining: '1:00'};
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  updateTimer(timeRemaining){
    let secondsRemaining = timeRemaining % 60;
    this.setState({
      secondsRemaining,
    });
  }

  countDown(secondsRemaining){
    this.setState({
      secondsRemaining
    });
    if (secondsRemaining === 0) {
      this.props.onCompletion();
    }
    if (secondsRemaining > 0) {
      this.updateTimer(secondsRemaining);
      secondsRemaining = secondsRemaining-1;
      this.setTimeoutId = setTimeout(this.countDown.bind(this,secondsRemaining), 1000);
    }
  }

  componentWillUnmount(){
    clearTimeout(this.setTimeoutId);
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
