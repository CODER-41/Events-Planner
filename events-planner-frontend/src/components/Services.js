// src/components/Services.js

import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'http://localhost:4000/services'; 

  // REQUIRED: GET request to fetch initial data
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services. Is JSON Server running on port 4000?", err);
        setIsLoading(false);
      });
  }, []);

  // REQUIRED: Function to update state after a successful POST
  function addService(newService) {
    setServices(prevServices => [...prevServices, newService]);
  }

  if (isLoading) return <h2>Loading Available Services...</h2>;

  return (
    <div className="services-page">
      <h1>Our Professional Event Services</h1>

      {/* Renders the list of services */}
      <div className="service-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <hr style={{ margin: '30px 0' }} />
      
      {/* Renders the form and passes the state update function */}
      <ServiceForm onAddService={addService} />
    </div>
  );
}

export default Services;