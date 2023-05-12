import { Component } from 'react';
import Person from './Person/person';

class Persons extends Component {
  render() {
    return this.props.persons.map((person) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
