import React, { useState } from 'react';
import axios from 'axios';

const ChangePasswordForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    oldPassword: '',
    newPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/change-password', formData);
      setSuccess(response.data.message);
      setError('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || 'An error occurred. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          autoComplete="email"
        />
      </div>
      <div>
        <label>Old Password:</label>
        <input 
          type="password" 
          name="oldPassword" 
          value={formData.oldPassword} 
          onChange={handleChange} 
          required 
          autoComplete="current-password"
        />
      </div>
      <div>
        <label>New Password:</label>
        <input 
          type="password" 
          name="newPassword" 
          value={formData.newPassword} 
          onChange={handleChange} 
          required 
          autoComplete="new-password"
        />
      </div>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
