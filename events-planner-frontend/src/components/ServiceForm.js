// src/components/ServiceForm.js

import React, { useState } from 'react';

function ServiceForm({ onAddService }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cost: '',
  });

  const API_URL = 'http://localhost:4000/services'; 

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newService = {
      ...formData,
      cost: parseFloat(formData.cost), 
    };

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newService),
    };

    fetch(API_URL, configObj)
      .then(res => res.json())
      .then(data => {
        // REQUIRED STATE UPDATE: Passes the new data to the parent (Services.js)
        onAddService(data); 
        setFormData({ name: '', description: '', cost: '' });
      })
      .catch(error => console.error('Error adding service:', error));
  }

  return (
    <div className="service-form-container" style={{ marginTop: '20px', padding: '15px', border: '1px dashed #aaa' }}>
      <h2>Add a New Service Offering</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
        <input type="text" name="name" placeholder="Service Name" value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Detailed Service Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="cost" placeholder="Estimated Cost (Numbers only)" value={formData.cost} onChange={handleChange} required />
        <button type="submit" style={{ padding: '10px', background: 'teal', color: 'white', border: 'none' }}>Publish Service</button>
      </form>
    </div>
  );
}

export default ServiceForm;