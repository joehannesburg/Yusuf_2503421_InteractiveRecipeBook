import React, { createContext, useState, useEffect } from 'react';
import routesData from '../Data.json';

export const RoutesContext = createContext();

export const RouteProvider = ({ children }) => {
    // Stores routes and cart data
    const [routes, setRoutes] = useState([]);
    const [cart, setCart] = useState([]);

    // Sets initial routes
    useEffect(() => {
        setRoutes(routesData);
      }, []);
    
      // Adds a route to the cart
      const addToCart = (route, quantity) => {
        const existingItem = cart.find((item) => item.route.id === route.id);
        if (existingItem) {
          updateQuantity(route.id, parseInt(existingItem.quantity) + parseInt(quantity));
        } else {
          setCart([...cart, { route, quantity: parseInt(quantity) }]);
        }
      };
    
      // Removes route from cart
      const removeFromCart = (routeId) => {
        setCart(cart.filter((item) => item.route.id !== routeId));
      };
    
      // updates the quantity of a route in the cart
      const updateQuantity = (routeId, quantity) => {
        setCart(
          cart.map((item) => {
            if (item.route.id === routeId) {
              return { ...item, quantity: parseInt(quantity) };
            }
            return item;
          })
        );
      };
      // Gets the total amount of the cart
      const getTotalAmount = () => {
        return cart.reduce((total, item) => total + item.route.price * item.quantity, 0);
      };
    
      //meant to show confirmation message with details of purchase, but could not get it to work without errors.
      const clearCartWithConfirmation = () => {
        // Generate confirmation messages for each item in the cart
        const confirmationMessages = cart.map((item) => {
          const { id, quantity } = item.route;
          const route = routes.find((r) => r.id === id);
          const routeTitle = route ? route.title : 'Unknown Route';
          return `${quantity} ticket(s) to ${routeTitle} purchased successfully`;
        });
    
    
    
        // Clear the cart after purchase
        setCart([]);

          // Return the confirmation messages
    return confirmationMessages;
      };

      //Give context values to children components
      return (
        <RoutesContext.Provider
          value={{ routes, cart, addToCart, removeFromCart, updateQuantity, getTotalAmount, clearCartWithConfirmation }}
        >
          {children}
        </RoutesContext.Provider>
      );
    };