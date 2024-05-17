import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-navy p-2 flex justify-between items-center">
      <h1 className="text-2xl text-white">Lexy IT... Just Lexy it!</h1>
      <nav>
        <Link to="/" className="text-white mx-2">Home</Link>
        <Link to="/about-us" className="text-white mx-2">About Us</Link>
        <Link to="/BookingForm" className="text-white mx-2">Schedule Today!</Link>
      </nav>
    </header>
  );
};

export default Header;
