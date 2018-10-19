import { STOP_LOADING, TRIGGER_LOADING_SAGA } from './types';

export const setLoadingDetails = data => {
  return {
    type: STOP_LOADING,
    data
  }
}

export const triggerLoadingSaga = () => {
  return { type: TRIGGER_LOADING_SAGA };
};

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export const subTodo = () => {
  return {
    type: 'SUB_TODO'
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const redirectPath = (path) => {
  return {
    type: 'REDIRECT_PATH',
    path
  }
}
