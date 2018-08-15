import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from '../models/TodoItem';
import deleteTodoItem from '../actions/deleteTodoItem';
import toggleTodo from '../actions/toggleTodo';

class TodoItemComponent extends Component {
  constructor() {
    super();
    this.checkbox = React.createRef();
  }

  handleChange = (evt) => {
    const { toggle, todo } = this.props;
    toggle(todo.id);
    if (evt.target.checked) {
      this.checkbox.current.checked = false;
    }
  }

  render = () => {
    const { todo, deleteTodo } = this.props;
    const todoLabel = todo.completed ? (
      <span>
        <s>
          {todo.text}
        </s>
      </span>
    ) : (
      <span>
        {todo.text}
      </span>
    );
    return (
      <div className="row">
        <div className="col-sm-11">
          <input ref={this.checkbox} type="checkbox" className="form-check-input" onChange={evt => this.handleChange(evt)} />
          {todoLabel}
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-light" onClick={() => { deleteTodo(todo.id); }}>
            x
          </button>
        </div>
      </div>
    );
  }
}

TodoItemComponent.propTypes = {
  todo: PropTypes.instanceOf(TodoItem).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodoItem(id));
    },
    toggle: (id) => {
      dispatch(toggleTodo(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(TodoItemComponent);
