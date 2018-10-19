import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todos from '../Todos';
import HomePage from '../HomePage';

import './ContentArea.style.scss';

const ContentArea = () =>
  <main className='content-area'>
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/todos'} component={Todos} />
    </Switch>
  </main>;

export default ContentArea;
