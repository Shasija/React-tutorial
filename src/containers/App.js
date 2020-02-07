import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "sankalp", age: 21 },
      { id: "2", name: "Dhrumil", age: 23 }
    ],
    showPersons: true
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "sankalp", age: 21 },
        { name: newName, age: 23 }
      ] 
    });
  };

  nameChangeHandler = (event, id) => {
    console.log(event.target.value);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonsHandler}>
          Click Here to hide/show
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
