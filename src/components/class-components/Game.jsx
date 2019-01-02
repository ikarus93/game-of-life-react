import React, { Component } from "react";
import ReactDOM from "react-dom";

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <CanvasContainer xDimension={10} yDimension={10} />
      </React.Fragment>
    );
  }
}

export default Game;


const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Game />, wrapper) : false;