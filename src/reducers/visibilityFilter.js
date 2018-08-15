import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/constants';

const initialState = SHOW_ALL;

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ACTIVE:
      return SHOW_ACTIVE;
    case SHOW_COMPLETED:
      return SHOW_COMPLETED;
    case SHOW_ALL:
      return SHOW_ALL;
    default:
      return state;
  }
};
