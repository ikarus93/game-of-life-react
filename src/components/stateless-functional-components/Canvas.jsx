import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


const Canvas = props => {
  return (
    <table className="canvas">
      <tbody> 
        {props.canvas.map((row, i) => {
          return (
            <tr key={i}>
              {" "}
              {row.map((cell, j) => {
                return <td key={j} className={cell ? "alive" : "dead"} onClick={() => { props.addCell(i, j)}}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//PropTypes

Canvas.propTypes = {
  canvas: PropTypes.arrayOf(PropTypes.array),
  addCell: PropTypes.func
}

export default Canvas;