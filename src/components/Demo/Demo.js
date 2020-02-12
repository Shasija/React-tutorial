import React from "react";
const Demo = props => {
  return (
    <div>
      <h1>{props.clickValue}</h1>
      <button onClick={props.clicked} className="myButton">Click Me</button>
    </div>
  );
};

export default Demo;
