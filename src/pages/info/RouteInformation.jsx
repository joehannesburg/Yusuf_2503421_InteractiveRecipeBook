
import React, {useContext, useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import routesData from '../../Data.json';
import { RoutesContext } from '../../context/RoutesContext';
import './info.css';

function RouteInformation() {
  const { addToCart } = useContext(RoutesContext); // Access addtoCart function from context script
  const { id } = useParams(); // Get route ID for url 
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const route = routesData.find(route => route.id === id);

//Error message for if route not found
  if (!route) return <div className='route-info'>Route not found</div>;

  //Function to add route to cart
  const handlePurchase = () => {
    addToCart(route, quantity);
    // navigate('/ticket-purchase');
  };

  return (
    //Displays route information
    <main className='route-info-container'>
      <h2>Route Information</h2>
      <section className='route-info'>

      
      <h3>{route.title}</h3>
      <p>{route.description}</p>
      <p>Price: ${route.price}</p>
      <p>Duration: {route.duration}</p>
      <p>Stops: {route.stops}</p>
      </section>
      <section className='quantity-input'>
        <label htmlFor="quantity">Quantity:</label>
        <input 
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </section>
      <button onClick={handlePurchase}className="cart-button">Add to Cart</button>
      <Link to="/" className='back-link'>Back</Link>
    </main>
  );
};

export default RouteInformation;
