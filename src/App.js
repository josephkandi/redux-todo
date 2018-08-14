import React from 'react';
import InputElement from './components/InputElement';
import TodoItemsContainer from './containers/TodoItemsContainer';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <h1>
        Todo Redux
      </h1>
      <InputElement />
      <Footer />
      <TodoItemsContainer />
    </div>
  );
}

export default App;
