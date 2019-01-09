import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


const SpeedControl = ({changeGameSpeed, gameSpeed}) => {
  return (
    <input
      className="speedcontrol"
      type="range"
      min="0"
      max="3"
      onChange={changeGameSpeed}
      value={gameSpeed}
    />
  );
};

//PropTypes

SpeedControl.propTypes = {
  changeGameSpeed: PropTypes.func,
  gameSpeed: PropTypes.number
}

export default SpeedControl;