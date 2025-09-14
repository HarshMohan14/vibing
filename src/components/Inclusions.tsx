import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info, Users, Utensils, Car, Mountain } from 'lucide-react';
import './Inclusions.css';

const Inclusions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions');

  const inclusionsData = [
    {
      icon: Users,
      title: "Accommodation",
      description: "05 Nights' Accommodation in double/triple sharing rooms in Hotel/Camps/Guest Houses",
      details: [
        "2 Nights stay in Cherrapunji",
        "2 Nights Stay in Shillong", 
        "1 Night stay in Camps at Shnongpdeng"
      ]
    },
    {
      icon: Utensils,
      title: "Meals",
      description: "6 Meals included in your package",
      details: [
        "5 Breakfast (Except Day 1)",
        "1 Dinner at Campsite on Day 4"
      ]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Transportation throughout the trip as per itinerary",
      details: [
        "SEDAN/SUV/Tempo Traveller",
        "All transfers as mentioned"
      ]
    },
    {
      icon: Mountain,
      title: "Activities",
      description: "Adventure activities and experiences",
      details: [
        "Boating at Umngot River",
        "Bonfire at Camps",
        "Local Guide at Double Decker trek"
      ]
    }
  ];

  const exclusionsData = [
    {
      icon: X,
      title: "Taxes & Fees",
      items: ["5% GST"]
    },
    {
      icon: X,
      title: "Additional Services",
      items: [
        "Anything not mentioned in the Itinerary",
        "Early check-in at the hotel"
      ]
    },
    {
      icon: X,
      title: "Transportation",
      items: [
        "Any Airfare / Rail fare other than what is mentioned in \"Inclusions\"",
        "Any type of transportation from Guwahati to Guwahati"
      ]
    },
    {
      icon: X,
      title: "Personal Expenses",
      items: [
        "Any Meal or Beverage other than Inclusions",
        "Any personal expense / Adventure Activity",
        "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities"
      ]
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

  return (
    <section className="inclusions" id="inclusions">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>What's Included & Excluded</h2>
          <p>Everything you need to know about your trip package</p>
        </motion.div>

        <motion.div 
          className="tabs-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="tabs-header">
            <motion.button
              className={`tab ${activeTab === 'inclusions' ? 'active' : ''}`}
              onClick={() => setActiveTab('inclusions')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Check size={20} />
              Inclusions
            </motion.button>
            <motion.button
              className={`tab ${activeTab === 'exclusions' ? 'active' : ''}`}
              onClick={() => setActiveTab('exclusions')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
              Exclusions
            </motion.button>
          </div>

          <motion.div 
            className="tabs-content"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'inclusions' ? (
              <div className="inclusions-grid">
                {inclusionsData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="inclusion-card"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-icon">
                        <IconComponent size={32} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <ul className="inclusion-details">
                        {item.details.map((detail, detailIndex) => (
                          <motion.li 
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <Check size={16} />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="exclusions-grid">
                {exclusionsData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="exclusion-card"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-icon">
                        <IconComponent size={32} />
                      </div>
                      <h3>{item.title}</h3>
                      <ul className="exclusion-items">
                        {item.items.map((exclusion, exclusionIndex) => (
                          <motion.li 
                            key={exclusionIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: exclusionIndex * 0.1 }}
                          >
                            <X size={16} />
                            {exclusion}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Important Information */}
        <motion.div 
          className="important-info"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="info-header">
            <Info size={24} />
            <h3>Important Information</h3>
          </div>
          <div className="info-content">
            <div className="info-section">
              <h4>Cancellation Policy</h4>
              <ul>
                <li>30 days or more before departure: Full refund (minus payment gateway fees)</li>
                <li>15-29 days before departure: 50% refund</li>
                <li>7-14 days before departure: 25% refund</li>
                <li>Less than 7 days: No refund</li>
                <li>No-show or last-minute cancellations: No refund</li>
              </ul>
            </div>
            <div className="info-section">
              <h4>Terms & Conditions</h4>
              <ul>
                <li>Refunds processed within 7-20 business days</li>
                <li>Cancellation requests must be sent in writing (WhatsApp/email)</li>
                <li>Flight bookings, permits, and third-party bookings are non-refundable</li>
                <li>We recommend travel insurance for all long or international trips</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Inclusions;
