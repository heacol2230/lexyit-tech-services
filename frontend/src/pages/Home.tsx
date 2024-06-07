import React from 'react';
import Services from '../components/Services';
import AppButton from '../components/AppButton';
import Audio from '../components/Audio';
import './Home.css';
import lexylogo from '../assets/lexylogo.png';

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-#1b3481 text-white">
        <div className="header-container container mx-auto text-center">
          <img src={lexylogo} alt="lexylogo" className="mx-auto logo-spin" style={{ width: '500px' }} />
          <h2 className="text-5xl mb-4">Welcome to LexyIT</h2>
          <div className="text-center intro-text">
            <p className="text-xl mb-4">
              Your trusted partner <br />
              for home <br />
              & <br /> 
              small business tech solutions</p>
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