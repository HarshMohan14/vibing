import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Upcoming Groups', href: '#upcoming' },
    { name: 'Domestic', href: '#domestic', hasDropdown: true },
    { name: 'International', href: '#international', hasDropdown: true },
    { name: 'Customized', href: '#customized' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const domesticTrips = [
    'Leh Ladakh with Nubra & Pangong',
    'Spiti Short Circuit via Chandrataal',
    'Kerala Backwaters & Hillscape Retreat',
    'Andaman – Port Blair to Neil Island Exploration',
    'Kashmir with Gulmarg & Pahalgam'
  ];

  const internationalTrips = [
    'Bali with Nusa Penida & Temples',
    'Thailand - Phuket & Krabi Island Escape',
    'Dubai Adventure with Abu Dhabi & Burj Views',
    'Bali Highlights with Nusa Penida & Highlands',
    'Thailand - Krabi & Phuket Island Experience'
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1>Vibin Adventures</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <div 
              key={item.name}
              className="nav-item"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              <a href={item.href} className="nav-link">
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
              
              {/* Dropdown Menus */}
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div 
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {(item.name === 'Domestic' ? domesticTrips : internationalTrips).map((trip) => {
                      let tripLink = '#trips';
                      if (item.name === 'Domestic') {
                        switch (trip) {
                          case 'Leh Ladakh with Nubra & Pangong':
                            tripLink = '#leh-ladakh';
                            break;
                          case 'Spiti Short Circuit via Chandrataal':
                            tripLink = '#spiti-valley';
                            break;
                          case 'Kerala Backwaters & Hillscape Retreat':
                            tripLink = '#kerala';
                            break;
                          case 'Andaman – Port Blair to Neil Island Exploration':
                            tripLink = '#andaman';
                            break;
                          case 'Kashmir with Gulmarg & Pahalgam':
                            tripLink = '#kashmir';
                            break;
                          default:
                            tripLink = '#domestic';
                        }
                      }
                      return (
                        <a key={trip} href={tripLink} className="dropdown-item">
                          {trip}
                        </a>
                      );
                    })}
                    <a href={item.name === 'Domestic' ? '#domestic' : '#all-trips'} className="dropdown-item see-all">See All</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

          {/* Contact & Theme Toggle */}
          <div className="header-actions">
            {/* <motion.a 
              href="tel:+919598964895" 
              className="phone-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <span className="phone-text">+91 95989 64895</span>
            </motion.a> */}
          
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
