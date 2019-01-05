import React, { Component } from "react";
import ReactDOM from "react-dom";

const CanvasControls = props => {
  return (
    <div>
      {" "}
      {!props.gameRunning ? (
        <button id="start" onClick={props.startGame} className="btn btn-danger">
          Start
        </button>
      ) : (
        <button id="pause" onClick={props.pauseGame} className="btn btn-danger">
          Pause
        </button>
      )}
      <button id="reset" onClick={props.endGame} className="btn btn-danger">
        Reset
      </button>
      <button
        id="seed"
        className="btn btn-danger"
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

export default CanvasControls;