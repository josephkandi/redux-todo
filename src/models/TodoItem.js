import uuid from 'uuid/v4';

function TodoItem(text, completed) {
  this.text = text;
  this.completed = completed;
  this.id = uuid();
}

export default TodoItem;
