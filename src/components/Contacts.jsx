import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import '../styling/contacts.css'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className='contacts'>
      <div className="title">
        Get In Touch
      </div>
      <div className="des">
        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Whether you have a project in mind or want to connect professionally, feel free to reach out!
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <span className="label">Email</span>
              <span className="value">raghuramarji1@gmail.com</span>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <span className="label">Phone</span>
              <span className="value">+91 9381477498</span>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <span className="label">Location</span>
              <span className="value">Vizag, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <h4>Connect with me</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Additional Info */}
      <div className="additional-info">
        <div className="info-card">
          <h4>Response Time</h4>
          <p>I typically respond within 24-48 hours</p>
        </div>
        <div className="info-card">
          <h4>Availability</h4>
          <p>Open to freelance projects and full-time opportunities</p>
        </div>
        <div className="info-card">
          <h4>Collaboration</h4>
          <p>Interested in EDI development and business analysis projects</p>
        </div>
      </div>
    </section>
  )
}

export default Contacts
