import React, { Component } from "react";
import "./Person.css";
// import Aux from "../../hoc/Aux";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  UNSAFE_componentWillMount() {
    //console.log("Person.js Will Mount");
  }

  // static getDerivedStateFromProps(props, state) {
  //   //console.log("Person.js getDerivedFromState");
  // }

  componentDidMount() {
    //console.log("Person.js DID Mount");
    //console.log(this.inputElement);
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    //console.log("Person.js component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("Person.js shouldcomponentupdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    //console.log("Person.js componentwillupdate");
  }
  componentDidUpdate() {
    //console.log("Person.js componentdidupdate");
  }

  render() {
    //console.log("Person.js render");
    return (
      <div className="Person">
        <AuthContext.Consumer>
          {aut => (aut ? <p>I'm Auth</p> : <p>Not Auth</p>)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          Hwy guyz {this.props.name} my age is {this.props.age} .
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElement}
        />
      </div>
    );
  }
}

export default Person;
