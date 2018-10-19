import { combineReducers } from 'redux';
import loadingDetails from './loading-reducer';
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import redirect from './redirect';

export const reducers = {
  loading: loadingDetails,
  todos,
  visibilityFilter,
  redirectPath: redirect
};

export default combineReducers(reducers);
