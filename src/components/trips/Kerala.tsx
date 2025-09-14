import React from 'react';
import TripPage from '../TripPage';

const Kerala: React.FC = () => {
  const tripData = {
    title: "Kerala Backwaters & Hillscape Retreat",
    subtitle: "Experience God's Own Country with its serene backwaters, lush hill stations, and rich cultural heritage",
    duration: "7 Days 6 Nights",
    groupSize: "Max 15 People",
    difficulty: "Easy to Moderate",
    rating: 4.7,
    reviews: 234,
    price: "32,999",
    originalPrice: "38,999",
    location: "Kerala, India",
    highlights: [
      "Houseboat cruise through Kerala backwaters",
      "Explore the tea plantations of Munnar",
      "Visit Periyar Wildlife Sanctuary",
      "Experience traditional Kathakali dance",
      "Relax on pristine beaches of Kochi",
      "Taste authentic Kerala cuisine"
    ],
    description: "Discover the enchanting beauty of Kerala, known as 'God's Own Country'. This 7-day journey takes you through the most iconic destinations of Kerala - from the tranquil backwaters of Alleppey to the misty hills of Munnar, and the wildlife-rich forests of Thekkady. Experience the perfect blend of nature, culture, and relaxation in this tropical paradise.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Arrive in Kochi and explore the historic Fort Kochi with its colonial architecture and Chinese fishing nets.",
        activities: [
          "Airport pickup and transfer to hotel",
          "Visit Fort Kochi and Chinese fishing nets",
          "Explore Jew Town and spice markets",
          "Sunset walk along Marine Drive"
        ]
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description: "Drive to Munnar, the tea capital of Kerala, through scenic landscapes and spice plantations.",
        activities: [
          "Early morning drive to Munnar",
          "Visit tea plantations and tea museum",
          "Explore Mattupetty Dam and Echo Point",
          "Check-in at hill station resort"
        ]
      },
      {
        day: 3,
        title: "Munnar Exploration",
        description: "Spend the day exploring the beautiful hill station of Munnar with its tea gardens and scenic viewpoints.",
        activities: [
          "Visit Eravikulam National Park",
          "Explore tea plantations and factory tour",
          "Visit Top Station for panoramic views",
          "Evening at leisure in Munnar"
        ]
      },
      {
        day: 4,
        title: "Munnar to Thekkady",
        description: "Journey to Thekkady, home to the famous Periyar Wildlife Sanctuary and spice plantations.",
        activities: [
          "Drive to Thekkady via spice plantations",
          "Boat safari in Periyar Lake",
          "Spice plantation tour and tasting",
          "Cultural show and local cuisine"
        ]
      },
      {
        day: 5,
        title: "Thekkady to Alleppey",
        description: "Travel to Alleppey, the backwater capital of Kerala, for an unforgettable houseboat experience.",
        activities: [
          "Morning nature walk in Thekkady",
          "Drive to Alleppey",
          "Check-in to traditional houseboat",
          "Sunset cruise through backwaters"
        ]
      },
      {
        day: 6,
        title: "Alleppey Backwater Experience",
        description: "Spend a full day on the houseboat, cruising through the serene backwaters and experiencing local life.",
        activities: [
          "Full day houseboat cruise",
          "Visit local villages and coir making",
          "Traditional Kerala meals on boat",
          "Bird watching and photography"
        ]
      },
      {
        day: 7,
        title: "Alleppey to Kochi & Departure",
        description: "Return to Kochi for departure with beautiful memories of Kerala's natural beauty.",
        activities: [
          "Morning backwater cruise",
          "Drive back to Kochi",
          "Last minute shopping",
          "Airport transfer and departure"
        ]
      }
    ],
    inclusions: {
      included: [
        "Accommodation in hotels and houseboat",
        "All meals (traditional Kerala cuisine)",
        "Transport in air-conditioned vehicles",
        "Professional guide and driver",
        "Houseboat cruise with meals",
        "Boat safari in Periyar Lake",
        "Tea plantation tour",
        "Cultural show tickets",
        "All entry fees and permits"
      ],
      excluded: [
        "Airfare to/from Kerala",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Travel insurance",
        "Additional activities not mentioned",
        "Spa and wellness treatments"
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    bestTime: "October to March (Best weather and clear skies)",
    cancellationPolicy: "Free cancellation up to 20 days before departure. 60% refund for cancellations 10-20 days before. No refund for cancellations within 10 days.",
    groupDiscounts: [
      { minPeople: 4, discount: "6%" },
      { minPeople: 6, discount: "10%" },
      { minPeople: 8, discount: "15%" }
    ]
  };

  return <TripPage tripData={tripData} />;
};

export default Kerala;
