import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Search, Filter } from 'lucide-react';
import { LehLadakh, SpitiValley, Kerala, Andaman, Kashmir } from './trips';
import './TripsPage.css';

const TripsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const trips = [
    {
      id: 'leh-ladakh',
      title: 'Leh Ladakh with Nubra & Pangong',
      subtitle: 'Experience the mesmerizing beauty of Ladakh',
      duration: '8 Days 7 Nights',
      groupSize: 'Max 12 People',
      difficulty: 'Moderate',
      rating: 4.8,
      reviews: 156,
      price: '45,999',
      originalPrice: '52,999',
      location: 'Leh, Ladakh',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      component: LehLadakh
    },
    {
      id: 'spiti-valley',
      title: 'Spiti Short Circuit via Chandrataal',
      subtitle: 'Discover the pristine beauty of Spiti Valley',
      duration: '6 Days 5 Nights',
      groupSize: 'Max 10 People',
      difficulty: 'Challenging',
      rating: 4.9,
      reviews: 89,
      price: '28,999',
      originalPrice: '34,999',
      location: 'Spiti Valley, Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      component: SpitiValley
    },
    {
      id: 'kerala',
      title: 'Kerala Backwaters & Hillscape Retreat',
      subtitle: 'Experience God\'s Own Country',
      duration: '7 Days 6 Nights',
      groupSize: 'Max 15 People',
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 234,
      price: '32,999',
      originalPrice: '38,999',
      location: 'Kerala, India',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      component: Kerala
    },
    {
      id: 'andaman',
      title: 'Andaman – Port Blair to Neil Island Exploration',
      subtitle: 'Discover pristine beaches and crystal-clear waters',
      duration: '6 Days 5 Nights',
      groupSize: 'Max 12 People',
      difficulty: 'Easy',
      rating: 4.6,
      reviews: 178,
      price: '35,999',
      originalPrice: '42,999',
      location: 'Andaman & Nicobar Islands',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      component: Andaman
    },
    {
      id: 'kashmir',
      title: 'Kashmir with Gulmarg & Pahalgam',
      subtitle: 'Experience paradise on Earth',
      duration: '7 Days 6 Nights',
      groupSize: 'Max 14 People',
      difficulty: 'Moderate',
      rating: 4.8,
      reviews: 267,
      price: '38,999',
      originalPrice: '45,999',
      location: 'Kashmir, Jammu & Kashmir',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      component: Kashmir
    }
  ];

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

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'all' || trip.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
    return matchesSearch && matchesDifficulty;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? 'star-filled' : 'star-empty'} 
        fill={i < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#10b981';
      case 'moderate': return '#f59e0b';
      case 'challenging': return '#ef4444';
      default: return '#6b7280';
    }
  };

  if (selectedTrip) {
    const trip = trips.find(t => t.id === selectedTrip);
    if (trip) {
      const TripComponent = trip.component;
      return <TripComponent />;
    }
  }

  return (
    <section className="trips-page">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="trips-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="header-content" variants={itemVariants}>
            <h1>Domestic Adventures</h1>
            <p>Explore the incredible diversity of India with our carefully curated domestic trips</p>
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="search-filter-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="search-filter-container">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search trips by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-box">
              <Filter size={20} />
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
              >
                <option value="all">All Difficulty Levels</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Trips Grid */}
        <motion.div 
          className="trips-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredTrips.map((trip) => (
            <motion.div 
              key={trip.id}
              className="trip-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.location.hash = trip.id}
            >
              <div className="trip-image">
                <img src={trip.image} alt={trip.title} />
                <div className="trip-badge" style={{ backgroundColor: getDifficultyColor(trip.difficulty) }}>
                  {trip.difficulty}
                </div>
              </div>
              
              <div className="trip-content">
                <div className="trip-meta">
                  <div className="trip-info">
                    <div className="info-item">
                      <Clock size={16} />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="info-item">
                      <Users size={16} />
                      <span>{trip.groupSize}</span>
                    </div>
                    <div className="info-item">
                      <MapPin size={16} />
                      <span>{trip.location}</span>
                    </div>
                  </div>
                  
                  <div className="rating">
                    {renderStars(Math.floor(trip.rating))}
                    <span>{trip.rating} ({trip.reviews})</span>
                  </div>
                </div>
                
                <h3 className="trip-title">{trip.title}</h3>
                <p className="trip-subtitle">{trip.subtitle}</p>
                
                <div className="trip-price">
                  <div className="price-amount">
                    <span className="current-price">₹{trip.price}</span>
                    {trip.originalPrice && (
                      <span className="original-price">₹{trip.originalPrice}</span>
                    )}
                  </div>
                  <button className="view-details-btn">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTrips.length === 0 && (
          <motion.div 
            className="no-results"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h3>No trips found</h3>
            <p>Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TripsPage;
