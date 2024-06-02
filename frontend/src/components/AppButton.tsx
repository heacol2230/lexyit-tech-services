import React from 'react';
import { Link } from 'react-router-dom';

interface AppButtonProps {
  to: string;
  children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} className="bg-pink text-white px-6 py-3 rounded">
      {children}
    </Link>
  );
};

export default AppButton;
