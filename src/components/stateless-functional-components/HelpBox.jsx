import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const HelpBox = ({changeHelpState}) => {
  return (
    <div className="help-box-container">
      <h2>Help</h2>
      <ul>
        <li>
          Press on cells in the canvas to set a live cell. Press Seed to have a
          random amount of cells seeded on the Canvas.
        </li>
        <li>Press Reset to stop the game and clear the canvas.</li>
        <li>Use the slider to change the Speed. From Slow -> Fast</li>
      </ul>
      <button className="btn btn-danger" onClick={changeHelpState}>
        Close
      </button>
    </div>
  );
};

//PropTypes

HelpBox.propTypes = {
  changeHelpState: PropTypes.func
}


export default HelpBox;