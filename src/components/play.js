import React, { Component } from 'react';
import Words from './words';
import Input from './input';

class Play extends Component {

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
    let typed = e.target.value,
        typedWords = typed.split(' '),
        length = typedWords.length,
        currentIndex = length - 1;

    let currentWord = typedWords[currentIndex],
        space = ' ',
        fullWord = currentWord.concat(space);

    if (fullWord === this.state.words[currentIndex].word) {
      let words = this.state.words;

      words[currentIndex].correct = true;
      this.setState({
        words
      });

    }
  }

  render() {
    return (
      <div className="play">
        <Words ref="words"/>
        <Input onType={ this.onType.bind(this) }/>
      </div>
    )
  }

}

export default Play;
