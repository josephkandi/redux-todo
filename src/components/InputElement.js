import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../models/TodoItem';
import addTodoItem from '../actions/addTodoItem';

class InputElement extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  }

  handleEnterKey = (evt) => {
    const { text } = this.state;
    if (evt.keyCode === 13) {
      const todo = new TodoItem(text, false);
      this.addTodo(todo);
    }
  }

  addTodo(item) {
    const { dispatch } = this.props;
    dispatch(addTodoItem(item));
    this.setState({ text: '' });
  }

  render = () => {
    const { text } = this.state;
    return (
      <input
        type="text"
        value={text}
        onKeyUp={evt => this.handleEnterKey(evt)}
        onChange={evt => this.handleChange(evt)}
        className="form-control"
        placeholder="Add item"
      />
    );
  }
}

InputElement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InputElement);
