import React from 'react';
import TripPage from '../TripPage';

const SpitiValley: React.FC = () => {
  const tripData = {
    title: "Spiti Short Circuit via Chandrataal",
    subtitle: "Discover the pristine beauty of Spiti Valley with its ancient monasteries, crystal-clear lakes, and rugged landscapes",
    duration: "6 Days 5 Nights",
    groupSize: "Max 10 People",
    difficulty: "Moderate to Challenging",
    rating: 4.9,
    reviews: 89,
    price: "28,999",
    originalPrice: "34,999",
    location: "Spiti Valley, Himachal Pradesh",
    highlights: [
      "Camp at the mystical Chandrataal Lake",
      "Visit ancient Key Monastery at 13,668 ft",
      "Explore the fossil village of Langza",
      "Witness the highest post office in the world",
      "Experience local homestays and culture",
      "Drive through the treacherous Kunzum Pass"
    ],
    description: "Embark on an incredible journey through the 'Middle Land' - Spiti Valley, a remote and pristine region in the Himalayas. This 6-day adventure takes you through some of the most isolated and beautiful landscapes in India, featuring ancient monasteries, crystal-clear lakes, and traditional villages that have remained unchanged for centuries.",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Manali",
        description: "Arrive in Manali and prepare for the journey to Spiti Valley.",
        activities: [
          "Flight/train to Delhi",
          "Drive to Manali (12-14 hours)",
          "Check-in and acclimatization",
          "Briefing about the trip"
        ]
      },
      {
        day: 2,
        title: "Manali to Chandrataal",
        description: "Drive to the mystical Chandrataal Lake, camping under the stars.",
        activities: [
          "Early morning drive to Chandrataal",
          "Cross Rohtang Pass (13,050 ft)",
          "Camp setup at Chandrataal",
          "Sunset photography and stargazing"
        ]
      },
      {
        day: 3,
        title: "Chandrataal to Kaza",
        description: "Journey to Kaza, the capital of Spiti, via Kunzum Pass.",
        activities: [
          "Sunrise at Chandrataal Lake",
          "Cross Kunzum Pass (15,059 ft)",
          "Visit Kaza and check-in",
          "Explore local market and culture"
        ]
      },
      {
        day: 4,
        title: "Kaza Local Sightseeing",
        description: "Explore the ancient monasteries and villages around Kaza.",
        activities: [
          "Visit Key Monastery (13,668 ft)",
          "Explore Kibber village (highest motorable village)",
          "Visit Langza fossil village",
          "Photography and cultural interactions"
        ]
      },
      {
        day: 5,
        title: "Kaza to Tabo and Dhankar",
        description: "Visit the ancient monasteries of Tabo and Dhankar.",
        activities: [
          "Visit Tabo Monastery (1000+ years old)",
          "Explore Dhankar Monastery and Fort",
          "Visit Pin Valley if accessible",
          "Return to Kaza for overnight stay"
        ]
      },
      {
        day: 6,
        title: "Kaza to Manali",
        description: "Return journey to Manali with memories of the pristine Spiti Valley.",
        activities: [
          "Early morning drive back to Manali",
          "Cross Kunzum Pass again",
          "Arrive in Manali",
          "Departure with beautiful memories"
        ]
      }
    ],
    inclusions: {
      included: [
        "Accommodation in hotels and camps",
        "All meals during the trip",
        "Transport in 4WD vehicles",
        "Professional guide and experienced driver",
        "Camping equipment and tents",
        "All permits and entry fees",
        "Medical kit and emergency supplies",
        "Photography assistance"
      ],
      excluded: [
        "Transport to/from Delhi",
        "Personal expenses and tips",
        "Travel insurance",
        "Alcoholic beverages",
        "Any additional activities",
        "Expenses due to weather conditions"
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    bestTime: "May to October (Best: June to September)",
    cancellationPolicy: "Free cancellation up to 25 days before departure. 70% refund for cancellations 10-25 days before. No refund for cancellations within 10 days.",
    groupDiscounts: [
      { minPeople: 4, discount: "8%" },
      { minPeople: 6, discount: "12%" },
      { minPeople: 8, discount: "18%" }
    ]
  };

  return <TripPage tripData={tripData} />;
};

export default SpitiValley;
