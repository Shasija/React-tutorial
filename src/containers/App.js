import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Demo from "../components/Demo/Demo";

export const AuthContext = React.createContext(false);

//Class Component
class App extends Component {
  constructor(props) {
    super(props);
    //console.log("in App.js Constructor");
    this.state = {
      persons: [
        { id: "1", name: "sankalp", age: 21 },
        { id: "2", name: "Dhumil", age: 23 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  UNSAFE_componentWillMount() {
    //console.log("in App.js ComponentWillMount");
  }

  // static getDerivedStateFromProps(props, state) {
  //   //console.log("Person.js getDerivedFromState");
  // }

  componentDidMount() {
    //console.log("in App.js ComponentDidMount");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    //console.log("App.js component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("App.js shouldcomponentupdate", nextProps, nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    //console.log("App.js componentwillupdate");
  }
  componentDidUpdate() {
    //console.log("App.js componentdidupdate");
  }

  //to change the value dynamically
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "sankalp", age: 21 },
        { name: newName, age: 23 }
      ]
    });
  };

  //to chenge the value in text
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  //to hide/show the listdiv elements
  togglePersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  //to inc value
  clickedEventHandler = () => {
    // this.setState({ toggleClicked: this.state.toggleClicked + 1 });
    this.setState((prevState, props) => {
      return {
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  //to chenge the list div onClick
  deletePersonsHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    //console.log("App.js render");

    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      //console.log();
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
        <Cockpit click={this.togglePersonsHandler} login={this.loginHandler} />
        <Demo
          clickValue={this.state.toggleClicked}
          clicked={this.clickedEventHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
