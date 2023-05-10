import logo from './logo.svg';
import './App.css';
import './Person/person.css';
import Person from './Person/person';
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
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherited',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'Red';
    }

    const classes = [];
    if (this.state.persons.length > 2) classes.push('red');
    if (this.state.persons.length <= 2) classes.push('bold');
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p className={classes.join('')}>
            Edit <code>src/App.j s</code> and save to reload.
          </p>
          {persons}
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle Person
          </button>
          {/* <button onClick={this.switchNameHandler.bind(this, 'Roshan')}>
            SwitchName
          </button> */}
          {/* <button onClick={() => this.switchNameHandler('Roshan')}>
            SwutchName
          </button> */}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
