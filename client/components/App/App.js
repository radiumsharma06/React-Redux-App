import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ContentArea from '../ContentArea';
import HelloWorld from '../HelloWorld';
import Redirect from '../Redirect';
import Todos from '../Todos';
import Header from '../Header';

const App = () => (
  <div>
    <Header />
    <ContentArea />
  </div>
);

export default App;
