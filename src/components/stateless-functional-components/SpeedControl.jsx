import React, { Component } from "react";
import ReactDOM from "react-dom";

const SpeedControl = props => {
  return (
    <input
      className="speedcontrol"
      type="range"
      min="0"
      max="3"
      onChange={props.changeGameSpeed}
      value={props.gameSpeed}
    />
  );
};

export default SpeedControl;