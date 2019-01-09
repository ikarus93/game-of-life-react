import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


const SizeControl = ({changeSize}) => {
  return (
    <div className="sizecontrol">
      <button onClick={changeSize} value="0" className="btn btn-danger">
        Small
      </button>
      <button onClick={changeSize} value="1" className="btn btn-danger">
        Medium
      </button>
      <button onClick={changeSize} value="2" className="btn btn-danger">
        Large
      </button>
    </div>
  );
};

//PropTypes

SizeControl.propTypes = {
  changeSize: PropTypes.func
}

export default SizeControl;