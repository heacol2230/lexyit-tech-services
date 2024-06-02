import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface AppointmentFormProps {
  customerID: string;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ customerID }) => {
  const [serviceID, setServiceID] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [status, setStatus] = useState('');
  const [invoiceID, setInvoiceID] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceID || !appointmentDate || !startTime || !endTime || !status || !invoiceID) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/schedule', {
        customerID,
        serviceID,
        appointmentDate,
        startTime,
        endTime,
        status,
        invoiceID,
      });
      if (response.data.success) {
        setSuccess(response.data.message);
        setError('');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service ID"
          value={serviceID}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setServiceID(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={appointmentDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAppointmentDate(e.target.value)}
        />
        <br />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setStartTime(e.target.value)}
        />
        <br />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEndTime(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Invoice ID"
          value={invoiceID}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInvoiceID(e.target.value)}
        />
        <br />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
