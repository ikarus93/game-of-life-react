import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasContainer from "./CanvasContainer.jsx";
import SizeControl from "../stateless-functional-components/SizeControl.jsx";
import SpeedControl from "../stateless-functional-components/SpeedControl.jsx";
import HelpBox from "../stateless-functional-components/HelpBox.jsx";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameSpeed: 1,
      sizeTable: [10, 20, 50],
      currentSize: 20,
      generationsPassed: 0,
      showHelp: false
    };
    
    this.changeGameSpeed = this.changeGameSpeed.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.updateGenerations = this.updateGenerations.bind(this);
    this.changeHelpState = this.changeHelpState.bind(this);
  }

  changeSize(event) {
    /*Change the size of canvas on click event occuring in SizeControl component*/
    const size = parseInt(event.target.value);
    if (this.state.sizeTable[size] !== this.state.currentSize) {
      this.setState({
        currentSize: this.state.sizeTable[size]
      });
    }
  }

  changeGameSpeed(event) {
    /*Changes the game speed on click event occuring in SpeedControl component*/
    this.setState({
      gameSpeed: parseInt(event.target.value)
    });
  }

  updateGenerations(reset) {
    /*updates the generations passed, take optional parameter reset which is 0 if the event was triggered by pressing the reset button, or 1 in every other case*/
    let generations = this.state.generationsPassed;
    if (!reset) {
      generations++;
    } else {
      generations = 0;
    }
    this.setState({
      generationsPassed: generations
    });
  }
  
  changeHelpState() {
    /*Used to control rendering of HelpBox component*/
    this.setState({
      showHelp: !this.state.showHelp
    })
  }

  render() {
    return (
      <div className="main-container">
        {this.state.showHelp ? <HelpBox changeHelpState={this.changeHelpState} /> : ""}
        <h1> Conways Game of Life </h1>
        <SizeControl changeSize={this.changeSize} />
        <button onClick={this.changeHelpState} className="btn btn-dark help animated">?</button>
        <p className="generations">Generations passed: {this.state.generationsPassed}</p>
        <CanvasContainer
          xDimension={this.state.currentSize}
          yDimension={this.state.currentSize}
          speed={this.state.gameSpeed}
          updateGenerations={this.updateGenerations}
        />
        <span className="speedcontrol-label">Speed</span>
        <SpeedControl
          changeGameSpeed={this.changeGameSpeed}
          gameSpeed={this.state.gameSpeed}
        />
      </div>
    );
  }
}



const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Game />, wrapper) : false;