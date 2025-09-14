import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Clock, Camera, Footprints, Mountain } from 'lucide-react';
import './Itinerary.css';

const Itinerary: React.FC = () => {
  const [expandedDays, setExpandedDays] = useState<number[]>([0]);

  const itineraryData = [
    {
      day: 1,
      title: "Arrival in Guwahati & Transfer to Shillong",
      summary: "Arrival at Guwahati, meet your co-travellers at the airport by 10:00 AM.",
      details: [
        "Arrival at Guwahati, meet your co-travellers at the airport by 10:00 AM.",
        "Depart for Shillong with a lunch stop en route and visit Umiam Lake View Point.",
        "Reach Shillong and visit the Local Police Bazar Market.",
        "Check-in and overnight stay at Shillong hotel."
      ],
      highlights: ["Airport Pickup", "Umiam Lake", "Police Bazar"],
      duration: "Full Day",
      icon: MapPin
    },
    {
      day: 2,
      title: "Shillong to Cherrapunji | Sightseeing",
      summary: "Start your day with breakfast at the hotel, depart for Laitlum Canyon also known as - End of the Hills.",
      details: [
        "Start your day with breakfast at the hotel, depart for Laitlum Canyon also known as - End of the Hills.",
        "Next up, we will take a stop at the Mawkdok Valley Viewpoint.",
        "Later enjoy the stunning scenery at Lyngksiar Waterfall.",
        "In the evening soak in a breathtaking sunset at Nohkalikai Waterfall, Tallest plunge waterfall in India.",
        "Check-in and overnight stay at Cherrapunji."
      ],
      highlights: ["Laitlum Canyon", "Mawkdok Valley", "Lyngksiar Waterfall", "Nohkalikai Waterfall"],
      duration: "Full Day",
      icon: Camera
    },
    {
      day: 3,
      title: "Living Root Bridges Trek",
      summary: "Enjoy breakfast at the hotel, later head towards Tyrna Village.",
      details: [
        "Enjoy breakfast at the hotel, later head towards Tyrna Village.",
        "Reach Tyrna and start your trek for Single Root Bridge.",
        "Head out to explore the marvelous Umshiang Double Decker Living Root Bridge.",
        "Trek back to Tyrna and return to your hotel.",
        "Overnight stay in Cherrapunji."
      ],
      highlights: ["Single Root Bridge", "Double Decker Bridge", "Tyrna Village"],
      duration: "6-7 Hours",
      icon: Footprints
    },
    {
      day: 4,
      title: "Caves, Mawlynnong & Shnongpdeng",
      summary: "Breakfast at the Hotel, and then Depart for Mawsmai Caves.",
      details: [
        "Breakfast at the Hotel, and then Depart for Mawsmai Caves.",
        "After exploring the limestone caves, head towards Dawki.",
        "En route, visit and experience Mawlynnong, Asia's cleanest village.",
        "Continue your journey to Shnongpdeng via Dawki, India-Bangladesh Border.",
        "Enjoy overnight stay with bonfire at camps in Shnongpdeng."
      ],
      highlights: ["Mawsmai Caves", "Mawlynnong Village", "Dawki Border", "Bonfire Camp"],
      duration: "Full Day",
      icon: Mountain
    },
    {
      day: 5,
      title: "Water Activities & Krang Shuri Falls | Dawki to Shillong",
      summary: "Enjoy breakfast at the campsite with a stunning view of the Umngot River (Dawki River).",
      details: [
        "Enjoy breakfast at the campsite with a stunning view of the Umngot River (Dawki River).",
        "Put on your life jacket and dive into a variety of water activities, including Boating, Cliff jumping, Kayaking.",
        "Later visit the mesmerizing Krang Shuri Falls.",
        "Check-in at the hotel for an overnight stay in Shillong."
      ],
      highlights: ["Water Activities", "Cliff Jumping", "Kayaking", "Krang Shuri Falls"],
      duration: "Full Day",
      icon: Camera
    },
    {
      day: 6,
      title: "Departure from Guwahati",
      summary: "Depart for Guwahati Airport after having Breakfast.",
      details: [
        "Depart for Guwahati Airport after having Breakfast.",
        "Reach by evening and board your flight post 05:00 PM.",
        "Drop at Lokpriya Gopinath Bordoloi International Airport, Bidding Farewell to your fellow travelers."
      ],
      highlights: ["Airport Drop", "Breakfast"],
      duration: "Half Day",
      icon: MapPin
    }
  ];

  const toggleDay = (dayIndex: number) => {
    setExpandedDays(prev => 
      prev.includes(dayIndex) 
        ? prev.filter(day => day !== dayIndex)
        : [...prev, dayIndex]
    );
  };

  const expandAll = () => {
    setExpandedDays(itineraryData.map((_, index) => index));
  };

  const collapseAll = () => {
    setExpandedDays([]);
  };

  return (
    <section className="itinerary" id="itinerary">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Itinerary</h2>
          <div className="itinerary-controls">
            <motion.button 
              className="control-btn"
              onClick={expandAll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Expand All
            </motion.button>
            <motion.button 
              className="control-btn"
              onClick={collapseAll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Collapse All
            </motion.button>
          </div>
        </motion.div>

        <div className="itinerary-timeline">
          {itineraryData.map((day, index) => {
            const IconComponent = day.icon;
            const isExpanded = expandedDays.includes(index);
            
            return (
              <motion.div 
                key={day.day}
                className={`timeline-item ${isExpanded ? 'expanded' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <IconComponent size={20} />
                  </div>
                  {index < itineraryData.length - 1 && <div className="timeline-line" />}
                </div>

                <div className="timeline-content">
                  <motion.div 
                    className="timeline-header"
                    onClick={() => toggleDay(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="day-info">
                      <h3>Day {day.day}</h3>
                      <h4>{day.title}</h4>
                      <div className="day-meta">
                        <span className="duration">
                          <Clock size={16} />
                          {day.duration}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="expand-icon"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </motion.div>

                  <div className="timeline-summary">
                    <p>{day.summary}</p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        className="timeline-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="details-content">
                          <div className="detailed-itinerary">
                            <h5>Detailed Itinerary:</h5>
                            <ul>
                              {day.details.map((detail, detailIndex) => (
                                <motion.li 
                                  key={detailIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: detailIndex * 0.1 }}
                                >
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="day-highlights">
                            <h5>Highlights:</h5>
                            <div className="highlight-tags">
                              {day.highlights.map((highlight, highlightIndex) => (
                                <motion.span 
                                  key={highlightIndex}
                                  className="highlight-tag"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: highlightIndex * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {highlight}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
