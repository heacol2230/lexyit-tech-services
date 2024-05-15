import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log({ date, time, name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white text-navy rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Just Lexy It!</h2>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-2">Date</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" required autoComplete="off" />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block mb-2">Time</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border rounded" required autoComplete="off" />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required autoComplete="name" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required autoComplete="email" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">Phone</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" required autoComplete="tel" />
      </div>
      <button type="submit" className="w-full bg-pink p-2 text-white rounded">Book Now</button>
    </form>
  );
};

export default BookingForm;
