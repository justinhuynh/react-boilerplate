import React from 'react';

const App = props => {
  let groceryList = props.groceries.map((grocery) => {
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
