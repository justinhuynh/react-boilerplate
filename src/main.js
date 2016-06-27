// main.js
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let groceries = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceryList = this.props.groceries.map((grocery) => {
      return (
        <li key={grocery.id}>{grocery.name}</li>
      );
    })

    return(
      <div>
        <h1>Grocery List!</h1>
        {groceryList}
      </div>
    )
  }
}

ReactDOM.render(
  <App groceries={groceries} />,
  document.getElementById('app')
);
