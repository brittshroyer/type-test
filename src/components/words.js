import React, { Component } from 'react';

class Words extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "My name is Happy Gilmore. Ever since I was old enough to skate, I loved hockey. I wasn't the greatest skater though. But that didn't stop my dad from teaching me the secret of slapping the greatest slapshot. My dad worshiped hockey, my mom didn't, that's why she moved to Egypt, where there's not a hockey rink within 15 hundred miles. Dad always took me to games to cheer for our favorite player, Terry O'Riley, the Tazmanian Devil. He wasn't the biggest guy in the league, but he feared nobody, just like me. Handsome fellow huh? He always said that when I grew up I could be anything I wanted to be, but I never wanted to be anything but a hockey player. Yeah my childhood was going great, but life is full of surprises. After the funeral, I was sent to live with my grandma in Waterberry. I was kinda nervous since I really didn't know her that well, but she dressed like Gene Simmons from KISS to cheer me up, she's the sweetest person in the world. See after my dad died I developed kinda a short fuse. You see that kid over there just stole my party blower, and instead of asking for it back, I felt that I had to belt him in the head a bunch of times with a hammer. Look at me go. But I was always quick to say I was sorry. During high school I played junior hockey and still hold two league records most time spent in the penalty box, and I was the only guy to ever take off his skate and try to stab someone. After I graduated I had a lot of different jobs I was a road worker, a janitor, a security guard, a gas station attendant, and a plumber. Lately I've been working construction, it's not a bad racket, I'm a pretty good shot with a nail gun, but one day my boss, Mr. Larson, uh got in the way. Apparently he also has a short fuse. Look at that monster. He got a few lucky punches in there, but I still feel I won the fight. Anyways, those other jobs weren't for me. I was put on this planet for one reason, to play hockey.",
      correct: [],
      incorrect: []
    }
  }



  render() {

    let text = this.state.text;

    let words = text.split(' ').map((word, index) => {
      return <span className="element" key={index}>{ word }{' '}</span>
    })
    return (
      <div className="content" ref="monologue">
        { words }
      </div>
    )
  }
}

export default Words;
