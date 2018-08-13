import React from 'react';
import PropTypes from 'prop-types';
import TodoItemComponent from '../components/TodoItemComponent';
import TodoItem from '../models/TodoItem';

function TodoItemsContainer({ todos }) {
  const todoItems = todos.map(todo => (
    <li className="list-unstyled pt-1">
      <TodoItemComponent key={todo.id} todo={todo} />
    </li>
  ));

  return (
    <ul className="p-4">
      {todoItems}
    </ul>
  );
}

TodoItemsContainer.propTypes = {
  todos: PropTypes.arrayOf(TodoItem).isRequired,
};

export default TodoItemsContainer;
