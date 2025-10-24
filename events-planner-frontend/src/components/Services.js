// src/components/Services.js (FINAL VERSION)

import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null); 

  // Make sure this matches your JSON Server port!
  const API_URL = 'http://localhost:4000/services'; 

  // GET request (fetches all services)
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  // Handler for POST request state update
  function addService(newService) { 
    setServices(prevServices => [...prevServices, newService]);
  }

  // Handler for card click (displays images)
  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  if (isLoading) return <h2>Loading Available Services...</h2>;

  return (
    <div className="services-page">
      <h1>Our Professional Event Services</h1>

      {/* Conditional Display for Selected Service Images */}
      {selectedService && (
        <div className="selected-image-display" style={{ textAlign: 'center', marginBottom: '30px', border: '1px solid #ddd', padding: '15px', backgroundColor: 'white' }}>
          <h2>{selectedService.name} Previews</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {/* Loops through the images array and displays each photo */}
            {selectedService.images.map((imagePath, index) => (
                <img 
                    key={index}
                    src={imagePath} 
                    alt={`${selectedService.name} ${index + 1}`} 
                    style={{ 
                        width: '300px', 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                    }} 
                />
            ))}
          </div>
        </div>
      )}
      
      {/* Renders the list of services */}
      <div className="service-list">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onServiceClick={handleSelectService}
          />
        ))}
      </div>

      <hr style={{ margin: '30px 0' }} />
      
      <ServiceForm onAddService={addService} />
    </div>
  );
}

export default Services;
