import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Custom components:
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import AdminView from '../AdminView/AdminView';
import CheckoutList from '../CheckoutList/CheckoutList';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {
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
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <AdminView />
      <PizzaList />
      <CheckoutList />
      <CustomerForm />

    </div>
  );
}

export default App;
