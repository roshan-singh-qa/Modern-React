import React from 'react';

const person = (props) => {
  return (
    <div className='person'>
      <p onClick={props.click}>
        My Name is {props.name} and I am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
