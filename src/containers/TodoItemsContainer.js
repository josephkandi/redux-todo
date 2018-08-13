import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItemComponent from '../components/TodoItemComponent';
import TodoItem from '../models/TodoItem';

function TodoItemsContainer({ todos }) {
  const todoItems = todos.map(todo => (
    <li className="list-unstyled pt-1" key={todo.id}>
      <TodoItemComponent todo={todo} />
    </li>
  ));

  return (
    <ul className="p-4">
      {todoItems}
    </ul>
  );
}

TodoItemsContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(TodoItem)).isRequired,
};

export default connect(({ todos }) => ({ todos }))(TodoItemsContainer);
