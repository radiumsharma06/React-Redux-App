import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todos from '../Todos';
import HelloWorld from '../HelloWorld';
import './ContentArea.style.css';

const ContentArea = () =>
  <main className='content-area'>
    <Switch>
      <Route exact path={'/'} component={Todos}  />
      <Route path={'/about'} component={HelloWorld} />
    </Switch>
  </main>;

export default ContentArea;
