import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onGalleryPrev: () => void;
  onGalleryNext: () => void;
  currentImageIndex: number;
  galleryImages: string[];
}

const Hero: React.FC<HeroProps> = ({ onGalleryPrev, onGalleryNext, currentImageIndex, galleryImages }) => {
  const tripData = {
    title: 'Meghalaya Bagpacking Tour',
    duration: '5 Nights 6 Days',
    type: 'Group Trip',
    location: 'Meghalaya',
    rating: 4.8,
    reviews: 124,
    price: 18499,
    originalPrice: 19999,
    discount: 8,
    description: 'Meghalaya the \'Abode of Clouds,\' is a paradise of waterfalls, living root bridges, crystal-clear rivers, and ancient caves. From Cherrapunji\'s misty cliffs to Mawlynnong\'s pristine charm, this North-East gem blends adventure with serenity, offering an unforgettable journey into nature and culture.',
    images: galleryImages
  };

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
    <section className="hero">
      <div className="hero-container">
        {/* Gallery Section */}
        <motion.div 
          className="gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="gallery-main">
            <motion.img 
              src={tripData.images[currentImageIndex]}
              alt={tripData.title}
              className="main-image"
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Navigation Arrows */}
            <motion.button 
              className="gallery-nav prev"
              onClick={onGalleryPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button 
              className="gallery-nav next"
              onClick={onGalleryNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Image Counter */}
            <div className="image-counter">
              {currentImageIndex + 1} / {tripData.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {tripData.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${tripData.title} ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => {/* Handle thumbnail click */}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Trip Details Section */}
        <motion.div 
          className="trip-details"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trip Header */}
          <motion.div className="trip-header" variants={itemVariants}>
            <div className="trip-meta">
              <span className="duration">{tripData.duration}</span>
              <span className="type">{tripData.type}</span>
            </div>
            <h1 className="trip-title">{tripData.title}</h1>
            <div className="trip-location">
              <MapPin size={20} />
              <span>{tripData.location}</span>
            </div>
          </motion.div>

          {/* Rating and Reviews */}
          <motion.div className="trip-rating" variants={itemVariants}>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={i < Math.floor(tripData.rating) ? 'filled' : 'empty'} 
                />
              ))}
            </div>
            <span className="rating-text">
              {tripData.rating} ({tripData.reviews} reviews)
            </span>
          </motion.div>

          {/* Description */}
          <motion.p className="trip-description" variants={itemVariants}>
            {tripData.description}
          </motion.p>

          {/* Price Section */}
          <motion.div className="price-section" variants={itemVariants}>
            <div className="price-info">
              <div className="discount-badge">
                {tripData.discount}% Off
              </div>
              <div className="price-details">
                <span className="price-label">Starting from ₹{tripData.originalPrice}</span>
                <div className="price-amount">
                  <span className="currency">₹</span>
                  <span className="amount">{tripData.price.toLocaleString()}</span>
                  <span className="per-person">per adult</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="action-buttons" variants={itemVariants}>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Book Now
            </motion.button>
            
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Itinerary
            </motion.button>
          </motion.div>

          {/* Available Dates */}
          <motion.div className="available-dates" variants={itemVariants}>
            <h3>Available Dates</h3>
            <div className="date-chips">
              {['13 Sep', '20 Sep', '27 Sep', '4 Oct', '11 Oct'].map((date, index) => (
                <motion.div 
                  key={date}
                  className="date-chip"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {date}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
