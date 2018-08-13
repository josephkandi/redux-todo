import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../models/TodoItem';

function TodoItemComponent({ todo }) {
  return (
    <div className="row">
      <div className="col-sm-11">
        <input type="radio" className="form-check-input" />
        <span>
          {todo.text}
        </span>
      </div>
      <div className="col-sm-1">
        <button type="button" className="btn btn-light">
          x
        </button>
      </div>
    </div>
  );
}

TodoItemComponent.propTypes = {
  todo: PropTypes.instanceOf(TodoItem).isRequired,
};

export default TodoItemComponent;
