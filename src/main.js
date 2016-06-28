// main.js
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let groceries = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

var App = function(props) {
  var groceryFunc = function(grocery) {
    return <li key={grocery.id}>{grocery.name}</li>;
  }

  var groceryList = props.groceries.map(groceryFunc);

  return <div><h1>Grocery List!</h1>{groceryList}</div>;
}

ReactDOM.render(
  <App groceries={groceries} />,
  document.getElementById('app')
);
