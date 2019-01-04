const SizeControl = props => {
  return (
    <div className="sizecontrol">
      <button onClick={props.changeSize} value="0" className="btn btn-danger">
        Small
      </button>
      <button onClick={props.changeSize} value="1" className="btn btn-danger">
        Medium
      </button>
      <button onClick={props.changeSize} value="2" className="btn btn-danger">
        Large
      </button>
    </div>
  );
};

export default SizeControl;