import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputElement from './components/InputElement';
import TodoItemsContainer from './containers/TodoItemsContainer';
import TodoItem from './models/TodoItem';


function App({ todos }) {
  return (
    <div>
      <h1>
        Todo Redux
      </h1>
      <InputElement />
      <TodoItemsContainer todos={todos} />
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.arrayOf(TodoItem).isRequired,
};

export default connect(state => ({ todos: state.todos }))(App);
