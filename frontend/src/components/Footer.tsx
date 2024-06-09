import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Lexy IT...Just Lexy IT!</h4>
            <ul className="list-unstyled">
              <li>Heather Coleman</li>
              <li>Longs, SC</li>
              <li>(843)251-8300</li>
              <li>Email: heathercsdwd@gmail.com</li>
            </ul>
          </div>
          {/* Column2 */}
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/schedule-today" className="nav-link">Schedule Today!</Link>
          </nav>
          </div>
          </div> 
      </footer>
  )
}

export default Footer;
