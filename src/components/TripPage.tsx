import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Plane,
  Camera,
  Mountain,
  Heart
} from 'lucide-react';
import './TripPage.css';

interface TripData {
  title: string;
  subtitle: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  location: string;
  highlights: string[];
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: {
    included: string[];
    excluded: string[];
  };
  images: string[];
  bestTime: string;
  cancellationPolicy: string;
  groupDiscounts: {
    minPeople: number;
    discount: string;
  }[];
}

interface TripPageProps {
  tripData: TripData;
}

const TripPage: React.FC<TripPageProps> = ({ tripData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === tripData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? tripData.images.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={20} 
        className={i < rating ? 'star-filled' : 'star-empty'} 
        fill={i < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <section className="trip-page">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="trip-hero"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Gallery */}
          <motion.div 
            className="trip-gallery"
            variants={itemVariants}
          >
            <div className="main-image-container">
              <img 
                src={tripData.images[currentImageIndex]} 
                alt={tripData.title}
                className="main-image"
              />
              <button 
                className="gallery-nav prev"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="gallery-nav next"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="thumbnail-container">
              {tripData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${tripData.title} ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Trip Details */}
          <motion.div 
            className="trip-details"
            variants={itemVariants}
          >
            <div className="trip-meta">
              <div className="trip-tags">
                <span className="tag duration">
                  <Clock size={16} />
                  {tripData.duration}
                </span>
                <span className="tag group-size">
                  <Users size={16} />
                  {tripData.groupSize}
                </span>
                <span className="tag difficulty">
                  <Mountain size={16} />
                  {tripData.difficulty}
                </span>
              </div>
              
              <h1 className="trip-title">{tripData.title}</h1>
              <p className="trip-subtitle">{tripData.subtitle}</p>
              
              <div className="location-rating">
                <div className="location">
                  <MapPin size={16} />
                  <span>{tripData.location}</span>
                </div>
                <div className="rating">
                  {renderStars(tripData.rating)}
                  <span>{tripData.rating} ({tripData.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="price-section">
              <div className="price-amount">
                <span className="amount">₹{tripData.price}</span>
                {tripData.originalPrice && (
                  <span className="original-price">₹{tripData.originalPrice}</span>
                )}
                <span className="per-person">per person</span>
              </div>
              
              <button className="book-now-btn">
                <Calendar size={20} />
                Book Now
              </button>
              
              <div className="group-discounts">
                <h4>Group Discounts</h4>
                {tripData.groupDiscounts.map((discount, index) => (
                  <p key={index}>
                    {discount.minPeople}+ people: {discount.discount} off
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="tab-navigation"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${selectedTab === 'overview' ? 'active' : ''}`}
              onClick={() => setSelectedTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${selectedTab === 'itinerary' ? 'active' : ''}`}
              onClick={() => setSelectedTab('itinerary')}
            >
              Itinerary
            </button>
            <button 
              className={`tab-btn ${selectedTab === 'inclusions' ? 'active' : ''}`}
              onClick={() => setSelectedTab('inclusions')}
            >
              Inclusions
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          key={selectedTab}
          className="tab-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {selectedTab === 'overview' && (
            <motion.div 
              key="overview"
              className="overview-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="content-grid">
                <div className="description-section">
                  <h2>About This Trip</h2>
                  <p>{tripData.description}</p>
                  
                  <div className="highlights">
                    <h3>Highlights</h3>
                    <ul>
                      {tripData.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="trip-info-cards">
                  <div className="info-card">
                    <Calendar size={24} />
                    <h4>Best Time to Visit</h4>
                    <p>{tripData.bestTime}</p>
                  </div>
                  
                  <div className="info-card">
                    <Plane size={24} />
                    <h4>Starting Point</h4>
                    <p>{tripData.location}</p>
                  </div>
                  
                  <div className="info-card">
                    <Camera size={24} />
                    <h4>Photography</h4>
                    <p>Perfect for landscape and adventure photography</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'itinerary' && (
            <motion.div 
              key="itinerary"
              className="itinerary-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Day-wise Itinerary</h2>
              <div className="itinerary-timeline">
                {tripData.itinerary.map((day, index) => (
                  <div key={index} className="day-item">
                    <div className="day-number">{day.day}</div>
                    <div className="day-content">
                      <h3>{day.title}</h3>
                      <p>{day.description}</p>
                      <div className="activities">
                        <h4>Activities:</h4>
                        <ul>
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedTab === 'inclusions' && (
            <motion.div 
              key="inclusions"
              className="inclusions-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inclusions-grid">
                <div className="inclusion-card">
                  <h3>What's Included</h3>
                  <ul>
                    {tripData.inclusions.included.map((item, index) => (
                      <li key={index}>
                        <Heart size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="exclusion-card">
                  <h3>What's Not Included</h3>
                  <ul>
                    {tripData.inclusions.excluded.map((item, index) => (
                      <li key={index}>
                        <span className="exclude-icon">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cancellation-policy">
                <h3>Cancellation Policy</h3>
                <p>{tripData.cancellationPolicy}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TripPage;
