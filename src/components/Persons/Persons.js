import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("Persons.js Constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Persons.js will mount");
  }

  // static getDerivedStateFromProps(props,state){
  //   console.log("Person.js getDerivedFromState");
  // }

  componentDidMount() {
    console.log("Persons.js did mount");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Persons.js component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldcomponentupdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Persons.js componentwillupdate");
  }
  componentDidUpdate() {
    console.log("Persons.js componentdidupdate");
  }
  render() {
    console.log("Persons.js render");
    return this.props.persons.map((p, i) => {
      return (
        <Person
          click={() => this.props.clicked(i)}
          name={p.name}
          age={p.age}
          key={p.id}
          changed={event => this.props.changed(event, p.id)}
        />
      );
    });
  }
}
export default Persons;
