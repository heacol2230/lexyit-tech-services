import React from 'react';
import Services from '../components/Services';
import AppButton from '../components/AppButton'; // Ensure correct import
import logo from '../assets/LexyITlogo.png';
import './Home.css';
//C:\xampp2\htdocs\BACKUP_OF_tech-services-booking-practice\tech-services-booking-practice\frontend\src\assets\LexyITlogo.png
const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-navy text-white">
        <div className="header-container container mx-auto text-center">
        <img src={logo} alt="LexyIT logo" className="mx-auto logo-spin" style={{ width: '800px' }} />
          <h2 className="text-5xl mb-4">Welcome to LexyIT</h2>
        </div>
        <div className="text-center">
          <p className="text-xl mb-4">Your trusted partner for home</p>
          <p className="text-xl mb-4">&</p>
          <p className="text-xl mb-4">small business tech solutions</p>
          <AppButton to="/schedule-today">Schedule Today!</AppButton> {/* Use the AppButton component here */}
        </div>
      </header>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Services />
        </div>
      </section>
    </div>
  );
};

export default Home;
