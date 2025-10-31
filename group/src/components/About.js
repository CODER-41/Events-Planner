import React, {useState, useEffect} from 'react';
import {FaEnvelope, FaInstagram, FaFacebook,FaWhatsapp} from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setSubmitted(true);
        setFormData({name: '', email: '', message: ''});
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
    <div className="contact-container" id="contact">
      <h2 className="contact-header">Contact Us</h2>
      <p className="contact-text">
        Have questions or want to plan an event with us? Reach out below.
      </p>

      <div className="contact-icons">
        <a
          href="mailto:djk14530@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaEnvelope size={30} /> Email
        </a>

        <a
          href="https://instagram.com/snakepiece_event_house"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaInstagram size={30} /> Instagram
        </a>

        <a
          href="https://facebook.com/snakepieceeventhouse"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaFacebook size={30} /> Facebook
        </a>

        <a
          href="https://wa.me/254115481953"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaWhatsapp size={30} /> WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        ></textarea>

        <button type="submit" className="contact-button">
          Send Message
        </button>

        {submitted && <p className="contact-success">Thanks for contacting us! 💌</p>}
      </form>

      <div className="footer-quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <p className="contact-copyright">© 2025 Snake Piece Event House. All rights reserved.</p>
    </div>
  );
}

export default Contact;
