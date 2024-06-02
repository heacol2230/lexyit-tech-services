import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import BookingForm from '../components/BookingForm';

const ScheduleToday: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div>
      <h1>Schedule Today!</h1>
      {isAuthenticated ? (
        <BookingForm />
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
