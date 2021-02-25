import { useSelector } from 'react-redux';
import './PizzaList.css'

// GET pizza list from server
function PizzaList() {
  const pizzaList = useSelector(store => {
    return store.pizzaList;
  })

  return (
    <section className="pizza-box-container">
      {pizzaList.map((pizza, index) => {
        return (
          <div key={index} className="individual-pizza-box">
            <p>Name: {pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
          </div>
        )
      })}
    </section>
  );
} // end PizzaList

export default PizzaList;