import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


const CanvasControls = ({startGame, pauseGame, endGame, hasSeed, seedCanvas}) => {
  return (
    <div>
      {" "}
      {!props.gameRunning ? (
        <button id="start" onClick={startGame} className="btn btn-danger canvas-button">
          Start
        </button>
      ) : (
        <button id="pause" onClick={pauseGame} className="btn btn-danger canvas-button">
          Pause
        </button>
      )}
      <button id="reset" onClick={endGame} className="btn btn-danger canvas-button">
        Reset
      </button>
      <button
        id="seed"
        className="btn btn-danger canvas-button"
        onClick={() => {
          if (!hasSeed) {
            seedCanvas();
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