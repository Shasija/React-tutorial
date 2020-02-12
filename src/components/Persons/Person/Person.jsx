import React, { Component } from "react";
import "./Person.css";
import aux from "../../hoc/aux";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor person");
  }

  UNSAFE_componentWillMount() {
    console.log("Person.js Will Mount");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Person.js getDerivedFromState");
  // }

  componentDidMount() {
    console.log("Person.js DID Mount");
    if (this.props.position === 0) {
      this.inputEle.focus();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Person.js component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Person.js shouldcomponentupdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Person.js componentwillupdate");
  }
  componentDidUpdate() {
    console.log("Person.js componentdidupdate");
  }

  render() {
    console.log("Person.js render");
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          Hwy guyz {this.props.name} my age is {this.props.age} .
        </p>
        <input
          ref={inp => {
            this.inputEle = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default aux(Person, "Person");
