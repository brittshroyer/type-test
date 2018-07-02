import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Play from './components/play';

class App extends Component {

  constructor() {
    super();
    this.state = {render:'', isButtonVisible: true};
  }

  handleClick(compName) {
    this.setState({render: compName, isButtonVisible: false});
  }

  renderSubComponent() {
    switch(this.state.render) {
      case 'play': return <Play />;
    }
  }

  render() {
    let button = <button className="start-button" onClick={this.handleClick.bind(this, 'play')}>Start</button>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How Fast Can You Type?</h1>
        </header>

        {this.state.isButtonVisible && button}

        {this.renderSubComponent()}
      </div>
    );
  }
}

export default App;
