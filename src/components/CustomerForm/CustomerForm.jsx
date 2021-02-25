import { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css'

function CustomerForm() {
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    // addCustomer();
    axios
      .post('/pizza', {
        name,
        address,
        city,
        zip,
        type
      })
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
        <section className="radio-section">
          <label for="pickup">
          <input type="radio" id="pickup" name="type" value="pickup" />
          Pickup</label>
          <label for="delivery">
          <input type="radio" id="delivery" name="type" value="delivery" />
          Delivery</label>
        </section>
        <input type="submit" value="Next" />
      </form>
    </div>
    </>
  )
}

export default CustomerForm;