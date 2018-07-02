import React, { Component } from 'react';
import Words from './words';
import Input from './input';
import StopWatch from './stopwatch';

class Play extends Component {

  constructor(props) {
    super(props);
    this.state = {hasStarted: false};
  }

  componentDidMount() {
    const content = this.refs.words.refs.monologue.querySelectorAll('div span'),
          words = [];

    content.forEach(word  => {
      let content = word.innerHTML;
      words.push({
        word: content,
        correct: false
      });
    });

    this.setState({
      words,
    });
  }

  startClock() {

  }

  onType(e) {

    if (!this.state.hasStarted) {
      this.setState({hasStarted: true});
    }

    let typed = e.target.value,
        typedWords = typed.split(' '),
        length = typedWords.length,
        currentIndex = length - 1;

    let currentWord = typedWords[currentIndex],
        space = ' ',
        fullWord = currentWord.concat(space), // not always a space after
        words = this.state.words,
        score;

    if (fullWord === this.state.words[currentIndex].word) {
      words[currentIndex].correct = true;
      this.setState({
        words
      });

      score = words.filter(word => word.correct === true).length;
    }

  }

  render() {
    let startClock = this.state.startClock;

    return (
      <div className="play">
        <StopWatch hasStarted={hasStarted}/>
        <Words ref="words"/>
        <Input onType={ this.onType.bind(this) }/>
      </div>
    )
  }

}

export default Play;
