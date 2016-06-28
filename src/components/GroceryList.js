import React from 'react';
import Grocery from './Grocery';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedGroceryId: null }
  }

  render() {
    let groceryList = this.props.groceries.map((grocery) => {
      let selected = "";

      if (grocery.id === this.state.selectedGroceryId) {
        selected = "SELECTED";
      }

      return (
        <Grocery
          key={grocery.id}
          name={grocery.name}
          selected={selected} />
      )
    });

    return (
      <ul>{groceryList}</ul>
    );
  }
}

export default GroceryList;
