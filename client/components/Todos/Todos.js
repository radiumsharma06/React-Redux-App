import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import AddTodo from './AddTodo';
import SubTodo from './SubTodo';
import TodoList from './TodoList';

const Todos = () => (
  <div>
    <AddTodo />
    <SubTodo />
    <TodoList />
    <Footer />
  </div>
);

export default Todos;
