import React from "react";
import "./cockpit.css";

const Cockpit = (props) => {
  return (
    <div>
      <button className="myButton" onClick={props.click}>
        Click Here to hide/show
      </button>
    </div>
  );
};

export default Cockpit;
