import React from 'react';
import InputElement from './components/InputElement';
import TodoItemsContainer from './containers/TodoItemsContainer';


function App() {
  return (
    <div>
      <h1>
        Todo Redux
      </h1>
      <InputElement />
      <TodoItemsContainer />
    </div>
  );
}

export default App;
