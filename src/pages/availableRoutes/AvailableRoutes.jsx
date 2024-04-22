import React from 'react';
import { Link } from 'react-router-dom';
import routesData from '../../Data.json';
import './routes.css'

const AvailableRoutes = () => {
  // shows whether routes are being rendered in console
  console.log("AvailableRoutes rendered");
  return (
    <main className='routes-container'>
      <h2>Available Routes</h2>
      // maps through routesData and displays each route as a link
      <ul className='routes-list'>
        {routesData.map(route => (
          <li key={route.id} className="route-item">
            <Link to={`/route/${route.id}`} className="route-link">{route.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AvailableRoutes;