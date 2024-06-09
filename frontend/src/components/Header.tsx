import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-slogan">
        <h1 className="slogan">Just Lexy IT!</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/schedule-today" className="nav-link">Schedule Today!</Link>
      </nav>
    </header>
  );
};

export default Header;
