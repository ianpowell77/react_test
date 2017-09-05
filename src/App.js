import React, { Component } from 'react';
import './App.css';
import Standard from './Standard'
import Expert from './Expert'

class App extends Component {

  constructor(){
    super();
    this.handleStandardClick = this.handleStandardClick.bind(this);
    this.handleExpertClick = this.handleExpertClick.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    this.state = {
      gameHead: 'Start Game',
      gameMode: '',
      randomNumber: 0,
      guess: '',
      message: 'Guess your number!',
      hint: '',
      counter: 1,
      standardHighScore: 0,
      expertHighScore: 0,
    };
  };


  handleResetClick(){
    this.setState({
      gameHead: 'Start Game',
      gameMode: '',
      randomNumber: 0,
      guess: '',
      message: 'Guess your number!',
      hint: '',
      counter: 1,
    });
  };

  handleStandardClick(){
    this.setState({
      gameMode: 'standard',
      randomNumber: Math.floor(Math.random()*11),
      gameHead: 'Start Guessing',
    });
  };

  handleExpertClick(){
    this.setState({
      gameMode: 'expert',
      randomNumber: Math.floor(Math.random()*101),
      gameHead: 'Start Guessing',
    });
  };

  getGuess(event){
    var userInput = parseInt(event.target.value, 10);
    this.setState({
      guess: userInput,
    });
  };



  checkGuess(){

    this.setState({
      counter: this.state.counter + 1,
    });

    if (this.state.gameMode === 'standard'){
      if (this.state.counter > this.state.standardHighScore){
        this.setState({
          standardHighScore: this.state.standardHighScore + 1,
        });
      };
    } else {
      if (this.state.counter > this.state.expertHighScore){
        this.setState({
          expertHighScore: this.state.expertHighScore + 1,
        })
      };
    };

    let plurality;

    if (this.state.counter > 1){
      plurality = 's'
    } else {
      plurality = ''
    };

    let guesses;

    if (this.state.gameMode === 'standard'){
      guesses = this.state.standardHighScore + 1;
    } else {
      guesses = this.state.expertHighScore + 1;
    };

    if (this.state.guess === this.state.randomNumber){
      this.setState({
        message: 'Congratulations, you guessed the number after ' + guesses + ' attempt' + plurality,
        hint: ''
      });
    } else if (this.state.guess > this.state.randomNumber) {
      this.setState({
        message: 'Try Again, you have made ' + guesses + ' attempt' + plurality,
        hint: 'Your number was too high',
      });
    } else {
      this.setState({
        message: 'Try Again, you have made ' + guesses + ' attempt' + plurality,
        hint: 'Your number was too low'
      });
    };
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.gameHead}!</h1>
        <div className="standard-hs">
        <p>Standard High Score: {this.state.standardHighScore}</p>
        </div>
        <div className="expert-hs">
        <p>Expert High Score: {this.state.expertHighScore}</p>
        </div>
        <Standard start={this.handleStandardClick} />
        <Expert start={this.handleExpertClick} />
        <input type="text" id="guess" name="guess" onChange={this.getGuess}/>
        <input type="submit" value="submit" onClick={this.checkGuess}/>
        <p>{this.state.message}</p>
        <p>{this.state.hint}</p>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

export default App;