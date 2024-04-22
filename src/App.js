import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AvailableRoutes from './pages/availableRoutes/AvailableRoutes';
import RouteInformation from './pages/info/RouteInformation';
import TicketPurchase from './pages/tickets/TicketPurchase';
import ConfirmationPage from './pages/confirmation/ConfirmationPage';
import { RouteProvider } from './context/RoutesContext';

function App() {
  return (
    <Router>
      <RouteProvider>
        <Navbar />
        <Routes>
          {/* Routing for pages */}
          {/* Inspiration taken from e-commerce class example */}
          <Route exact path="/" element={<AvailableRoutes />} />
          <Route path="/route/:id" element={<RouteInformation />} />
          <Route path="/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </RouteProvider>
    </Router>
  );
}

export default App;
