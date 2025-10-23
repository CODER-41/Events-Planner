// src/components/ServiceCard.js

import React from 'react';

function ServiceCard({ service }) {
  // Destructuring properties from the service object
  const { name, description, cost, category } = service;

  // 💰 CHANGE MADE HERE: Use 'Ksh' instead of '$' and apply localization logic
  let costDisplay;
  if (cost === 45) {
    // Logic for catering price (45 per person)
    costDisplay = 'Ksh 45 per person';
  } else {
    // Standard price display with comma formatting for thousands
    costDisplay = `Ksh ${cost.toLocaleString('en-KE')}`;
  }

  return (
    <div className="service-card" style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      {category && <p style={{ fontSize: '0.9em', color: '#555' }}>Category: {category}</p>}
      <p>{description}</p>
      <p className="cost-info">Price: {costDisplay}</p>
    </div>
  );
}

export default ServiceCard;