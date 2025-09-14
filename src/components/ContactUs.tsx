import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter,
  Youtube,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tripInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        tripInterest: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 95989 64895", "+91 98765 43210"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@vibinadventures.com", "info@vibinadventures.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Adventure Street", "Mumbai, Maharashtra 400001, India"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-6PM"],
      action: "Book Now"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/vibinadventures", color: "#E4405F" },
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/vibinadventures", color: "#1877F2" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/vibinadventures", color: "#1DA1F2" },
    { icon: Youtube, name: "YouTube", url: "https://youtube.com/vibinadventures", color: "#FF0000" }
  ];

  const faqs = [
    {
      question: "How do I book a trip?",
      answer: "You can book a trip by filling out our booking form, calling us directly, or visiting our office. We'll guide you through the entire process."
    },
    {
      question: "What's included in the trip cost?",
      answer: "Trip costs typically include accommodation, meals, transportation, guide services, and activities. Check the inclusions section for specific details."
    },
    {
      question: "Do you provide equipment?",
      answer: "Yes, we provide all necessary safety equipment and gear. Personal items like clothing and toiletries should be brought by participants."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We offer flexible cancellation policies. Full refund for cancellations 30+ days before departure, partial refund for 15-30 days, and no refund for cancellations within 15 days."
    }
  ];

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="contact-hero"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <h1>Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to start your next adventure? We're here to help you plan the perfect trip. 
              Reach out to us and let's make your travel dreams come true!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div 
          className="contact-info-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div 
                key={index}
                className="contact-info-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">
                  <IconComponent size={32} />
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  <div className="info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                  <button className="info-action-btn">
                    {info.action}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="contact-main-content">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="form-header" variants={itemVariants}>
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </motion.div>

              <motion.form 
                className="contact-form"
                onSubmit={handleSubmit}
                variants={itemVariants}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tripInterest">Trip Interest</label>
                    <select
                      id="tripInterest"
                      name="tripInterest"
                      value={formData.tripInterest}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a trip type</option>
                      <option value="meghalaya">Meghalaya Adventure</option>
                      <option value="himalayas">Himalayan Trekking</option>
                      <option value="beach">Beach Destinations</option>
                      <option value="cultural">Cultural Tours</option>
                      <option value="custom">Custom Trip</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
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
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    className="status-message success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle size={20} />
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="status-message error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle size={20} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="contact-sidebar"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Quick Contact */}
              <motion.div className="sidebar-card" variants={itemVariants}>
                <div className="card-header">
                  <MessageCircle size={24} />
                  <h3>Quick Contact</h3>
                </div>
                <p>Need immediate assistance? Call us now!</p>
                <a href="tel:+919598964895" className="quick-call-btn">
                  <Phone size={20} />
                  +91 95989 64895
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div className="sidebar-card" variants={itemVariants}>
                <div className="card-header">
                  <h3>Follow Us</h3>
                </div>
                <p>Stay updated with our latest adventures</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color } as React.CSSProperties}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div className="sidebar-card" variants={itemVariants}>
                <div className="card-header">
                  <MapPin size={24} />
                  <h3>Visit Our Office</h3>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.304892554809!2d72.82658001546689!3d19.022407087105773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9c3c7c3c3c%3A0x3c7c3c3c3c3c3c3c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
                <button className="directions-btn">
                  <MapPin size={16} />
                  Get Directions
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="faq-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </motion.div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
