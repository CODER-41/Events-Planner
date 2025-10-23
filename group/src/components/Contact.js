import React, {useState} from 'react';
import {FaEnvelope, FaInstagram, FaFacebook,FaWhatsapp} from 'react-icons/fa';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent successfully!");
        setSubmitted(true); 
        setFormData({name: '', email: '', message: ''});
    };

    return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.text}>
        Have questions or want to plan an event with us? Reach out below.
      </p>

      <div style={styles.icons}>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaEnvelope size={30} /> Email
        </a>

        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaInstagram size={30} /> Instagram
        </a>

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          colour='red'
        >
          <FaFacebook size={30} /> Facebook
        </a>

        <a
          href="https://wa.me/254712345678"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaWhatsapp size={30} /> WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>

        {submitted && <p style={styles.success}>Thanks for contacting us! 💌</p>}
      </form>
    </div>
  );
}



const styles = {
  body : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  background : {
    backgroundColor: '#e0f7fa',
    padding: '50px 0',
  },
    container: {
        maxWidth: '600px',
        margin: '40 auto',
        textAlign: 'center',    
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },

    heading: {
        color: '#333',
        fontSize: '2em',
        marginBottom: '10px',
    },
    text: {
        color: '#555',
        fontSize: '1em',
        marginBottom: '20px',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '30px',
    },
    iconLink: {
        textDecoration: 'none',
        display: 'flex', 
        fontWeight: 'bold',
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap : '15px',
        margin: '0 15px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize:"1rem",
    },
    textarea: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize:"1rem",
        minHeight: '100px',
        resize: 'vertical',
    },
    button: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: "#007BFF",
        color: '#fff',
        cursor: 'pointer',
        fontSize:"1rem",
    }, 
    Success: {
        color: 'green',
        fontSize: '1em',
        marginTop: '10px',
    },
    icon: {
        color: '#555',
        fontSize: '2em',
        transition: 'color 0.3s',
    },
    iconLinkHover: {
        color: '#007BFF',
    },
};

export default Contact;