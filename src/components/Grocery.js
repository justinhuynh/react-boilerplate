import React from 'react';

const Grocery = props => {
  let groceryName = `${props.name} ${props.selected}`;

  return (
    <li key={props.id} onClick={props.handleClick}>{groceryName}</li>
  )
}

export default Grocery;
