import {useSelector} from 'react-redux';
import {useHistory} from 'react-rounter-dom';
import {useDispatch} from 'react-redux';

function CheckoutList() {

  // const dispatch = useDispatch();
  // const history = useHistory();

  // const onClickSubmit = () => {
  //   dispatch({
  //     type: '',
  //     payload:
  //   });
  //   history.push('/');
  // }



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
      <thead>
      <tbody>
        {}
      </tbody>
    </table>
    <div> Total: {}</div>
    <button onClick={onClickSubmit}>CHECKOUT</button>
  </div>
  );
}

export default ChecoutList;