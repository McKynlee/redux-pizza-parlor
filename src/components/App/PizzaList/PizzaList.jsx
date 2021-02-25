import axios from 'axios';

// GET pizza list from server
function PizzaList() {
  let pizzaList;

  axios.get('/api/pizza')
    .then(response => {
      console.log('GET /api/pizza:', response.data);
      pizzaList = response.data
    })

  return (
    <div>
      TEST PizzaList {pizzaList}
    </div>
  );
} // end PizzaList

export default PizzaList;