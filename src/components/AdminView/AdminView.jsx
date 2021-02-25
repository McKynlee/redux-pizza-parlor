import './AdminView.css';
/**
 * Renders All Orders in a Table
 * 
 */
function AdminView() {
  
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
          <tr>
            <td>Chris</td>
            <td>4/5/2018 at 4:45pm</td>
            <td>Pickup</td>
            <td>$39.79</td>
          </tr>
          <tr>
            <td>Ally</td>
            <td>4/6/2018 at 5:00pm</td>
            <td>Delivery</td>
            <td>$13.99</td>
          </tr>
        </tbody>
      </table>
    </>
  );
} // end AdminView

export default AdminView;