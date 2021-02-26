import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const customerReducer = (state = {}, action) => {
  if(action.type === "ADD_CUSTOMER") {
    return action.payload;

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
    orderList,
    customerReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
