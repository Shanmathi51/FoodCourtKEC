import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const isValidName = (name) => /^[A-Za-z][A-Za-z0-9]*$/.test(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (!isValidPhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    
    if (!isValidName(formData.name)) {
      alert('Name must start with a letter and contain only letters and numbers.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '', phone: '' });
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 2000);
      } else {
        console.error('Failed to send message:', response.status, response.statusText);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='cc-bg'>
      <div className='top-section'>
        <div className='contact-info'>
          <h2>Phone</h2>
          <p>9842706474</p>
          <hr />
          <h2>Email</h2>
          <p><a href="mailto:shanmathik.22bsr@komgu.edu">Send a Report</a></p>
        </div>
      </div>
      <hr />
      <div className='bottom-section'>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className='buttons'>Send</button>
          </form>
        </div>
      </div>
      <div className={`thank-you-overlay ${showThankYou ? 'show' : ''}`}>
        <div className="thank-you-message">
          <p>Thank you for your feedback!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
