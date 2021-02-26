import { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css';
import {useDispatch} from 'react-redux';

function CustomerForm() {

  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = {
      customer_name: name,
      street_address: address,
      city,
      zip,
      type
    }

    console.log('customer to add', customer)
    
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: customer
    })

    // TODO history.push
  }

  return (
    <>
    <h2 className="form-title">Step 2: Customer Information</h2>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="Name" />
        <input onChange={(event) => setAddress(event.target.value)} value={address} type="text" placeholder="Street Address" />
        <input onChange={(event) => setCity(event.target.value)} value={city} type="text" placeholder="City" />
        <input onChange={(event) => setZip(event.target.value)} value={zip} type="text" placeholder="Zip" />
        <div className="radio-section">
          <label htmlFor="pickup">
          <input onChange={event => {setType(event.currentTarget.value)}} type="radio" id="pickup" name="type" value="pickup" />
          Pickup</label>
          <label htmlFor="delivery">
          <input onChange={event => {setType(event.currentTarget.value)}} type="radio" id="delivery" name="type" value="delivery" />
          Delivery</label>
        </div>
        <input type="submit" value="Next" />
      </form>
    </div>
    </>
  )
}

export default CustomerForm;