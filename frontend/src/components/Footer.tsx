import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-#1b3481 text-white py-6">
      <div className="container mx-auto footer-content footer-row left-footer">
        <div className="left-footer mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl">Simplify Tech, Just Lexy IT!</h3>
        <div/>
        <div className="right-footer">
              <Link to="/" className="footer-link">Home</Link>
        </div>
          <div className="footer-row">
            <div className="left-footer">
              <p className="text-sm">Email: heathercsdwd@gmail.com</p>
            </div>
            <div className="right-footer">
              <Link to="/services" className="footer-link">Services</Link>
            </div>
          </div>
          <div className="footer-row">
            <div className="left-footer">
              <p className="text-sm">Phone: (843) 251-8300</p>
            </div>
            <div className="right-footer">
              <Link to="/about-us" className="footer-link">About Us</Link>
            </div>
          </div>
          <div className="footer-row">
            <div className="left-footer">
              <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="right-footer">
              <Link to="/schedule" className="footer-link">Schedule Today!</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
