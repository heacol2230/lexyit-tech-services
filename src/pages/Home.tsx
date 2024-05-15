import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import Services from '../components/Services';
import logo from '../assets/LexyITlogo.png';
import './Home.css';  // Import the Home.css file

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-navy text-white">
        <div className="header-container container mx-auto text-center">
          <img src={logo} alt="Business Logo" className="mx-auto logo-spin" style={{ width: '800px' }} />
          <div className="arrow-container">
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          <h2 className="text-5xl mb-4">Welcome to LexyIT</h2>
        </div>
        <div className="text-center">
          <p className="text-xl mb-4">Your trusted partner for home</p>
          <p className="text-xl mb-4">&</p>
          <p className="text-xl mb-4">small business tech solutions</p>
          <Link to="#booking" className="bg-pink text-white px-6 py-3 rounded">Just Lexy It!</Link>
        </div>
      </header>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Services />
        </div>
      </section>
      <section id="booking" className="py-20" style={{ backgroundColor: '#7cd8e0' }}>
        <div className="max-w-md mx-auto">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Home;

