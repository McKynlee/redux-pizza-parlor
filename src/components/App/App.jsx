import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// Custom components:
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import AdminView from '../AdminView/AdminView';
import CheckoutList from '../CheckoutList/CheckoutList';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizza();
    fetchOrders();
  }, []);

  // Get pizzas from server:
  const fetchPizza = () => {
    axios.get('/api/pizza')
      .then(response => {
        // console.log('GET /api/pizza:', response.data);

        dispatch({
          type: 'SET_PIZZA_LIST',
          payload: response.data
        })
      }).catch(err => {
        console.log('GET error:', err);
      })
  }; // end fetchPizza

  // Get order data from the server
  const fetchOrders = () => {
    axios.get('/api/order')
      .then(response => {
        console.log('GET /api/order', response.data);

        dispatch({
          type: 'SET_ORDER_LIST',
          payload: response.data
        })
      })
      .catch(err => console.log('GET error, orders:', err))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h2>Total: {totalPrice}</h2>
      </header>
      <Router>
        <Route path="/" exact>
          <PizzaList setTotalPrice={setTotalPrice} totalPrice={totalPrice} />
        </Route>
        <Route path="/customerInfo">
          <CustomerForm totalPrice={totalPrice} />
        </Route>
        <Route path="/checkout">
          <CheckoutList totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
        </Route>
        <Route path="/admin">
          <AdminView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
