import React from 'react';

let groceries = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

const App = props => {
  let groceryList = groceries.map((grocery) => {
    return (
      <li key={grocery.id}>{grocery.name}</li>
    );
  })

  return (
    <div>
      {groceryList}
    </div>
  )
}

export default App;
