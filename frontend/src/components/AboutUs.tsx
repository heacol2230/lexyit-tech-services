import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 className="text-3xl mb-4 text-center">About Us</h2>
      <div className="bg-white text-navy p-6 rounded-lg shadow-md" style={{ textAlign: 'justify' }}>
        <p className="mb-4">
          Welcome to Lexy IT – Where Tech Solutions 
          Meet Seamless Service.
          At Lexy IT, we believe in making technology effortless for you. 
          Whether it's setting up your smart home, optimizing your network, 
          or crafting a stunning website, we're here to make it happen. 
          Just like our slogan says, Just Lexy IT! 
          Let's turn your tech challenges into triumphs together!
        </p>
        <p className="mb-4">
          With years of experience in the industry, we specialize in a wide range of services including home networking setup, smart home device installation, PC and laptop repair, and even one-on-one or group training. Do not hesitate to ask us about availability of any services that you need. We understand the importance of having a well-functioning tech environment at home, and we strive to offer solutions that meet your specific needs. We also build and design websites in many different applications and functionality. From 3D animated web pages to a single page application, we will take care of it for you.
        </p>
        <p className="mb-4">
          Customer satisfaction is our top priority. We believe in building lasting relationships with our clients through reliable and affordable tech services. Whether you need a quick fix or a comprehensive tech overhaul, we are here to help. Our clients become part of the Lexy IT family!
        </p>
        <p className="text-center font-bold">Contact us today to learn more about how we can assist you with your home tech needs!</p>
      </div>
    </div>
  );
};

export default AboutUs;
