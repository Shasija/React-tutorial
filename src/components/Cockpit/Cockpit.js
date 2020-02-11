import React, { Component } from "react";
import "./cockpit.css";

class Cockpit extends Component {
  constructor(props) {
    super(props);
    console.log("Cockpit.js Constructor");
  }
  UNSAFE_componentWillMount() {
    console.log("in Cockpit.js ComponentWillMount");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Person.js getDerivedFromState");
  // }

  componentDidMount() {
    console.log("in Cockpit.js ComponentDidMount");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Cockpit.js component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Cockpit.js shouldcomponentupdate", nextProps, nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Cockpit.js componentwillupdate");
  }
  componentDidUpdate() {
    console.log("Cockpit.js componentdidupdate");
  }

  render() {
    console.log("Cockpit.js render");
    return (
      <div>
        <button className="myButton" onClick={this.props.click}>
          Click Here to hide/show
        </button>
      </div>
    );
  }
}

export default Cockpit;

