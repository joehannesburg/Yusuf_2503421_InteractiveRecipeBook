import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {RoutesContext} from '../../context/RoutesContext';

function TicketPurchase() {
  const { cart, removeFromCart, updateQuantity, getTotalAmount } = useContext(RoutesContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Function to remove route from cart
  const handleRemoveFromCart = (routeId) => {
    removeFromCart(routeId);
  };
  // Function to update quantity of route in cart
  const handleQuantityChange = (routeId, quantity) => {
    updateQuantity(routeId, quantity);
  };
// Function to handle checkout
  const handleCheckout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/confirmation'); //Navigate to confirmation page after 2 seconds
    }, 2000);
  };

  // resets submitting status after 2 seconds
  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  }, [isSubmitting]);

  //Error message for if no tickets are selected
  if (cart.length === 0) {
    return <div>No tickets selected for purchase</div>;
  }

  return (
    <div>
      {/* if tickets selected  show table with details */}
      <h1>Ticket Purchase</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.route.id}>
            {item.route.title} - Price: ${item.route.price} - Quantity:{' '}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.route.id, e.target.value)}
              min="1"
            />{' '}
            <button onClick={() => handleRemoveFromCart(item.route.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${getTotalAmount()}</p>
      <button onClick={handleCheckout} disabled={isSubmitting}> 
      {/* when button clicked for purchase, carry out handleCheckout function */}
        {isSubmitting ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
}

export default TicketPurchase;