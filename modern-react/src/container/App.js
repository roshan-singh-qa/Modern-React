import AppStyle from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/cockpit/cockpit';
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'shivangee',
        age: 26,
      },
      {
        id: 2,
        name: 'hritik',
        age: 22,
      },
      {
        id: 3,
        name: 'neelam',
        age: 45,
      },
    ],
    showPersons: false,
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    // let style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherited',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={(event) => this.changeNameHandler}
          />
        </div>
      );

      // style.backgroundColor = 'Red';
    }

    return (
      <div className={AppStyle.App}>
        <header className={AppStyle.App_header}>
          <Cockpit
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
            showPersons={this.state.showPersons}
          />
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
