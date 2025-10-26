import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingDetails.css'; // Assuming you'll create this CSS file

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings/${id}`);
        if (!response.ok) {
          throw new Error('Booking not found');
        }
        const data = await response.json();
        setBooking(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  if (loading) return <div className="loading">Loading booking details...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="booking-details">
      <h1>Booking Details</h1>
      {booking && (
        <div className="booking-card">
          <h2>{booking.eventType}</h2>
          <p><strong>ID:</strong> {booking.id}</p>
          <p><strong>User ID:</strong> {booking.userId}</p>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email || 'N/A'}</p>
          <p><strong>National ID:</strong> {booking.nationalId}</p>
          <p><strong>Event Date:</strong> {booking.eventDate}</p>
          <p><strong>Event Location:</strong> {booking.eventLocation}</p>
          <p><strong>Approximate Attendees:</strong> {booking.approxAttendees}</p>
          <p><strong>Budget:</strong> KES {booking.budget}</p>
          <p><strong>Contact Phone:</strong> {booking.contactPhone}</p>
          <p><strong>Event Details:</strong> {booking.eventDetails}</p>
          <p><strong>Special Requirements:</strong> {booking.specialReq}</p>
          <p><strong>Status:</strong> {booking.status}</p>
          <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
