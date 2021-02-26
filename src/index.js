import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload
  }
  return state;
}

const orderList = (state = [], action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return action.payload
  }

  return state;
}

const store = createStore(
  combineReducers({
    pizzaList,
    orderList
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));