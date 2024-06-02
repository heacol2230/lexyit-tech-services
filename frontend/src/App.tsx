import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [customerID, setCustomerID] = useState('');

  const handleLogin = (customerID: string) => {
    setCustomerID(customerID);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setCustomerID('');
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {loggedIn ? (
              <>
                <li><Link to="/schedule">Schedule Appointment</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/login">
            {loggedIn ? <Navigate to="/schedule" /> : <LoginForm onLogin={handleLogin} />}
          </Route>
          <Route path="/register">
            {loggedIn ? <Navigate to="/schedule" /> : <RegistrationForm />}
          </Route>
          <Route path="/schedule">
            {loggedIn ? <AppointmentForm customerID={customerID} /> : <Navigate to="/login" />}
          </Route>
          <Route path="/">
            {loggedIn ? <Navigate to="/schedule" /> : <Navigate to="/login" />}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
