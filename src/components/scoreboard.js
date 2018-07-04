import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <h2>{this.props.score}</h2>
    )
  }
}

export default Scoreboard;
