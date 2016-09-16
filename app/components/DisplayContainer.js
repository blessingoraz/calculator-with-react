import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles';
import NumberContainer from './NumberContainer';

class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.getTextFromButton = this.getTextFromButton.bind(this);
    this.handleClearScreen = this.handleClearScreen.bind(this);
  }

  getTextFromButton(index) {
    var value = document.getElementsByTagName("BUTTON")[index].textContent;
    var matches = value.match(/\d+/g);

    var tempStore = "";
    if(matches !== null) {
      tempStore = document.getElementById('screen').innerHTML+= value;
    }
    if(value.match(/[+-/*=]/i)) {
      switch(value) {
        case '+' :
          console.log("I am +");
          break;
        case '-' :
          console.log("Me -");
          break;
        default :
          this.handleClearScreen();
      }
    }
    // else {
    //   this.handleClearScreen();
    // }

    //if it's a number it should append to a temp string
    //once a symbol is clicked clear the screen and saves
    //equals takes the stored strings and does the calculations
    //if equals does not see any stored strings, it shouldn't display anyrhing
  }

  handleClearScreen() {
    document.getElementById('screen').innerHTML = "";
  }

  handleCalculate() {

  }

  render() {
    return (
      <div>
        <div style={styles.displayDiv}>
          <p id="screen"></p>
        </div>
        <NumberContainer buttonClick={this.getTextFromButton} onClearScreen={this.handleClearScreen}/>
      </div>
    )
  }
}

module.exports = DisplayContainer;
