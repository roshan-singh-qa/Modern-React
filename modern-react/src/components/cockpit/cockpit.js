import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import AppStyle from '../../container/App.css';

class Cockpit extends Component {
  render() {
    let buttonName = 'Show Person';
    const classes = [];
    if (this.props.persons.length <= 2) classes.push('red');
    if (this.props.persons.length <= 2) classes.push('bold');

    if (this.props.showPersons) buttonName = 'Hide Person';
    return (
      <>
        <img src={logo} className={AppStyle.App_logo} alt='logo' />
        <p className={classes.join('')}>
          Edit <code>src/App.j s</code> and save to reload.
        </p>
        <button onClick={this.props.clicked}>{buttonName}</button>
        <a
          className={AppStyle.App_link}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </>
    );
  }
}

export default Cockpit;
