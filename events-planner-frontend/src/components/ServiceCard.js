// src/components/ServiceCard.js (FINAL VERSION)

import React from 'react';

function ServiceCard({ service, onServiceClick }) { 
  const { name, description, cost, category } = service;
  
  // Displays prices in Ksh, formatted with commas
  const costDisplay = cost === 45 ? 'Ksh 45 per person' : `Ksh ${cost.toLocaleString('en-KE')}`;

  return (
    <div 
      className="service-card clickable" 
      onClick={() => onServiceClick(service)} // Triggers image display
      style={{ 
        cursor: 'pointer', // Indicates it's clickable
        /* ... existing styles ... */ 
      }} 
    >
      <h3>{name}</h3>
      {category && <p style={{ fontSize: '0.9em', color: '#555' }}>Category: {category}</p>}
      <p>{description}</p>
      <p className="cost-info">Price: **{costDisplay}**</p>
    </div>
  );
}

export default ServiceCard;