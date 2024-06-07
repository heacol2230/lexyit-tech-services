import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AppointmentForm from './components/AppointmentForm';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ScheduleToday from './pages/ScheduleToday';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';

const App: React.FC = () => {
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
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route 
            path="/login" 
            element={loggedIn ? <Navigate to="/schedule" /> : <LoginForm onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={loggedIn ? <Navigate to="/schedule" /> : <RegistrationForm />} 
          />
          <Route 
            path="/schedule" 
            element={loggedIn ? <AppointmentForm customerID={customerID} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/schedule-today" 
            element={
              <ScheduleToday 
                loggedIn={loggedIn} 
                onLogin={handleLogin} 
                onLogout={handleLogout} 
              />
            } 
          />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
