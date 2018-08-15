import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItemComponent from '../components/TodoItemComponent';
import TodoItem from '../models/TodoItem';
import { SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/constants';

function TodoItemsContainer({ todos, visibilityFilter }) {
  let filteredTodos = [];
  switch (visibilityFilter) {
    case SHOW_ACTIVE:
      filteredTodos = todos.filter(item => !item.completed);
      break;
    case SHOW_COMPLETED:
      filteredTodos = todos.filter(item => item.completed);
      break;
    default:
      filteredTodos = todos;
      break;
  }
  const todoItems = filteredTodos.map(todo => (
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
  visibilityFilter: PropTypes.string.isRequired,
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });

export default connect(mapStateToProps)(TodoItemsContainer);
