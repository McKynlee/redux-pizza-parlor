import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
// import {useDispatch} from 'react-redux';

function CheckoutList({totalPrice, setTotalPrice}) {

  const history = useHistory();

  const checkoutCustomer = useSelector(store => store.checkout);

  // axios POST to database
  const addOrder = () => {
    axios({
      method: 'POST',
      url: '/api/order',
      // data: {customer_name: 'John Smith',
      //   street_address: '123 46th street',
      //   city: 'Minneapolis',
      //   zip: '55455',
      //   type: 'Delivery',
      //   total: 29.98,
      //   pizzas: [{ 'id': 1, 'quantity': 1 }]
      // }
    })
    .then((response) => {
      console.log('POST response', response);
    })
    .catch((error) => {
      console.log("Error from _____", error);
    });
    
  }
  // Show a confirmation dialog

  // clear the cart

  // navigate to the pizza page (step one)

  const onClickSubmit = () => {
    console.log('clicked');
  
    setTotalPrice(0);
    alert ('Your Order Is Confirmed!');
    history.push('/');
  }

  return (
  <div>
    <h2>Step 3: Checkout</h2>
    <div>{}</div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost</th>  
        </tr>
      </thead>
      <tbody>
        {/* {'reducer'.map(())} */}
        <tr>
          <td>Pepperoni</td>
          <td>$13.99</td>
        </tr>
        <tr>
          <td>Sausage</td>
          <td>$13.99</td>
        </tr>
      </tbody>
    </table>
    <div> Total: {totalPrice}</div>
    <button onClick={onClickSubmit}>CHECKOUT</button>
  </div>
  );
}

export default CheckoutList;


  // const dispatch = useDispatch();
  // const history = useHistory();

  // const onClickSubmit = () => {
  //   dispatch({
  //     type: '',
  //     payload:
  //   });
  //   history.push('/');
  // }

