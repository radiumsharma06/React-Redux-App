import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers';
import rootSaga from './sagas/root-saga';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //need to add isNonProd()
const sagaMiddleware = createSagaMiddleware();
// const history = createHistory();
const middlewares = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(null),
);

const store = createStore(reducers, composeEnhancers(middlewares));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
