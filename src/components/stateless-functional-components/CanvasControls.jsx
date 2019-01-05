import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


const CanvasControls = props => {
  return (
    <div>
      {" "}
      {!props.gameRunning ? (
        <button id="start" onClick={props.startGame} className="btn btn-danger canvas-button">
          Start
        </button>
      ) : (
        <button id="pause" onClick={props.pauseGame} className="btn btn-danger canvas-button">
          Pause
        </button>
      )}
      <button id="reset" onClick={props.endGame} className="btn btn-danger canvas-button">
        Reset
      </button>
      <button
        id="seed"
        className="btn btn-danger canvas-button"
        onClick={() => {
          if (!props.hasSeed) {
            props.seedCanvas();
          }
        }}
      >
        {" "}
        Seed{" "}
      </button>{" "}
    </div>
  );
};

//PropTypes

CanvasControls.propTypes = {
  gameRunning: PropTypes.bool,
  startGame: PropTypes.func,
  pauseGame: PropTypes.func,
  endGame: PropTypes.func,
  hasSeed: PropTypes.bool,
  seedCanvas: PropTypes.func
}

export default CanvasControls;