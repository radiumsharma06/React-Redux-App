import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import redirect from './redirect';

export const reducers = {
  todos,
  visibilityFilter,
  redirectPath: redirect
};

export default combineReducers(reducers);
