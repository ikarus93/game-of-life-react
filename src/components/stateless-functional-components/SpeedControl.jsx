import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


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

//PropTypes

SpeedControl.propTypes = {
  changeGameSpeed: PropTypes.func,
  gameSpeed: PropTypes.number
}

export default SpeedControl;