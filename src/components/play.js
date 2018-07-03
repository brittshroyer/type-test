import React, { Component } from 'react';
import Words from './words';
import Input from './input';
import StopWatch from './stopwatch';

class Play extends Component {

  constructor(props) {
    super(props);
    this.state = {hasStarted: false};
  }

  onStart = (secondsRemaining) => {
    this.StopWatch.countDown(secondsRemaining);
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

  onType(e) {

    if (!this.state.hasStarted) {
      this.setState({hasStarted: true});
      this.onStart(60);
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

      console.log('Score: ', score);
    }

  }
  //TODO need to set hasStarted back to false at some point? componentWillUnmount?

  render() {
    let startClock = this.state.startClock,
        hasStarted = this.state.hasStarted;
    return (
      <div className="play">
        <StopWatch hasStarted={hasStarted} onRef={ref => (this.StopWatch = ref)}/>
        <Words ref="words"/>
        <Input onType={ this.onType.bind(this) }/>
      </div>
    )
  }

}

export default Play;
