import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// pizza list
const pizzaList = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }
  return state;
}

// admin 
const orderList = (state = [], action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return action.payload;
  }
  return state;
}

// customer info list
const addCustomer = (state = {}, action) => {
  if(action.type === "ADD_CUSTOMER") {
    return action.payload;
  }
  return state;
}

// checkout (cart)
const checkout = (state = [], action) => {
  if(action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzaList,
    orderList,
    addCustomer,
    checkout
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));