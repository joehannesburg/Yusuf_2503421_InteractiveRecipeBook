import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='links'>
          <Link to="/">Available Routes</Link>
        </li>
       
        <li className='links'>
          <Link to="/ticket-purchase">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;