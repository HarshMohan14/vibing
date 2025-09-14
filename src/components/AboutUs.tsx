import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Globe, Mountain, Camera, Star } from 'lucide-react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
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

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Travelers" },
    { icon: Globe, number: "50+", label: "Destinations" },
    { icon: Award, number: "4.9", label: "Average Rating" },
    { icon: Mountain, number: "100+", label: "Adventure Trips" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Adventure",
      description: "We're driven by our love for exploration and sharing incredible experiences with fellow adventure seekers."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between travelers and creating lifelong friendships through shared adventures."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "Committed to eco-conscious travel that respects local communities and preserves natural beauty."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Dedicated to providing exceptional experiences with attention to every detail of your journey."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Adventure enthusiast with 15+ years in travel industry"
    },
    {
      name: "Priya Sharma",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Expert in logistics and customer experience"
    },
    {
      name: "Arjun Singh",
      role: "Adventure Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Certified mountaineer and wilderness expert"
    },
    {
      name: "Sneha Patel",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Ensuring every traveler has an unforgettable experience"
    }
  ];

  const achievements = [
    "Best Adventure Travel Company 2023",
    "Eco-Friendly Tourism Award 2022",
    "Customer Choice Award 2021-2023",
    "Top Rated on TripAdvisor"
  ];

  return (
    <section className="about-us" id="about">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="about-hero"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <h1>About Vibin Adventures</h1>
            <p className="hero-subtitle">
              We're an eco-conscious travel tribe curating unforgettable journeys across India and beyond. 
              Explore offbeat destinations, connect with nature, and vibe with like-minded explorers.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop" 
              alt="Adventure team" 
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon">
                  <IconComponent size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="story-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="story-content" variants={itemVariants}>
            <h2>Our Story</h2>
            <div className="story-text">
              <p>
                Founded in 2018 by a group of passionate travelers, Vibin Adventures began as a simple idea: 
                to create meaningful connections between people and places. What started as weekend getaways 
                with friends has evolved into a thriving community of adventure seekers.
              </p>
              <p>
                We believe that travel should be more than just visiting places—it should be about experiencing 
                cultures, pushing boundaries, and creating memories that last a lifetime. Our carefully curated 
                trips combine adventure, culture, and sustainability to offer experiences that transform perspectives.
              </p>
              <p>
                From the misty mountains of Meghalaya to the pristine beaches of Andaman, we've been privileged 
                to share India's incredible diversity with thousands of travelers. Our mission is to make adventure 
                accessible to everyone while ensuring we leave a positive impact on the places we visit.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="story-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&h=400&fit=crop" 
              alt="Our journey" 
            />
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="values-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="value-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div 
          className="team-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind your adventures</p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="achievements-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Our Achievements</h2>
            <p>Recognition for our commitment to excellence</p>
          </motion.div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Star size={24} className="achievement-icon" />
                <span>{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="cta-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="cta-content" variants={itemVariants}>
            <h2>Ready to Start Your Adventure?</h2>
            <p>
              Join thousands of travelers who have discovered the joy of adventure with Vibin Adventures. 
              Let's create unforgettable memories together!
            </p>
            <div className="cta-buttons">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Camera size={20} />
                Explore Trips
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={20} />
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
