import React, { Component } from 'react';
import personStyle from './person.css';

class Person extends Component {
  render() {
    return (
      <div className={personStyle.person}>
        <p onClick={this.props.click}>
          My Name is {this.props.name} and I am {this.props.age} old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.change}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Person;
