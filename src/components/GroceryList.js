import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let groceryList = props.groceries.map((grocery) => {
    return (
      <Grocery id={grocery.id} name={grocery.name} />
    )
  });

  return (
    <ul>{groceryList}</ul>
  );
}

export default GroceryList;
