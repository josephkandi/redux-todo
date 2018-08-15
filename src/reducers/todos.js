import {
  ADD_ITEM, DELETE_ITEM, TOGGLE_TODO,
} from '../constants/constants';
import TodoItem from '../models/TodoItem';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case DELETE_ITEM: {
      const index = state.findIndex(item => item.id === action.id);
      if (index === -1) {
        return state;
      }
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case TOGGLE_TODO: {
      const todoItems = state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return Object.assign(new TodoItem(), { ...item }, { completed: !item.completed });
      });
      return todoItems;
    }
    default:
      return state;
  }
};
