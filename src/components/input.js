import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <textarea
        onKeyUp={this.props.onType}
        placeholder="Type Here"    
      />
    )
  }
}

export default Input;
