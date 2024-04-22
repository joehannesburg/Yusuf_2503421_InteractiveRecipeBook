import React, {useContext} from 'react';
import { RoutesContext } from '../../context/RoutesContext';
import './confirmation.css'

const ConfirmationPage = () => {
  const {clearCartWithConfirmation } = useContext(RoutesContext);

  // Call the clearCartWithConfirmation function
  // Could not get this to work without errors
  const confirmationMessages = clearCartWithConfirmation();


  return (
    <main className='confirmation'>
      {/* Prints confirmation message after purchase */}
    <h2>Confirmation</h2>
   <p>Tickets purchased successfully</p>
    
  </main>
  );
};



export default ConfirmationPage;