import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl mb-4 text-center">Our Services</h2>
      <Services />
    </div>
  );
};

export default ServicesPage;
