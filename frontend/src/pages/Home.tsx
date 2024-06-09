import React from 'react';
import Services from '../components/Services';
import AppButton from '../components/AppButton';
import Audio from '../components/Audio';
import './Home.css';
import lexylogo from '../assets/lexylogo.png';

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-#1b3481 text-white py-6">
        <div className="header-container container mx-auto flex flex-col items-center">
          <img src={lexylogo} alt="LexyIT Logo" className="logo-spin mb-4" style={{ width: '400px' }} />
          <h1 className="text-4xl mb-2">Simplify Tech, Just Lexy it!</h1>
          <nav className="nav flex space-x-4 mb-4">
            <a href="/" className="nav-link">Home</a>
            <a href="/about-us" className="nav-link">About Us</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/schedule-today" className="nav-link">Schedule Today!</a>
          </nav>
          <h2 className="text-5xl mb-4">Welcome to LexyIT</h2>
          <div className="text-center intro-text">
            <p className="text-xl mb-4">
              Your trusted partner <br />
              for home <br />
              & <br />
              small business tech solutions
            </p>
            <div className="button-container">
              <AppButton to="/schedule-today">Schedule Today!</AppButton>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Services />
        </div>
      </section>
      <Audio />
    </div>
  );
};

export default Home;
