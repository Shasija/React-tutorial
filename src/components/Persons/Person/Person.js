import React from "react";
import "./Person.css";

const person = p => {
  return (
    <div className="Person">
      <p onClick={p.click}>
        Hwy guyz {p.name} my age is {p.age} .
      </p>
      <input type="text" onChange={p.changed} value={p.name} />
      <button className="myButton" onChange={p.changed} value={p.name}>
        skjkdjks
      </button>
    </div>
  );
};

export default person;
