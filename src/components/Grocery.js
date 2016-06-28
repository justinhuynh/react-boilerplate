import React from 'react';

const Grocery = props => {
  return (
    <li key={props.id}>{props.name}</li>
  )
}

export default Grocery;
