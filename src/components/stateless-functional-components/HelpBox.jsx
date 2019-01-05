
const HelpBox = props => {
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
      <button className="btn btn-danger" onClick={props.changeHelpState}>
        Close
      </button>
    </div>
  );
};


export default HelpBox;