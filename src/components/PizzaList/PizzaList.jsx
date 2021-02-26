import { useSelector, useDispatch } from 'react-redux';
import './PizzaList.css';
import { useHistory } from 'react-router-dom';


// GET pizza list from server
function PizzaList({totalPrice, setTotalPrice}) {
  const dispatch  = useDispatch();
  const history = useHistory();
  
  const pizzaList = useSelector(store => {
    return store.pizzaList;
  })

  const addButtonClick = (event) => {
    console.log(event.target)
    let id = Number(event.currentTarget.dataset.id);
    let price = Number(event.currentTarget.dataset.price);
    console.log('pizza id', id, 'price', price);
    console.log('Clicked to add pizza', );
    // TODO: dispatch pizza id to 'ADD_TO_CART'
    dispatch({
      type: "ADD_TO_CART",
      payload: {id, price, quantity: 1 }
    })
    setTotalPrice(totalPrice + price);
  }

  const nextButtonClick = () => {
    console.log('Clicked NEXT on pizza');
    history.push('/customerInfo');
  }

  return (
    <section className="pizza-box-container">
      {pizzaList.map((pizza, index) => {
        return (
          <div key={index} className="individual-pizza-box">
            <p>Name: {pizza.name}</p>
            <img src={pizza.image_path} />
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button data-id={pizza.id} data-price={pizza.price} 
            onClick={addButtonClick}>ADD</button>
          </div>
        )
      })}
      <button className="pizza-next-button"
        onClick={nextButtonClick}>NEXT</button>
    </section>
  );
} // end PizzaList

export default PizzaList;