import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Pictures from './components/Pic-container/';
import images from './images';
import './App.css';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,

    allPictures: this.dogsArray(),

    clicked: []

  };

  clickEvent = this.isClicked.bind(this);
  

  dogsArray() {

    const newArray = images.slice();

    const randomized = [];

    while(newArray.length > 0) {
      randomized.push(newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]);
    }

    return randomized;
  }

  isClicked(clicked) {
    const previousState = this.state.clicked.slice();

    const random = this.dogsArray();

    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.clicked.includes(clicked)) {
      if(score === highScore) {
        score++;
        highScore++;
      }else {
        score++;
      }
      previousState.push(clicked);
    }
    
    if (this.state.clicked.includes(clicked)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        allPictures: random,
        clicked: [],
      });
    }

    this.setState({
      score: score,
      highScore: highScore,
      allPictures: random,
      clicked: previousState
    });    
  }

  render() {
    const state = this.state;
    return (
      <div>
        <NavBar
          score={state.score}
          highScore={state.highScore}
        />
        <Jumbotron />
        <Pictures
        dogs={state.allPictures}
        clickEvent={this.clickEvent}
        />
      </div>
    );
  }
}



export default App;
