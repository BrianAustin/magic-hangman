import React, { Component } from 'react';
import './App.css';
import Game from './game';
import Instructions from './instructions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGame: false
    };

    this.buttonToggle = this.buttonToggle.bind(this);
  }

  buttonToggle() {
    this.setState({showGame: true})
  }

  render() {
    return (
      <div className="App">
        
        {this.state.showGame ? <Game /> : <Instructions showGame={this.state.showGame} buttonToggle={this.buttonToggle} />}

      </div>
    );
  }
}

export default App;
