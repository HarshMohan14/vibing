import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
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

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Vibin Adventures</h3>
            <p>
              Vibin Adventure is an eco-conscious travel tribe curating unforgettable journeys 
              across India and beyond. Explore offbeat destinations, connect with nature, 
              and vibe with like-minded explorers.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Trips */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Trips</h4>
            <ul>
              <li><a href="#upcoming">Upcoming Groups</a></li>
              <li><a href="#domestic">Domestic</a></li>
              <li><a href="#international">International</a></li>
              <li><a href="#customized">Customized</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>Delhi, India</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:info@vibinadventure.com">info@vibinadventure.com</a>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+919598964895">+91 9598964895</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Vibin Experiences LLP. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
