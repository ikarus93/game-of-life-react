import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasContainer from "./CanvasContainer.jsx";
import SizeControl from "../stateless-functional-components/SizeControl.jsx";
import SpeedControl from "../stateless-functional-components/SpeedControl.jsx";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gameSpeed: 1,
      sizeTable: [10, 20, 50],
      currentSize: 10,
      generationsPassed: 0
    };
    this.changeGameSpeed = this.changeGameSpeed.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.updateGenerations = this.updateGenerations.bind(this);
  }

  changeSize(event) {
    const size = parseInt(event.target.value);
    if (this.state.sizeTable[size] !== this.state.currentSize) {
      this.setState({
        currentSize: this.state.sizeTable[size]
      });
    }
  }

  changeGameSpeed(event) {
    this.setState({
      gameSpeed: parseInt(event.target.value)
    });
  }

  updateGenerations(reset) {
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

  render() {
    return (
      <div className="main-container">
        <SizeControl changeSize={this.changeSize} />
        <CanvasContainer
          xDimension={this.state.currentSize}
          yDimension={this.state.currentSize}
          speed={this.state.gameSpeed}
          updateGenerations={this.updateGenerations}
        />
        <SpeedControl
          changeGameSpeed={this.changeGameSpeed}
          gameSpeed={this.state.gameSpeed}
        />
        <p>{this.state.generationsPassed}</p>
      </div>
    );
  }
}

export default Game;


const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Game />, wrapper) : false;