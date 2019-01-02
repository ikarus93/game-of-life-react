const Canvas = props => {
  return (
    <table className="canvas">
      <tbody> 
        {props.canvas.map((row, i) => {
          return (
            <tr key={i}>
              {" "}
              {row.map((cell, j) => {
                return <td key={j} class={cell ? "alive" : "dead"} onClick={() => { props.addCell(i, j)}}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Canvas;