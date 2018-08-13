import { UPDATE_ITEM } from '../constants/constants';

export default (index, item) => ({
  type: UPDATE_ITEM,
  index,
  item,
});
