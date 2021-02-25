import axios from 'axios';
import { useSelector } from 'react-redux'

// GET pizza list from server
function PizzaList() {
  const pizzaList = useSelector(store => {
    return store.pizzaList;
  })

  return (
    <section>
      {pizzaList.map((pizza, index) => {
        <div key={index}>
          <p>Name: {pizza.name}</p>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
        </div>
      })}
    </section>
  );
} // end PizzaList

export default PizzaList;