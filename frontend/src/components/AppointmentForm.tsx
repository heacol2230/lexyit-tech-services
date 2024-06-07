import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';

interface AppointmentFormProps {
  customerID: string;
}

interface Service {
  serviceID: number;
  serviceName: string;
  description: string;
  price: number;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ customerID }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<number>(0);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch services from the server upon component mount
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService || !appointmentDate || !startTime || !endTime || !status) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/schedule', {
        customerID,
        serviceID: selectedService,
        appointmentDate,
        startTime,
        endTime,
        status,
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
        <select value={selectedService} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedService(parseInt(e.target.value))}>
          <option value={0}>Select a service</option>
          {services.map(service => (
            <option key={service.serviceID} value={service.serviceID}>{service.serviceName}</option>
          ))}
        </select>
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
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
