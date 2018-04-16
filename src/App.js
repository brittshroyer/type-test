import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Words from './components/words';
import Input from './components/input';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   }
  // }

  componentDidMount() {
    const content = this.refs.words.refs.monologue.innerHTML,
          elements = content.split(''),
          words = content.split(' '),
          wordCount = words.length;

    console.log('wordCount', wordCount);

    this.setState({
      elements,
      words
    });
  }

  onType(e) {
    let answer = e.target.value,
        answerWords = answer.split(' '),
        length = answerWords.length,
        currentIndex = length - 1;

    this.setState({
      answer
    });
    //
    // if (this.state.elements[currentIndex] !== answer.slice(-1)) {
    //   console.log('wrong answer bitch');
    //
    // }


    if (answerWords[currentIndex] !== this.state.words[currentIndex]) {
      console.log('wrong word');
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Words ref="words"/>
        <Input onType={ this.onType.bind(this) }/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
