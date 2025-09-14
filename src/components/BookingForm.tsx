import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    selectedDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const availableDates = [
    { date: '2024-09-13', display: '13 Sep 2024', available: true },
    { date: '2024-09-20', display: '20 Sep 2024', available: true },
    { date: '2024-09-27', display: '27 Sep 2024', available: true },
    { date: '2024-10-04', display: '4 Oct 2024', available: true },
    { date: '2024-10-11', display: '11 Oct 2024', available: true },
    { date: '2024-10-18', display: '18 Oct 2024', available: false },
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelers: 1,
      selectedDate: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const calculatePrice = () => {
    const basePrice = 18499;
    return basePrice * formData.travelers;
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="booking-success"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="success-icon">
          <CheckCircle size={64} />
        </div>
        <h3>Booking Request Submitted!</h3>
        <p>Thank you for your interest in our Meghalaya Bagpacking Tour. We'll contact you within 24 hours to confirm your booking and provide further details.</p>
        <motion.button 
          className="btn-primary"
          onClick={resetForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Make Another Booking
        </motion.button>
      </motion.div>
    );
  }

  return (
    <section className="booking-form" id="booking">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Ready for some Adventure?</h2>
          <p>Let's Plan it Together!!</p>
        </motion.div>

        <div className="booking-container">
          {/* Booking Form */}
          <motion.div 
            className="form-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="booking-form-content">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <div className="input-container">
                  <Users size={20} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className={activeField === 'name' ? 'focused' : ''}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="input-container">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className={activeField === 'email' ? 'focused' : ''}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div className="input-container">
                  <Phone size={20} className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    className={activeField === 'phone' ? 'focused' : ''}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="travelers">Number of Travelers *</label>
                  <div className="input-container">
                    <Users size={20} className="input-icon" />
                    <select
                      id="travelers"
                      value={formData.travelers}
                      onChange={(e) => handleInputChange('travelers', parseInt(e.target.value))}
                      onFocus={() => setActiveField('travelers')}
                      onBlur={() => setActiveField(null)}
                      className={activeField === 'travelers' ? 'focused' : ''}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <div className="input-container">
                    <Calendar size={20} className="input-icon" />
                    <select
                      id="date"
                      value={formData.selectedDate}
                      onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                      onFocus={() => setActiveField('date')}
                      onBlur={() => setActiveField(null)}
                      className={activeField === 'date' ? 'focused' : ''}
                      required
                    >
                      <option value="">Select Date</option>
                      {availableDates.map(date => (
                        <option 
                          key={date.date} 
                          value={date.date}
                          disabled={!date.available}
                        >
                          {date.display} {!date.available ? '(Full)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <div className="input-container">
                  <MessageCircle size={20} className="input-icon" />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className={activeField === 'message' ? 'focused' : ''}
                    rows={4}
                    placeholder="Any special requirements or questions..."
                  />
                </div>
              </div>

              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Booking Request
              </motion.button>
            </form>
          </motion.div>

          {/* Price Summary */}
          <motion.div 
            className="price-summary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="summary-card">
              <h3>Trip Summary</h3>
              <div className="summary-details">
                <div className="summary-item">
                  <span>Meghalaya Bagpacking Tour</span>
                  <span>5N/6D</span>
                </div>
                <div className="summary-item">
                  <span>Travelers</span>
                  <span>{formData.travelers}</span>
                </div>
                <div className="summary-item">
                  <span>Price per person</span>
                  <span>₹18,499</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-item total">
                  <span>Total Amount</span>
                  <span>₹{calculatePrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="discount-info">
                <div className="discount-badge">
                  <span>8% OFF</span>
                </div>
                <p>You save ₹{((19999 - 18499) * formData.travelers).toLocaleString()}</p>
              </div>

              <div className="contact-info">
                <h4>Need Help?</h4>
                <p>Call us at <a href="tel:+919598964895">+91 95989 64895</a></p>
                <p>or WhatsApp us for instant assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
