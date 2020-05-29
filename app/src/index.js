import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer  from './store/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
//loggers always need to be the last argument when you are doing middleware

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

