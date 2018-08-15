import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/constants';

export const showActive = () => ({
  type: SHOW_ACTIVE,
});

export const showAll = () => ({
  type: SHOW_ALL,
});

export const showCompleted = () => ({
  type: SHOW_COMPLETED,
});
