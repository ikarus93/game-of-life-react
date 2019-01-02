import React, { Component } from "react";
import ReactDOM from "react-dom";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gameSpeed: 1,
      sizeTable: [10, 50, 100],
      currentSize: 10
    }
    this.changeGameSpeed = this.changeGameSpeed.bind(this);
    this.changeSize = this.changeSize.bind(this);
    
  }
  
  changeSize(event) {
    const size = parseInt(event.target.value);
    if (this.state.sizeTable[size] !== this.state.currentSize) {
      this.setState({
        currentSize: this.state.sizeTable[size]
      })
    }
  }
  
  changeGameSpeed(event) {
    this.setState({
      gameSpeed: parseInt(event.target.value)
    })
  }

  render() {
    return (
      <React.Fragment>
        <SizeControl changeSize={this.changeSize}/>
        <CanvasContainer xDimension={this.state.currentSize} yDimension={this.state.currentSize} speed={this.state.gameSpeed}/>
        <SpeedControl changeGameSpeed={this.changeGameSpeed} />
      </React.Fragment>
    );
  }
}

export default Game;


const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Game />, wrapper) : false;