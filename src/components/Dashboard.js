import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaCalendarAlt, FaMagic, FaFilm, FaTshirt, FaSmile, FaRocket, FaCode, FaPaintBrush, FaCrown, FaCloudRain, FaCar, FaSpinner, FaSadTear, FaHeart, FaHeartBroken } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [approxAttendees, setApproxAttendees] = useState('');
  const [budget, setBudget] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [specialReq, setSpecialReq] = useState('');
  const [customEventType, setCustomEventType] = useState('');
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingBookingId, setDeletingBookingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [dateError, setDateError] = useState(''); // This will now hold the popup message
  const [showDeleteAccountLoading, setShowDeleteAccountLoading] = useState(false);
  const [showGoodbyeMessage, setShowGoodbyeMessage] = useState(false);
  const [deleteAccountError, setDeleteAccountError] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [weatherLoading, setWeatherLoading] = useState({});
  const [trafficData, setTrafficData] = useState({});
  const [trafficLoading, setTrafficLoading] = useState({});
  const [expandedFAQs, setExpandedFAQs] = useState({});
  const navigate = useNavigate();

  const testimonials = [
    { name: "Alice Johnson", testimonial: "Snakepiece made my wedding unforgettable! Every detail was perfect.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face" },
    { name: "Bob Smith", testimonial: "Corporate event went smoothly thanks to their expertise.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
    { name: "Carol Davis", testimonial: "Birthday party for my kids was a blast!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
    { name: "David Wilson", testimonial: "Conference planning was seamless.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" },
    { name: "Eva Brown", testimonial: "They turned my vision into reality.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" },
    { name: "Frank Miller", testimonial: "Outstanding service and creativity.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" },
    { name: "Grace Lee", testimonial: "Highly recommend for any event!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" },
    { name: "Henry Taylor", testimonial: "Professional and fun team.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" },
    { name: "Ivy Chen", testimonial: "Exceeded all expectations.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face" },
    { name: "Jack Anderson", testimonial: "Made my graduation memorable.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face" },
    { name: "Kathy White", testimonial: "Fantastic attention to detail.", image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=80&h=80&fit=crop&crop=face" },
    { name: "Liam Harris", testimonial: "Event of a lifetime!", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" },
    { name: "Mia Clark", testimonial: "Stress-free planning experience.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" },
    { name: "Noah Lewis", testimonial: "Creative and innovative.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" },
    { name: "Olivia Walker", testimonial: "Worth every penny.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" },
    { name: "Paul Hall", testimonial: "Amazing vendors and coordination.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
    { name: "Quinn Young", testimonial: "They made it magical.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
    { name: "Rachel King", testimonial: "Top-notch service.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" },
    { name: "Sam Wright", testimonial: "Unparalleled professionalism.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" },
    { name: "Tina Adams", testimonial: "Will use again for sure!", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" },
    { name: "Uma Patel", testimonial: "Dream team for events.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face" },
    { name: "Victor Reed", testimonial: "Flawless execution.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face" },
    { name: "Wendy Foster", testimonial: "Heartfelt thanks!", image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=80&h=80&fit=crop&crop=face" },
    { name: "Xander Gray", testimonial: "Beyond impressed.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" },
    { name: "Yara Nelson", testimonial: "Perfect from start to finish.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" }
  ];

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (!loggedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(loggedUser));
      // Load bookings from API
      fetch(`${process.env.REACT_APP_API_URL}/bookings`)
        .then(response => response.json())
        .then(data => {
          const userBookings = data.filter(booking => booking.userId === JSON.parse(loggedUser).id);
          // Update any existing 'Pending' statuses to the new message
          const updatedBookings = userBookings.map(booking => ({
            ...booking,
            status: booking.status === 'Pending' ? 'Agent will be in touch soon' : booking.status
          }));
          setBookings(updatedBookings);
        })
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, [navigate]);

  const handleDateChange = (e) => {
    const selectedDateValue = e.target.value;
    setEventDate(selectedDateValue);

    if (!selectedDateValue) {
      setDateError('');
      return;
    }

    const selectedDate = new Date(selectedDateValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Compare date part only

    if (selectedDate < today) {
      setDateError('You must choose a future date for the event.');
    } else if (selectedDate.getTime() === today.getTime()) {
      setDateError('We cannot schedule and arrange your event on the same day. Please insert a future date.');
    } else {
      setDateError('');
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // Re-validate date on submission to be absolutely sure
    if (dateError) {
      // The error popup is already showing, so we just stop.
      return;
    }
    if (!eventDate) {
      setDateError('Please select an event date.');
      return;
    }
    setIsLoading(true);
    const finalEventType = eventType === 'Other' && customEventType ? customEventType : eventType;
    const newBooking = {
      userId: user.id,
      eventType: finalEventType,
      eventDate,
      eventDetails,
      eventLocation,
      approxAttendees,
      budget,
      contactPhone,
      specialReq,
      status: 'Agent will be in touch soon'
    };
    try {
      // POST new booking to API
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });
      const data = await response.json();
      setBookings([...bookings, data]);
      // Reset form
      setEventType('');
      setEventDate('');
      setEventDetails('');
      setEventLocation('');
      setApproxAttendees('');
      setBudget('');
      setContactPhone('');
      setSpecialReq('');
      setCustomEventType('');
      setIsLoading(false);
      setShowModal(true);
    } catch (error) {
      console.error('Error creating booking:', error);
      setIsLoading(false);
    }
  };

  const handleDeleteBooking = (id) => {
    setDeletingBookingId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteBooking = async () => {
    if (!deletingBookingId) return;
    setDeleteLoading(true);
    setDeleteError('');
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings/${deletingBookingId}`, {
        method: 'DELETE',
      });
      if (response.ok) { // Server successfully deleted the booking (e.g., 200 OK, 204 No Content)
        // Filter out the booking from the state
        const updatedBookings = bookings.filter(booking => booking.id !== deletingBookingId);
        setBookings(updatedBookings);
        // Close the modal and show success message
        setShowDeleteModal(false);
        setDeletingBookingId(null);
        setShowDeleteSuccess(true);
        setTimeout(() => {
          setShowDeleteSuccess(false);
        }, 3000);
      } else if (response.status === 404) {
        // Booking was not found on the server, implying it's already deleted or never existed.
        // From the user's perspective, it's effectively deleted.
        // We still update the UI to reflect this.
        const updatedBookings = bookings.filter(booking => booking.id !== deletingBookingId);
        setBookings(updatedBookings);
        setShowDeleteModal(false);
        setDeletingBookingId(null);
        setShowDeleteSuccess(true);
        setTimeout(() => {
          setShowDeleteSuccess(false);
        }, 3000);
      } else {
        // Handle other server errors (e.g., 500 Internal Server Error)
        const errorText = await response.text().catch(() => 'Unknown error'); // Try to get error message
        throw new Error(`Server error: ${response.status} - ${errorText || 'Failed to delete booking'}`);
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      setDeleteError(`Failed to delete booking: ${error.message}. Please try again.`);
      setShowDeleteModal(false);
    } finally {
      setDeleteLoading(false); // Always reset loading state
    }
  };

  const cancelDeleteBooking = () => {
    setShowDeleteModal(false);
    setDeletingBookingId(null);
  };

  const handleDeleteAccount = () => {
    setShowDeleteAccountModal(true);
  };

  const confirmDeleteAccount = async () => {
    setShowDeleteAccountModal(false);
    setShowDeleteAccountLoading(true);
    setDeleteAccountError('');

    try {
      // Delete all user bookings first
      const userBookings = bookings.filter(booking => booking.userId === user.id);
      for (const booking of userBookings) {
        await fetch(`${process.env.REACT_APP_API_URL}/bookings/${booking.id}`, {
          method: 'DELETE',
        });
      }

      // Delete user account
      await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
        method: 'DELETE',
      });

      // Clear local storage
      localStorage.removeItem('user');

      setShowDeleteAccountLoading(false);
      setShowGoodbyeMessage(true);

      setTimeout(() => {
        setShowGoodbyeMessage(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeleteAccountError('Failed to delete account. Please try again.');
      setShowDeleteAccountLoading(false);
    }
  };

  const cancelDeleteAccount = () => {
    setShowDeleteAccountModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const toggleFAQ = (index) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const fetchWeather = async (location, eventDate, bookingId) => {
    if (!location) return;
    setWeatherLoading(prev => ({ ...prev, [bookingId]: true }));
    const apiKey = 'be9c8ce2c38719ed1e8d1605c15d3398';

    const tryFetch = async (query) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Weather API error');
      return await response.json();
    };

    try {
      let data;
      try {
        // First try the location as is
        data = await tryFetch(location);
      } catch {
        // If fails, try appending ",Kenya" assuming it's in Kenya
        data = await tryFetch(`${location},Kenya`);
      }

      const weatherInfo = {
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };

      setWeatherData(prev => ({ ...prev, [bookingId]: weatherInfo }));
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeatherData(prev => ({ ...prev, [bookingId]: { error: 'Unable to fetch weather data' } }));
    } finally {
      setWeatherLoading(prev => ({ ...prev, [bookingId]: false }));
    }
  };

  const fetchTraffic = async (bookingId) => {
    setTrafficLoading(prev => ({ ...prev, [bookingId]: true }));
    const apiKey = 'KZxqPKkTBCBLZLUupVhdu89m7CP4xQwu';

    try {
      // Nairobi-Nakuru highway coordinates (approximate bounding box)
      // Nairobi: -1.2864, 36.8172
      // Nakuru: -0.3031, 36.0800
      const bbox = '-1.5,36.5,-0.1,36.9'; // Bounding box for Nairobi-Nakuru route

      const url = `https://api.tomtom.com/traffic/services/4/incidentDetails/s3/${bbox}/10/-1/json?key=${apiKey}&language=en-GB&timeValidityFilter=present`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Traffic API error');

      const data = await response.json();

      // Process traffic incidents
      const incidents = data.incidentDetails || [];
      const highwayIncidents = incidents.filter(incident =>
        incident.description?.toLowerCase().includes('nairobi') ||
        incident.description?.toLowerCase().includes('nakuru') ||
        incident.description?.toLowerCase().includes('highway') ||
        incident.description?.toLowerCase().includes('a2') ||
        incident.description?.toLowerCase().includes('nairobi-nakuru')
      );

      let congestionLevel = 'Low';
      let message = 'Traffic flow is normal on Nairobi–Nakuru highway';

      if (highwayIncidents.length > 0) {
        const hasMajorIncident = highwayIncidents.some(incident =>
          incident.iconCategory === 6 || // Road closed
          incident.iconCategory === 7 || // Road works
          incident.iconCategory === 8    // Accident
        );

        if (hasMajorIncident) {
          congestionLevel = 'High';
          message = 'Major incident reported on Nairobi–Nakuru highway. Expect significant delays.';
        } else {
          congestionLevel = 'Medium';
          message = 'Minor congestion on Nairobi–Nakuru highway. Allow extra travel time.';
        }
      }

      const trafficInfo = {
        congestionLevel,
        message,
        incidentCount: highwayIncidents.length,
        lastUpdated: new Date().toLocaleTimeString()
      };

      setTrafficData(prev => ({ ...prev, [bookingId]: trafficInfo }));
    } catch (error) {
      console.error('Error fetching traffic:', error);
      setTrafficData(prev => ({ ...prev, [bookingId]: {
        error: 'Unable to fetch traffic data',
        congestionLevel: 'Unknown',
        message: 'Traffic information unavailable'
      } }));
    } finally {
      setTrafficLoading(prev => ({ ...prev, [bookingId]: false }));
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Snakepiece event house Kenya</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activeTab === 'dashboard' ? 'active' : ''}>
              <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
            </li>
            <li className={activeTab === 'booking' ? 'active' : ''}>
              <button onClick={() => setActiveTab('booking')}>Booking Hub</button>
            </li>
            <li className={activeTab === 'testimonials' ? 'active' : ''}>
              <button onClick={() => setActiveTab('testimonials')}>What Our Clients Say</button>
            </li>
            <li className={activeTab === 'calendar' ? 'active' : ''}>
              <button onClick={() => setActiveTab('calendar')}>Weather & Traffic</button>
            </li>
            <li className={activeTab === 'help' ? 'active' : ''}>
              <button onClick={() => setActiveTab('help')}>Need Help?</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to Snakepiece Event House Kenya, {user.name}</h1>
          <div className="profile-icon">
            <span>{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <button onClick={handleDeleteAccount} className="delete-account-btn">Delete Account</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </header>

        {activeTab === 'dashboard' && (
          <>
            <div className="profile-section">
              <div className="profile-left">
                <h2>Your Profile</h2>
                <div className="profile-info">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>National ID:</strong> {user.nationalId}</p>
                </div>
                <p className="profile-note">Profile details cannot be edited.</p>
                <div className="group-credit-box">
                  <div className="credit-content">
                    <h3>Powered by Group 4!</h3>
                    <p>
                      This web app was built by our amazing team:
                    </p>
                    <ul className="team-list">
                      <li>Esther</li>
                      <li>Barongo</li>
                      <li>Christopher</li>
                      <li>Jeremiah</li>
                      <li>Ronny (Team Leader)</li>
                    </ul>
                    <div className="credit-icons">
                      <FaRocket />
                      <FaMagic />
                      <FaCode />
                      <FaPaintBrush />
                      <FaCrown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-card">
                <div className="card-background">
                  <div className="shape shape1"></div>
                  <div className="shape shape2"></div>
                  <div className="shape shape3"></div>
                </div>
                <div className="card-content">
                  <h3>DON'T FORGET TO BOOK YOUR NEXT PARTY BEFORE IT TURNS INTO A SOLO DANCE!</h3>
                  <button className="setup-btn">BOOK NOW</button>
                </div>
              </div>
            </div>

            <div className="dashboard-content">
              <div className="booking-section">
                <h2>Book Your Event</h2>
                <form onSubmit={handleBooking} className="booking-form">
                <div className="form-group">
                  <label>Event Type *</label>
                  <select value={eventType} onChange={(e) => setEventType(e.target.value)} required>
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {eventType === 'Other' && (
                  <div className="form-group">
                    <label>You don't see your event type name in the drop-down? Don't worry, we have got you! Fill the name of the event below *</label>
                    <input
                      type="text"
                      value={customEventType}
                      onChange={(e) => setCustomEventType(e.target.value)}
                      placeholder="Enter your custom event type (max 20 words, 200 characters)"
                      maxLength="200"
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <label>Event Date *</label>
                  <input
                    type="date"
                    min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                    value={eventDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Event Location *</label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Enter event location (e.g., Nairobi, Kenya)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Approximate Number of Attendees *</label>
                  <input
                    type="number"
                    value={approxAttendees}
                    onChange={(e) => setApproxAttendees(e.target.value)}
                    placeholder="e.g., 100"
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Budget (in KES) *</label>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., 50000"
                    min="0"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Phone Number *</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g., +254 712 345 678"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Event Details *</label>
                  <textarea
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    placeholder="Describe your event requirements..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Special Requirements *</label>
                  <textarea
                    value={specialReq}
                    onChange={(e) => setSpecialReq(e.target.value)}
                    placeholder="Any special requests or additional details..."
                    required
                  ></textarea>
                </div>
                  <button type="submit" className="book-btn" disabled={isLoading || !!dateError}>
                    {isLoading ? (
                      <>
                        <span className="spinner"></span> Booking...
                      </>
                    ) : (
                      'Book Event'
                    )}
                  </button>
                </form>
              </div>

              <div className="bookings-section">
                <h2>Your Bookings</h2>
                {bookings.length === 0 ? (
                  <p>No bookings yet. Book your first event!</p>
                ) : (
                  <div className="bookings-list">
                    {bookings.map(booking => (
                      <div key={booking.id} className="booking-card">
                        <h3>{booking.eventType}</h3>
                        <p><strong>Date:</strong> {booking.eventDate}</p>
                        <p><strong>Location:</strong> {booking.eventLocation || 'N/A'}</p>
                        <p><strong>Attendees:</strong> {booking.approxAttendees || 'N/A'}</p>
                        <p><strong>Budget:</strong> KES {booking.budget || 'N/A'}</p>
                        <p><strong>Details:</strong> {booking.eventDetails}</p>
                        <span className={`status ${booking.status.toLowerCase().replace(/\s+/g, '-')}`}>{booking.status}</span>
                        <button onClick={() => handleDeleteBooking(booking.id)} className="delete-btn">Delete</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="services-section">
              <h2>Our Services</h2>
              <div className="services-list">
                <div className="service-item">
                  <h3>PA Systems</h3>
                  <p>Professional sound systems for clear audio at your events.</p>
                </div>
                <div className="service-item">
                  <h3>MC Services</h3>
                  <p>Experienced Master of Ceremonies to host and manage your event.</p>
                </div>
                <div className="service-item">
                  <h3>Videography</h3>
                  <p>High-quality video recording and editing for your special moments.</p>
                </div>
                <div className="service-item">
                  <h3>Photography</h3>
                  <p>Capturing beautiful memories with professional photography services.</p>
                </div>
                <div className="service-item">
                  <h3>Tents</h3>
                  <p>Spacious and elegant tents for outdoor events and gatherings.</p>
                </div>
                <div className="service-item">
                  <h3>Cars</h3>
                  <p>Luxury vehicle rentals for transportation and special occasions.</p>
                </div>
                <div className="service-item">
                  <h3>Event Planning</h3>
                  <p>Comprehensive event management and coordination services.</p>
                </div>
                <div className="service-item">
                  <h3>Catering</h3>
                  <p>Delicious food and beverage services tailored to your event needs.</p>
                </div>
                <div className="service-item">
                  <h3>Decorations</h3>
                  <p>Creative and thematic decorations to enhance your event atmosphere.</p>
                </div>
                <div className="service-item">
                  <h3>Lighting</h3>
                  <p>Professional lighting setups for ambiance and visibility.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'booking' && (
          <div className="booking-hub-section">
            <h2>Booking Hub</h2>
            <div className="booking-instructions">
              <h3>How to Book an Event</h3>
              <p>Follow these simple steps to book your dream event:</p>
              <ol>
                <li>Choose your event type from the dropdown menu.</li>
                <li>Select your preferred event date.</li>
                <li>Provide detailed information about your event requirements.</li>
                <li>Click "Book Event" to submit your booking.</li>
              </ol>
              <div className="funny-note">
                <h4><FaExclamationTriangle /> IMPORTANT NOTICE: Book One Week in Advance! <FaExclamationTriangle /></h4>
                <p>
                  <FaRocket /> Hey there, party animal! <FaSmile /> We strongly recommend booking your event service at least ONE WEEK in advance. <FaCalendarAlt />
                  Why? Because we're not magicians (though we can arrange for one if you book early enough! <FaMagic />).
                  Give us time to arrange the chaos, coordinate the caterers, and make sure your event doesn't turn into a
                  "surprise" disaster movie. <FaFilm /> Last-minute bookings? That's like showing up to a wedding in pajamas –
                  fun for you, nightmare for everyone else! <FaTshirt /> Book now and let's make your event legendary, not legendary
                  in the "what not to do" category. <FaRocket />
                </p>
              </div>
            </div>
            <div className="booking-section">
              <h3>Book Your Event</h3>
              <form onSubmit={handleBooking} className="booking-form">
                <div className="form-group">
                  <label>Event Type *</label>
                  <select value={eventType} onChange={(e) => setEventType(e.target.value)} required>
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {eventType === 'Other' && (
                  <div className="form-group">
                    <label>You don't see your event type name in the drop-down? Don't worry, we have got you! Fill the name of the event below *</label>
                    <input
                      type="text"
                      value={customEventType}
                      onChange={(e) => setCustomEventType(e.target.value)}
                      placeholder="Enter your custom event type (max 20 words, 200 characters)"
                      maxLength="200"
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <label>Event Date *</label>
                  <input
                    type="date"
                    min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                    value={eventDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Event Location *</label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Enter event location (e.g., Nairobi, Kenya)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Approximate Number of Attendees *</label>
                  <input
                    type="number"
                    value={approxAttendees}
                    onChange={(e) => setApproxAttendees(e.target.value)}
                    placeholder="e.g., 100"
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Budget (in KES) *</label>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., 50000"
                    min="0"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Phone Number *</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g., +254 712 345 678"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Event Details *</label>
                  <textarea
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    placeholder="Describe your event requirements..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Special Requirements *</label>
                  <textarea
                    value={specialReq}
                    onChange={(e) => setSpecialReq(e.target.value)}
                    placeholder="Any special requests or additional details..."
                    required
                  ></textarea>
                </div>
                  <button type="submit" className="book-btn" disabled={isLoading || !!dateError}>
                    {isLoading ? (
                      <>
                        <span className="spinner"></span> Booking...
                      </>
                    ) : (
                      'Book Event'
                    )}
                  </button>
              </form>
            </div>
            <div className="bookings-section">
              <h3>Your Bookings</h3>
              {bookings.length === 0 ? (
                <p>No bookings yet. Book your first event!</p>
              ) : (
                <div className="bookings-list">
                  {bookings.map(booking => (
                      <div key={booking.id} className="booking-card">
                        <h3>{booking.eventType}</h3>
                        <p><strong>Date:</strong> {booking.eventDate}</p>
                        <p><strong>Location:</strong> {booking.eventLocation || 'N/A'}</p>
                        <p><strong>Attendees:</strong> {booking.approxAttendees || 'N/A'}</p>
                        <p><strong>Budget:</strong> KES {booking.budget || 'N/A'}</p>
                        <p><strong>Details:</strong> {booking.eventDetails}</p>
                        <span className={`status ${booking.status.toLowerCase().replace(/\s+/g, '-')}`}>{booking.status}</span>
                        <button onClick={() => handleDeleteBooking(booking.id)} className="delete-btn">Delete</button>
                      </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="testimonials-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <h3>{testimonial.name}</h3>
                  <p>"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="calendar-section">
            <div className="weather-traffic-header">
              <h2>Weather & Traffic</h2>
              <p className="weather-traffic-subtitle">Contextual updates for your upcoming events</p>
            </div>
            <div className="weather-traffic-cards">
              {bookings.filter(booking => new Date(booking.eventDate) >= new Date()).length > 0 ? (
                bookings.filter(booking => new Date(booking.eventDate) >= new Date()).slice(0, 1).map(booking => {
                  // Fetch weather if not already fetched
                  if (!weatherData[booking.id] && !weatherLoading[booking.id]) {
                    fetchWeather(booking.eventLocation, booking.eventDate, booking.id);
                  }
                  // Fetch traffic if not already fetched
                  if (!trafficData[booking.id] && !trafficLoading[booking.id]) {
                    fetchTraffic(booking.id);
                  }
                  const weather = weatherData[booking.id];
                  const traffic = trafficData[booking.id];
                  return (
                    <React.Fragment key={booking.id}>
                      <div className="weather-card">
                        <h3 className="card-title">Weather Conditions</h3>
                        <div className="event-info">
                          <h4>{booking.eventType} - {new Date(booking.eventDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}, {new Date(booking.eventDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</h4>
                        </div>
                        <div className="weather-badge">
                          <i className="fas fa-cloud-rain"></i> {weatherLoading[booking.id] ? 'Loading...' : weather && !weather.error ? `${weather.temp}°C, ${weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}` : 'Moderate rain'}
                        </div>
                        <div className="suggestion-box">
                          <strong>Suggestion:</strong>
                          <p>{weather && !weather.error ? (
                            weather.description.toLowerCase().includes('rain') || weather.humidity > 70 ?
                            'Add tents to your equipment list or consider adjusting setup time by +30 mins.' :
                            'Weather looks good! No special preparations needed.'
                          ) : 'Add tents to your equipment list or consider adjusting setup time by +30 mins.'}</p>
                        </div>
                      </div>
                      <div className="traffic-card">
                        <h3 className="card-title">Traffic Updates</h3>
                        <div className="event-info">
                          <h4>{booking.eventType} - {new Date(booking.eventDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}, {new Date(booking.eventDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</h4>
                        </div>
                        <div className="traffic-badge">
                          <i className="fas fa-car"></i> {trafficLoading[booking.id] ? 'Loading...' : traffic && !traffic.error ? traffic.message : 'Traffic flow is normal on Nairobi-Nakuru highway'}
                        </div>
                        <div className="suggestion-box">
                          <strong>Suggestion:</strong>
                          <p>{traffic && !traffic.error ? (
                            traffic.congestionLevel === 'High' ? 'Plan alternative routes or allow extra 2+ hours for travel.' :
                            traffic.congestionLevel === 'Medium' ? 'Allow extra 30-60 minutes for travel time.' :
                            'Traffic conditions are favorable. Normal travel time expected.'
                          ) : 'Traffic conditions are favorable. Normal travel time expected.'}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <div className="no-bookings-message">
                  <h3>No Upcoming Events</h3>
                  <p>You don't have any upcoming events booked. Book an event first to see weather and traffic updates for your event location.</p>
                  <button className="book-now-btn" onClick={() => setActiveTab('dashboard')}>Book an Event</button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'help' && (
          <div className="help-section">
            <h2>Need Help?</h2>
            <p className="help-intro">Welcome to the Snakepiece Event House Kenya Help Center. Here you'll find answers to common questions and guidance on how to make the most of our services.</p>

            <div className="help-content">
              <div className="help-category">
                <h3>Getting Started</h3>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(0)}>
                    How do I book an event?
                    <span className="faq-toggle">{expandedFAQs[0] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[0] && (
                    <div className="faq-answer">
                      <p>Navigate to the Dashboard or Booking Hub tab. Fill out the event details form including type, date, location, attendees, budget, and requirements. Click "Book Event" to submit.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(1)}>
                    What types of events do you handle?
                    <span className="faq-toggle">{expandedFAQs[1] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[1] && (
                    <div className="faq-answer">
                      <p>We handle weddings, corporate events, birthday parties, conferences, and custom events. If your event type isn't listed, select "Other" and specify it.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="help-category">
                <h3>Services & Pricing</h3>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(2)}>
                    What services do you offer?
                    <span className="faq-toggle">{expandedFAQs[2] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[2] && (
                    <div className="faq-answer">
                      <p>Our services include PA systems, MC services, videography, photography, tents, cars, event planning, catering, decorations, and lighting.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(3)}>
                    How is pricing determined?
                    <span className="faq-toggle">{expandedFAQs[3] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[3] && (
                    <div className="faq-answer">
                      <p>Pricing depends on event type, number of attendees, location, and specific requirements. Contact us for a customized quote.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="help-category">
                <h3>Booking & Management</h3>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(4)}>
                    How far in advance should I book?
                    <span className="faq-toggle">{expandedFAQs[4] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[4] && (
                    <div className="faq-answer">
                      <p>We recommend booking at least one week in advance to ensure availability and proper coordination.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(5)}>
                    Can I modify or cancel my booking?
                    <span className="faq-toggle">{expandedFAQs[5] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[5] && (
                    <div className="faq-answer">
                      <p>You can delete bookings from your dashboard. For modifications, please contact our team directly.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(6)}>
                    What happens after I book?
                    <span className="faq-toggle">{expandedFAQs[6] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[6] && (
                    <div className="faq-answer">
                      <p>An agent will contact you within 24 hours to discuss details and confirm arrangements.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="help-category">
                <h3>Weather & Traffic</h3>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(7)}>
                    How does the weather feature work?
                    <span className="faq-toggle">{expandedFAQs[7] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[7] && (
                    <div className="faq-answer">
                      <p>The weather feature provides current conditions for your event location to help with planning (e.g., whether to include tents).</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(8)}>
                    What about traffic updates?
                    <span className="faq-toggle">{expandedFAQs[8] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[8] && (
                    <div className="faq-answer">
                      <p>Traffic information focuses on major routes like Nairobi-Nakuru highway, providing congestion levels and travel suggestions.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="help-category">
                <h3>Contact & Support</h3>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(9)}>
                    How can I contact you?
                    <span className="faq-toggle">{expandedFAQs[9] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[9] && (
                    <div className="faq-answer">
                      <p>Use the Contact page to reach out, or call us directly. Our team is here to help with any questions.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(10)}>
                    What if I need urgent assistance?
                    <span className="faq-toggle">{expandedFAQs[10] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[10] && (
                    <div className="faq-answer">
                      <p>For urgent matters, please call our hotline. We're committed to making your event successful.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="help-contact-box">
              <h3>Still Need Help?</h3>
              <p>Our friendly team is ready to assist you. Don't hesitate to reach out!</p>
              <button className="contact-help-btn" onClick={() => window.open('https://wa.me/254115481953', '_blank')}>Get Urgent Assistance</button>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Booking Confirmed!</h2>
                <button className="close-modal" onClick={() => setShowModal(false)}>×</button>
              </div>
              <div className="modal-body">
                <p><strong>Snakepiece Event House Kenya</strong> is grateful for your trust in us!</p>
                <p>Your booked event has been sent successfully.</p>
                <p>An agent will be in touch with you in the next 24 hours with more details.</p>
                <div className="modal-icon">
                  <FaRocket />
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-btn" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {dateError && (
          <div className="modal-overlay">
            <div className="delete-modal-content">
              <div className="modal-header">
                <h2>⚠️ Date Selection Error</h2>
                <button className="close-modal" onClick={() => setDateError('')}>×</button>
              </div>
              <div className="modal-body">
                <p>{dateError}</p>
              </div>
              <div className="modal-footer">
                <button className="modal-btn" onClick={() => setDateError('')}>Okay</button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="delete-modal-content">
              <div className="modal-header">
                <h2>⚠️ Delete Booking</h2>
                <button className="close-modal" onClick={cancelDeleteBooking}>×</button>
              </div>
              <div className="modal-body">
                <p><strong>You want to delete an Event that you had booked.</strong></p>
                <p>Please note that this action is not reversible as because when you delete the Booking, it will also be deleted from our server.</p>
                <p>Would you wish to continue deleting the Event that you had booked?</p>
                {deleteError && <p className="error-message">{deleteError}</p>}
              </div>
              <div className="modal-footer">
                <button type="button" className="delete-confirm-btn" onClick={confirmDeleteBooking} disabled={deleteLoading}>
                  {deleteLoading ? 'Deleting...' : 'Yes'}
                </button>
                <button type="button" className="delete-cancel-btn" onClick={cancelDeleteBooking} disabled={deleteLoading}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteSuccess && (
          <div className="modal-overlay">
            <div className="success-modal-content">
              <div className="modal-body">
                <p>✅ Deleted successfully!</p>
              </div>
            </div>
          </div>
        )}

        {showDeleteAccountModal && (
          <div className="modal-overlay">
            <div className="emotional-delete-modal">
              <div className="modal-header">
                <h2><FaSadTear /> Farewell, Dear Friend</h2>
                <button className="close-modal" onClick={cancelDeleteAccount}>×</button>
              </div>
              <div className="modal-body">
                <div className="emotional-content">
                  <div className="heart-icon"><FaHeartBroken /></div>
                  <p className="emotional-message">
                    Oh {user.name}, it's breaking our hearts to see you go... <FaSadTear />
                  </p>
                  <p className="emotional-message">
                    You've been more than just a customer to us – you've been family. Your trust, your smiles, your celebrations... they've made Snakepiece Event House Kenya what it is today.
                  </p>
                  <p className="emotional-message">
                    Remember that magical wedding we helped create? Those birthday parties that brought tears of joy? Those corporate events that sealed deals and created memories?
                  </p>
                  <p className="emotional-message">
                    We cherish every moment we spent with you. Your presence brought light to our days, and your events brought joy to so many lives.
                  </p>
                  <p className="emotional-message">
                    Though our paths may part, know that you'll always have a special place in our hearts. We wish you nothing but happiness, success, and unforgettable moments in your future endeavors.
                  </p>
                  <p className="emotional-message final-message">
                    Goodbye, dear friend. May your life be filled with love, laughter, and beautiful memories. We'll miss you terribly... <FaHeart />
                  </p>
                  <div className="tears"><FaSadTear /><FaSadTear /><FaSadTear /></div>
                </div>
                {deleteAccountError && <p className="error-message">{deleteAccountError}</p>}
              </div>
              <div className="modal-footer">
                <button className="emotional-delete-btn" onClick={confirmDeleteAccount}>
                  <FaSadTear /> Delete My Account Forever
                </button>
                <button className="emotional-stay-btn" onClick={cancelDeleteAccount}>
                  <FaHeart /> Stay With Us
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteAccountLoading && (
          <div className="modal-overlay">
            <div className="loading-modal-content">
              <div className="modal-body">
                <div className="loading-spinner"></div>
                <p>Deleting your account from our server...</p>
                <p className="loading-subtext">Please wait while we say our final goodbyes...</p>
              </div>
            </div>
          </div>
        )}

        {showGoodbyeMessage && (
          <div className="modal-overlay">
            <div className="goodbye-modal-content">
              <div className="modal-body">
                <div className="goodbye-content">
                  <div className="wave-icon">👋</div>
                  <h2>Goodbye, {user.name}</h2>
                  <p>Thank you for being part of our journey...</p>
                  <p>May your future be filled with joy and beautiful moments!</p>
                  <div className="hearts">💖💕💗💓💞</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
