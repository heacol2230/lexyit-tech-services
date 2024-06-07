import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import BookingForm from '../components/BookingForm';

interface ScheduleTodayProps {
  loggedIn: boolean;
  onLogin: (customerID: string) => void;
  onLogout: () => void;
}

const ScheduleToday: React.FC<ScheduleTodayProps> = ({ loggedIn, onLogin, onLogout }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (customerID: string) => {
    onLogin(customerID);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h1>Schedule Today!</h1>
      {loggedIn ? (
        <div>
          <BookingForm />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {isLogin ? (
            <>
              <LoginForm onLogin={handleLogin} />
              <p>
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)}>Register</button>
              </p>
            </>
          ) : (
            <>
              <RegistrationForm />
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)}>Login</button>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ScheduleToday;
