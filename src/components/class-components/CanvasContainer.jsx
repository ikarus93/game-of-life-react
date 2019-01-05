import React, { Component } from "react";
import ReactDOM from "react-dom";
import Canvas from "../stateless-functional-components/Canvas.jsx";
import CanvasControls from "../stateless-functional-components/CanvasControls.jsx";
import PropTypes from 'prop-types';


class CanvasContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      canvas: undefined,
      xDimension: props.xDimension,
      yDimension: props.yDimension,
      gameRunning: false,
      gameInterval: undefined, //tracks interval id 
      hasSeed: false,
      currentSpeed: 1,   //used to map to index in this.state.speedTable
      speedTable: [2000, 1000, 500, 250]
    };
    
    this.createCanvas = this.createCanvas.bind(this);
    this.seedCanvas = this.seedCanvas.bind(this);
    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.transformCanvas = this.transformCanvas.bind(this);
    this.addCell = this.addCell.bind(this);
  }

  componentWillMount() {
    this.createCanvas();
  }

  componentWillReceiveProps(nextProps) {
    //Only change speed if new speed differes from original speed, to avoid useless rerendering
    if (nextProps.speed !== this.state.speed) {
      this.state.speed = nextProps.speed;
      if (this.state.gameRunning) {
        clearInterval(this.state.gameInterval);
        this.state.gameInterval = setInterval(
          this.transformCanvas,
          this.state.speedTable[nextProps.speed]
        );
      }
      this.setState(this.state);
    }
    
    //Change size of canvas if size differs
    if (
      nextProps.xDimension !== this.state.xDimension &&
      nextProps.yDimension !== this.state.yDimension
    ) {
      this.state.xDimension = nextProps.xDimension;
      this.state.yDimension = nextProps.yDimension;
      this.setState(this.state);
      this.endGame();
    }
  }

  createCanvas() {
    /* Creates an empty canvas based on the dimensions selected by user, passed down by props */
    this.setState({
      canvas: Array.from(Array(this.state.yDimension), _ =>
        Array(this.state.xDimension).fill(0)
      )
    });
  }

  seedCanvas() {
    /* Takes the game canvas and seeds it with random amount of live cells */

    function getRandomNum(min, max) {
      /* Integer, Integer -> Integer
         Returns random array in specified range
      */
      return Math.round(Math.random() * (max - min) + min);
    }

    let canvas = this.state.canvas;

    const amount = getRandomNum(canvas.length * 2, canvas.length * 3);
    for (let i = 0; i < amount; i++) {
      let x, y;

      while (true) {
        //get coordinates in canvas and break loop if the field is empty(0)
        [x, y] = [
          getRandomNum(0, canvas.length - 1),
          getRandomNum(0, canvas.length - 1)
        ];
        if (!canvas[x][y]) break;
      }

      canvas[x][y] = 1;
    }

    this.setState({
      canvas: canvas,
      hasSeed: true
    });
  }

  transformCanvas() {
    /*  Transforms the canvas based on the main rule set:
      - Any live cell with fewer than two live neighbors dies, as if by underpopulation.
      - Any live cell with two or three live neighbors lives on to the next generation.
      - Any live cell with more than three live neighbors dies, as if by overpopulation.
      - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    */
    function countNeighbours(canvas, i, j) {
      /* Array of Arrays, Integer, Integer -> Integer
      Take the canvas and the current cell coordinates(i, j) and returns how many live neighbours the respective cell has
    */
      return [
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
        [-1, -1],
        [-1, 0],
        [-1, 1]
      ].filter(([x, y]) => {
        //each field is one possible neighbour cell
        try {
          return canvas[i + x][j + y] === 1;
        } catch (e) {
          return false;
        }
      }).length;
    }
    let canvas = this.state.canvas;
    canvas = canvas.map((row, i) => {
      return row.map((cell, j) => {
        let neighbours = countNeighbours(canvas, i, j);
        if (cell) {
          if (neighbours < 2 || neighbours > 3) {
            return 0;
          } else {
            return 1;
          }
        } else {
          if (neighbours === 3) {
            return 1;
          } else {
            return 0;
          }
        }
      });
    });

    this.setState({
      canvas: canvas
    });
    this.props.updateGenerations(0);
  }

  startGame() {
    /* Starts an interval and changes game tracking state variables */

    const gameInterval = setInterval(() => {
      this.transformCanvas();
    }, this.state.speedTable[this.state.speed]);

    this.setState({
      gameRunning: true,
      gameInterval: gameInterval,
      hasSeed: true
    });
  }

  pauseGame() {
    /* Pauses the Game and changes game tracking state variables */
    clearInterval(this.state.gameInterval);
    this.setState({
      gameRunning: false,
      gameInterval: undefined
    });
  }

  endGame() {
    /* Clears the game canvas, game interval and sets game tracking variables to default state */
    this.createCanvas();
    clearInterval(this.state.gameInterval);
    this.setState({
      gameRunning: false,
      gameInterval: undefined,
      hasSeed: false
    });
    this.props.updateGenerations(1);
  }

  addCell(i, j) {
    /* Integer, Integer -> undefined
    Adds living cell to canvas, triggered onclick
    Takes parameters i and j, to specify cell that triggered the event
    */

    this.state.canvas[i][j] = 1;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="canvas-container">
        <Canvas canvas={this.state.canvas} addCell={this.addCell} />
        <CanvasControls
          gameRunning={this.state.gameRunning}
          startGame={this.startGame}
          pauseGame={this.pauseGame}
          endGame={this.endGame}
          hasSeed={this.state.hasSeed}
          seedCanvas={this.seedCanvas}
        />
      </div>
    );
  }
}


//PropTypes

CanvasContainer.propTypes = {
  xDimension: PropTypes.number,
  yDimension: PropTypes.number
}



export default CanvasContainer;
