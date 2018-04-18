import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Words from './components/words';
import Input from './components/input';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correct: 0
    }
  }

  componentDidMount() {
    const content = this.refs.words.refs.monologue.querySelectorAll('div span'),
          words = [];

    content.forEach(word => {
      words.push(word.innerHTML);
    });
          // words = content.split(' '),
          // wordCount = words.length;

    console.log('content', words);

    // this.setState({
    //   words
    // });
  }

  onType(e) {
    let answer = e.target.value,
        answerWords = answer.split(' '),
        length = answerWords.length,
        currentIndex = length - 1;


    this.setState({
      answer
    });

    // if (this.state.words[currentIndex] === answerWords[currentIndex]) {
    //   words[currentIndex]
    //   // highlight word in green
    //   //push index to array
    // } else {
    //   // highlight word in red
    // }

      // to get correct count - remove all duplicates from correct count array and get length of arrays


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Words color={ this.state.color } ref="words"/>
        <Input onType={ this.onType.bind(this) }/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
