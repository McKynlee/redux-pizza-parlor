import './AdminView.css';
import {useSelector} from 'react-redux';

/**
 * Renders All Orders in a Table
 * 
 */
function AdminView() {
  
  // Global Redux state for orderList
  const orderList = useSelector(store => {
    return store.orderList;
  })

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO - Replace sample data with rendered data */}
          {orderList.map((order, index) => {
            return(
              <tr key={index}>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
} // end AdminView

export default AdminView;