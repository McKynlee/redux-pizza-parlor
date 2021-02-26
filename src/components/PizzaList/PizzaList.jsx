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
            <img src={pizza.image_path} />
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button>ADD</button>
          </div>
        )
      })}
      <button>NEXT</button>
    </section >
  );
} // end PizzaList

export default PizzaList;