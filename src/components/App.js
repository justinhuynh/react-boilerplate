import React from 'react';
import GroceryList from './GroceryList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Grocery List!</h1>
        <GroceryList
          groceries={this.props.groceries} />
      </div>
    )
  }
}

export default App;
